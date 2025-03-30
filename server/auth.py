from flask import Blueprint, request, jsonify, current_app
from flask_cors import cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User
import traceback
from flask_jwt_extended import create_access_token


auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST', 'OPTIONS'])
def register():
    if request.method == 'OPTIONS':
        return '', 200  # CORS preflight check

    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        existing_user = User.query.filter(
            (User.username == username) | (User.email == email)
        ).first()
        if existing_user:
            return jsonify({'error': 'Username or email already exists'}), 409

        hashed_password = generate_password_hash(password)
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully'}), 201

    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': 'Server error'}), 500


@auth_bp.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        return '', 200

    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Missing username or password'}), 400

    user = User.query.filter_by(username=username).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid username or password'}), 401

    try:
        token = create_access_token(identity=user.id)

    except Exception as e:
        traceback.print_exc()
        return jsonify({'error': 'Token generation failed'}), 500
