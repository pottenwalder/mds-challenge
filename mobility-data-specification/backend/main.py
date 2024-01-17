from flask import Flask
from flask_cors import CORS
from app.views import views_bp

app = Flask(__name__)
CORS(app, resources={r"/stations": {"origins": "http://localhost:5173"}})

# Register the Blueprint with your Flask app
app.register_blueprint(views_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
