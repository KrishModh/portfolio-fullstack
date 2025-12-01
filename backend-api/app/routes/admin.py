from flask import Blueprint, request, jsonify
from app.db import get_db_connection
import oracledb
import os, uuid
from datetime import datetime

admin_routes = Blueprint('admin_routes', __name__)
UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), '../..', 'uploads')


ADMIN_USERNAME = os.getenv('ADMIN_USERNAME', 'admin')
ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', 'admin123')
ADMIN_TOKEN = os.getenv('ADMIN_TOKEN', 'supersecrettoken')  # simple token


def require_admin_auth(req):
    auth_header = req.headers.get('Authorization', '')
    if not auth_header.startswith('Bearer '):
        return False
    token = auth_header.split(' ')[1]
    return token == ADMIN_TOKEN


@admin_routes.route('/login', methods=['POST'])
def admin_login():
    data = request.get_json() or {}
    username = data.get('username')
    password = data.get('password')

    if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
        return jsonify({
            "success": True,
            "token": ADMIN_TOKEN
        }), 200

    return jsonify({"success": False, "message": "Invalid credentials"}), 401

# messages section
@admin_routes.route('/messages', methods=['GET'])
def get_messages():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT id, name, email, message, created_at, is_read
            FROM messages
            ORDER BY created_at DESC
        """)

        rows = cursor.fetchall()
        messages = [
            {
                'id': row[0],
                'name': row[1],
                'email': row[2],
                'message': str(row[3]),
                'created_at': str(row[4]),
                'is_read': int(row[5]) if row[5] is not None else 0
            } for row in rows
        ]

        cursor.close()
        conn.close()

        return jsonify(messages), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# msg read section
@admin_routes.route('/messages/<int:message_id>/read', methods=['POST'])
def mark_message_read(message_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("""
            UPDATE messages
            SET is_read = 1
            WHERE id = :id
        """, {"id": message_id})

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"success": True}), 200

    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500



# project section
@admin_routes.route('/projects', methods=['POST'])
def upload_project():
    try:
        title = request.form.get('title')
        description = request.form.get('description')
        tech_stack = request.form.get('tech_stack')
        github_link = request.form.get('github_link')
        demo_link = request.form.get('demo_link')
        image = request.files.get('image')

        filename = None
        if image:
            ext = os.path.splitext(image.filename)[1]
            filename = f"{uuid.uuid4().hex}{ext}"
            image.save(os.path.join(UPLOAD_FOLDER, filename))

        image_url = f"/uploads/{filename}" if filename else None

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO projects (title, description, tech_stack, github_link, demo_link, image_url)
            VALUES (:title, :description, :tech_stack, :github_link, :demo_link, :image_url)
        """, {
            "title": title,
            "description": description,
            "tech_stack": tech_stack,
            "github_link": github_link,
            "demo_link": demo_link,
            "image_url": image_url
        })

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "Project uploaded successfully!"}), 201

    except Exception as e:
        print("Upload error:", e)
        return jsonify({"success": False, "message": str(e)}), 500

#certificate section
@admin_routes.route('/certificates', methods=['POST'])
def upload_certificate():
    if not require_admin_auth(request):
        return jsonify({"success": False, "message": "Unauthorized"}), 401

    try:
        title = request.form.get('title')
        issuer = request.form.get('issuer')
        year = request.form.get('year')
        cert_link = request.form.get('cert_link')
        image = request.files.get('image')

        filename = None
        if image:
            ext = os.path.splitext(image.filename)[1]
            filename = f"{uuid.uuid4().hex}{ext}"
            image.save(os.path.join(UPLOAD_FOLDER, filename))

        image_url = f"/uploads/{filename}" if filename else None

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO certificates (title, issuer, year, cert_link, image_url)
            VALUES (:title, :issuer, :year, :cert_link, :image_url)
        """, {
            "title": title,
            "issuer": issuer,
            "year": year,
            "cert_link": cert_link,
            "image_url": image_url
        })

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "Certificate uploaded!"}), 201

    except Exception as e:
        print("Error uploading certificate:", e)
        return jsonify({"success": False, "message": str(e)}), 500
