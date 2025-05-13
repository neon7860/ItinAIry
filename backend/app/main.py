from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
def ping():
    return {"ok": True}

@app.get("/weather")
def get_weather():


# 1 . What we’re doing
# Goal: show the current weather for the chosen city right under the form.

# 2 . Tasks for you
# Find a free weather API (Open-Meteo or similar) that lets you query by latitude/longitude or city name without an API key.

# In the backend, add a new /weather route that returns today’s temperature for a hard-coded city (e.g. London).

# In the frontend, call /weather when the page loads and display the temperature in a simple text element.

# (No code sample — explore the docs, experiment, and wire it up.)