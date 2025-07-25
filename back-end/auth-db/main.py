from fastapi import FastAPI, HTTPException
from db import getConnection
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware BEFORE route definitions
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/users")
def create_user(username: str, password: str):
    try:
        conn = getConnection()
        cur = conn.cursor()
        cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
        conn.commit()
        cur.close()
        conn.close()
        return {"message": "User created"}
    except Exception as e:
        import traceback
        traceback.print_exc()   
        raise HTTPException(status_code=500, detail=str(e))

