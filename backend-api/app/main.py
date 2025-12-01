from flask import Flask
from flask_cors import CORS
from app.routes.public import public_routes
from app.routes.admin import admin_routes 
from flask import send_from_directory
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)


app.register_blueprint(public_routes, url_prefix='/api')
app.register_blueprint(admin_routes, url_prefix='/api/admin') 

@app.route('/')
def home():
    return "Portfolio Backend Running (Oracle)"

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), '..', 'uploads')

@app.route('/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)
    

if __name__ == '__main__':
    app.run(debug=True, port=5000)
