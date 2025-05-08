from fastapi import FastAPI

app = FastAPI()

@app.get("/ping")
def ping():
    return {"ok": True}

# 5   Create app/main.py with: 1) app = FastAPI() 2) @app.get("/ping") route returning {"ok": True}	Smallest possible API.
# 6	uvicorn app.main:app --reload	Start dev server.
# 7	Visit localhost:8000/docs → “Try it” on /ping.	Confirms auto-docs & JSON.
# 8	git add . → git commit -m "feat(api): add FastAPI /ping endpoint (S2)" → push branch.