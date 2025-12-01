from flask import Blueprint, request, jsonify
from app.db import get_db_connection
import oracledb

public_routes = Blueprint('public_routes', __name__)

@public_routes.route('/projects', methods=['GET'])
def get_projects():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT id, title, description, tech_stack, github_link, demo_link, image_url
            FROM projects
        """)
        rows = cursor.fetchall()

        projects = []
        for row in rows:
            desc = row[2]
            tech = row[3]

            if isinstance(desc, oracledb.LOB):
                desc = desc.read()
            if isinstance(tech, oracledb.LOB):
                tech = tech.read()

            projects.append({
                "id": row[0],
                "title": row[1],
                "description": desc,
                "tech_stack": tech,
                "github_link": row[4],
                "demo_link": row[5],
                "image_url": row[6]
            })

        cursor.close()
        conn.close()

        return jsonify(projects), 200

    except Exception as e:
        print("Error in /api/projects:", e)
        return jsonify({"success": False, "message": str(e)}), 500

# certificate
@public_routes.route('/certificates', methods=['GET'])
def get_certificates():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("""
            SELECT id, title, issuer, year, image_url, cert_link
            FROM certificates
            ORDER BY year DESC
        """)
        rows = cursor.fetchall()

        certificates = []
        for row in rows:
            certificates.append({
                "id": row[0],
                "title": row[1],
                "issuer": row[2],
                "year": row[3],
                "image_url": row[4],
                "cert_link": row[5],
            })

        cursor.close()
        conn.close()

        return jsonify(certificates), 200

    except Exception as e:
        print("Error in /api/certificates:", e)
        return jsonify({"success": False, "message": str(e)}), 500

# contact or messages
@public_routes.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        conn = get_db_connection()
        cursor = conn.cursor()

        sql = """
            INSERT INTO messages (name, email, message, created_at, is_read)
            VALUES (:name, :email, :message, SYSTIMESTAMP, 0)
        """
        cursor.execute(sql, {
            "name": name,
            "email": email,
            "message": message
        })


        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"success": True, "message": "Message saved"}), 201

    except Exception as e:
        print("Error in /api/contact:", e)
        return jsonify({"success": False, "message": str(e)}), 500