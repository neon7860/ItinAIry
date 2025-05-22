from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
if not OPENWEATHER_API_KEY:
    raise ValueError("Please set the OPENWEATHER_API_KEY environment variable.")

@app.get("/ping")
def ping():
    return {"ok": True}

@app.get("/weather")
async def get_weather():
    base_url = 'https://api.openweathermap.org/data/3.0/onecall'
    parameters = {
        "lat": 51.5074,  # Latitude for London
        "lon": -0.1278,  # Longitude for London
        "appid": OPENWEATHER_API_KEY,
        "units": "metric",  # Use metric units for temperature
        "exclude": "minutely,hourly,daily,alerts"  # Exclude unnecessary data
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(base_url, params=parameters)
        data = await response.json()
        if response.status_code == 200:
            current_temp = data["current"]["temp"]
            return {"temperature": current_temp}
        else:
            return {"error": "Failed to fetch weather data"}

# .venv\Scripts\Activate.ps1  
# uvicorn app.main:app --reload


# 1 . What we’re doing
# Goal: show the current weather for the chosen city right under the form.

# 2 . Tasks for you
# Find a free weather API (Open-Meteo or similar) that lets you query by latitude/longitude or city name without an API key.

# In the backend, add a new /weather route that returns today’s temperature for a hard-coded city (e.g. London).

# In the frontend, call /weather when the page loads and display the temperature in a simple text element.

# (No code sample — explore the docs, experiment, and wire it up.)