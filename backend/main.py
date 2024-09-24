from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel

app = FastAPI()

# CORS settings
origins = [
    "http://localhost:3000",  # React frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client.bot_database
collection = db.predefined_questions

class Question(BaseModel):
    question: str

@app.post("/ask")
async def ask_question(question: Question):
    # Search for the question in the database
    result = await collection.find_one({"question": question.question})
    
    if result:
        return {"answer": result["answer"]}
    else:
        return {"answer": "I'm sorry, I don't have an answer for that question."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
