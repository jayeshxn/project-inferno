import React, { useState, useEffect } from "react";
import axios from "axios";
import { checkboxClasses } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function BillingSection() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/guest")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-[100px]">
      <h1 className="font-bold text-[48px] text-[#6E260E] text-center">
        ✨Guest List✨
      </h1>
      <div className="w-[90vw] font-bold flex mx-auto justify-around bg-gray-300 p-2 items-center">
        <p className="w-[15%] overflow-x-hidden">Guest Name</p>
        <p className="w-[15%] overflow-x-hidden">Room Type</p>
        <p className="w-[15%] overflow-x-hidden">Duration of Stay</p>
        <p className="w-[15%] overflow-x-hidden">Check-In Date</p>
        <Button
          variant="contained"
          color="primary"
          disabled
          endIcon={<ArrowForwardIcon />}
        >
          CHECK OUT
        </Button>
        
      </div>
      {data.map((guest) => {
        return (
          <div className="w-[90vw] flex mx-auto justify-around bg-gray-100 p-2 items-center">
            <p className="w-[15%] overflow-x-hidden">{guest.name}</p>
            <p className="w-[15%] overflow-x-hidden">{guest.roomType}</p>
            <p className="w-[15%] overflow-x-hidden">{guest.duration} Days</p>
            <p className="w-[15%] overflow-x-hidden">
              {guest.checkinDate.substring(0, guest.checkinDate.indexOf("T"))}
            </p>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleOpen}
            >
              CHECK OUT
            </Button>
            <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <h1 className="text-[36px] font-bold">
              HOTEL REDWOOD
            </h1>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Guest Name: {guest.name}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Address: {guest.address}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Phone: {guest.phone}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Checked In: {guest.checkinDate.substring(0, guest.checkinDate.indexOf("T"))}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Total Amount to be Paid: Rs.{guest.roomTariff}
            </Typography>
            <p className="text-[12px] mt-8">This is a Computer Generated Bill and doesnot require signature</p>
          </Box>
        </Modal>
          </div>
        );
      })}
    </div>
  );
}
