from flask import Blueprint, request, jsonify
from models import User
from extensions import jwt, db
from flask_jwt_extended import get_jwt_identity, jwt_required

user_bp = Blueprint("user", __name__, url_prefix="/api")

@user_bp.route("/user", methods=["GET"])
@jwt_required()
def get_user():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email
    }), 200
