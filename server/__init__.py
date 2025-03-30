from flask import Flask
from extensions import db, jwt
from user import user_bp
from auth import auth_bp
from dotenv import load_dotenv
from flask_cors import CORS
import os

def create_app():
    # ✅ Load environment variables
    load_dotenv(".env")

    app = Flask(__name__)

    # ✅ Load FLASK_ prefixed variables
    app.config.from_prefixed_env()

    # ✅ Manually load critical secret keys
    app.config["SECRET_KEY"] = os.getenv("FLASK_SECRET_KEY")
    app.config["JWT_SECRET_KEY"] = os.getenv("FLASK_JWT_SECRET_KEY")

    # ✅ Configure CORS
    CORS(
        app,
        origins=[os.getenv("CORS_ORIGIN", "http://localhost:5173")],
        supports_credentials=True,
        methods=["GET", "POST", "OPTIONS", "PUT", "DELETE"],
        allow_headers=["Content-Type", "Authorization"],
    )

    # ✅ Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # ✅ Register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)

    # ✅ Create database tables
    with app.app_context():
        db.create_all()

    return app
