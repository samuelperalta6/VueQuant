@echo off
echo 🔧 Setting up Python virtual environment...
python -m venv venv

echo 🌀 Activating virtual environment...
call venv\Scripts\activate

echo 📦 Installing required packages...
pip install flask flask_sqlalchemy flask_cors python-dotenv bcrypt psycopg2-binary

echo 💾 Freezing dependencies...
pip freeze > requirements.txt

echo ✅ Done. You can now run the app with: python app.py
