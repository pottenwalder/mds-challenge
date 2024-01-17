from flask import Blueprint, jsonify
import requests

# Create a Blueprint instance
views_bp = Blueprint("views", __name__)


@views_bp.route("/stations")
def get_all_stations():
    # Define the API URL
    api_url = "https://gbfs.bcycle.com/bcycle_madison/station_status.json"

    # Make a request to the external API
    response = requests.get(api_url)

    if response.status_code == 200:
        # Extract relevant data from the response (modify as per the API structure)
        data = response.json().get("data", {})
        stations = data.get("stations", [])

        # Implement pagination if needed
        # You can use request.args to get query parameters for pagination
        # For example: page = request.args.get('page', 1, type=int)
        # Then use pagination logic on the 'stations' list

        # Return the stations as JSON
        return jsonify({"stations": stations})

    # Handle unsuccessful API response
    return jsonify({"error": "Failed to fetch station data"}), 500
