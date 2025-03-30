from flask import Flask
from extensions import db, jwt, cors
from user import user_bp
from auth import auth_bp
from dotenv import load_dotenv
from flask_cors import CORS

cors = CORS(
    resources={r"/api/*": {"origins": "http://localhost:5173"}},
    supports_credentials=True,
)

def create_app():
    load_dotenv(".env")

    app = Flask(__name__)
    app.config.from_prefixed_env()

    cors.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    cors.init_app(
        app,
        origins=["http://localhost:5173"],  # Change based on your frontend URL
        supports_credentials=True,  # Allow cookies to be sent with requests
        methods=["GET", "POST", "OPTIONS", "PUT", "DELETE"],  # Allow specific HTTP methods
        allow_headers=["Content-Type", "Authorization"],  # Allow the necessary headers
    )

    app.register_blueprint(user_bp)
    app.register_blueprint(auth_bp)

    with app.app_context():
        db.create_all()

    return app
