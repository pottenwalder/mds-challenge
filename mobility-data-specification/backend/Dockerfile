# Use an official Python runtime as the base image
FROM python:3.11

# Set the working directory in the container to /app
WORKDIR /app

# First copy requirements.txt file
COPY requirements.txt .

# Install project dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Then copy the rest of the application code to the working directory
COPY . .

# Define the command to run the application
CMD ["python", "main.py"]