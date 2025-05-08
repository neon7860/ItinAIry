import React from "react";
import { useState } from "react";

const todaysDate = (): string => new Date().toISOString().slice(0, 10);

export default function TripForm() {

  const [tripName, setTripName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>(todaysDate());

  const onChangeText = (e: React.ChangeEvent<HTMLFormElement>) => {
    setTripName(e.target.value);
    console.log("Trip name: ", tripName);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    console.log("Start date: ", startDate);
  };

  const submitDetails = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Trip name: ", tripName);
    console.log("Start date: ", startDate);
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitDetails(e)}
        className="max-w-md mx-auto mt-24 p-6 bg-white rounded-xl flex flex-col gap-4 shadow-xl/30"
      >
        <label htmlFor="tripName" className="font-bold text-left">
          Trip Name
        </label>
        <input
          id="tripName"
          className="w-full rounded border p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          type="text"
          onChange={(e) => onChangeText(e)}
          placeholder="Trip Name"
          value={tripName}
          required
        />
        <label htmlFor="startDate" className="font-bold text-left">
          Start Date
        </label>
        <input
          id="startDate"
          className="w-full rounded border p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          type="date"
          placeholder="Start Date"
          onChange={(e) => onChangeDate(e)}
          value={startDate}
          required
        />
        <input
          className="w-full rounded border p-3 bg-blue-600 text-white hover:bg-indigo-700 cursor-pointer"
          type="submit"
          value="Generate Plan"
        />
      </form>
    </div>
  );
}
