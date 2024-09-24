from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017")
db = client.bot_database
collection = db.predefined_questions

@app.route('/add_question', methods=['POST'])
def add_question():
    data = request.json
    question = data.get('question')
    answer = data.get('answer')
    
    if question and answer:
        result = collection.insert_one({"question": question, "answer": answer})
        return jsonify({"message": "Question added successfully", "id": str(result.inserted_id)}), 201
    else:
        return jsonify({"error": "Both question and answer are required"}), 400

if __name__ == '__main__':
    app.run(port=5000)
