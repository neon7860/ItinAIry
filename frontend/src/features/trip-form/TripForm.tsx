import React from "react";
import { useState } from "react";

export default function TripForm() {

    const [tripName, setTripName] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTripName(e.target.value);
        console.log("Trip name: ", tripName);
    }

    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
        console.log("Start date: ", startDate);
    }

    const submitDetails = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log("Trip name: ", tripName);
        console.log("Start date: ", startDate);
    }

    return (
        <div>
            <form onSubmit={(e) => submitDetails(e)} className="max-w-md mx-auto mt-24 p-6 bg-white rounded-xl shadow flex flex-col gap-4">
                <input className="w-full rounded border p-3" type="text" onChange={(e) => onChangeText(e)} placeholder="Trip Name" value={tripName}/>
                <input className="w-full rounded border p-3" type="date" placeholder="Start Date" onChange={(e) => onChangeDate(e)} value={startDate} />
                <input className="w-full rounded border p-3 bg-blue-600 text-white hover:bg-indigo-700 cursor-pointer" type="submit" value="Generate Plan" />
            </form>
        </div>
    )
}