import DateReserve from "@/components/DateReserve";
import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const Booking = () => {
  return (
    <main className="w-full flex flex-col items-center space-y-4 m-4 overflow-hidden">
      <h1 className="text-2xl font-bold">Venue Reservation</h1>
      <form className="bg-slate-100 rounded-lg space-y-2 w-4/5 max-w-[640px] px-10 py-5 flex flex-col justify-center gap-4">
      <TextField
        name="Name-Lastname"
        label="Name-Lastname"
        variant="standard"
      />
      <TextField
        name="Contact-Number"
        label="Contact-Number"
        variant="standard"
      />
      <Select variant="standard" name="venue" id="venue" className="h-8 w-48">
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
        <DateReserve />
      <button
        type="submit"
        className="bg-orange-300 hover:bg-orange-400 transition-colors text-amber-950 font-bold rounded-lg p-2"
        name="Book Venue"
      >
        Book Venue
      </button>
    </form>
    </main>
  );
};

export default Booking;
