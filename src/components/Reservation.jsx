import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, FormControl } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ReservationComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [duration, setDuration] = useState(1);
    const [checkinDate, setCheckinDate] = useState("");
    const [roomType, setRoomType] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        name, email, address, phone, duration, checkinDate, roomType
    };

    await axios.post("http://localhost:8800/api/guest", data).then((res) => {
        alert('Reservation Confirmed!')
        navigate('/')
    }).catch((err) => {
        console.log(err);
    });
  };
  return (
    <div className="my-[100px]">
      <h1 className="font-bold text-[48px] text-[#6E260E] text-center">
        ✨Guest Check-In✨
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 gap-[50px] p-10"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="col-span-1"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="span-1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          className="span-1"
            onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          className="span-1"
            onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Duration of Stay"
          variant="outlined"
          className="span-1"
            onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <TextField
          id="outlined-basic"
          label="Check-in Date (YYYY-MM-DD)"
          variant="outlined"
          className="span-1"
            onChange={(e) => setCheckinDate(e.target.value)}
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="Room Type"
            label="Room Type"
            onChange={(e) => setRoomType(e.target.value)}
          >
            <MenuItem value={"Single Non-AC"}>Single Non-AC</MenuItem>
            <MenuItem value={"Single AC"}>Single AC</MenuItem>
            <MenuItem value={"Double Non-AC"}>Double Non-AC</MenuItem>
            <MenuItem value={"Double AC"}>Double AC</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="success">Confirm Reservation</Button>
      </form>
    </div>
  );
}
