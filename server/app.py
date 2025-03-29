from flask import Flask, request, jsonify
from flask import request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from db import db
from models import User
from dotenv import load_dotenv
import jwt
import datetime
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/')
def hello_world():
    return '<p>Hello, World!</p>'

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"error": "Missing required fields"}), 400

    existing_user = User.query.filter(
        (User.username == username) | (User.email == email)
    ).first()

    if existing_user:
        return jsonify({"error": "Username or email already registered"}), 400

    new_user = User(username=username, email=email)
    
    new_user.set_password(password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Registration failed", "details": str(e)}), 500

@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Missing username or password"}), 400

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        payload = {
            "user_id": user.id,
            "username": user.username,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }

        token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

        return jsonify({"token": token}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
