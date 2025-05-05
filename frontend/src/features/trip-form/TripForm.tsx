import React from "react";
import { useState } from "react";

export default function TripForm() {

    const [tripName, setTripName] = useState<string>("");

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTripName(e.target.value);
        console.log("Trip name: ", tripName);
    }

    return (
        <div>
            <form className="flex flex-col gap-2">
                <input type="text" onChange={(e) => onChangeText(e)} placeholder="Trip Name" />
                <input type="date" placeholder="Start Date" />
                <input className="bg-blue-600" type="submit" value="Submit" />
            </form>
        </div>
    )
}