from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from models import db
from auth import auth_bp
from user import user_bp


jwt = JWTManager()  # Define it here, but init later

def create_app():
    app = Flask(__name__)

    app.config.from_pyfile("config.py", silent=True)

    import os
    from dotenv import load_dotenv
    load_dotenv()

    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv("JWT_SECRET")

    db.init_app(app)
    jwt.init_app(app)  

    # Register Blueprints
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(user_bp, url_prefix="/api")

    # CORS
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}},
         supports_credentials=True,
         allow_headers=["Content-Type", "Authorization"],
         methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

    return app
