import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Playground() {
  return (
    <div className='w-full flex justify-center p-4'>
        <Button variant="contained" color='success' startIcon={<DeleteIcon />}>Welcome to playground!</Button>
    </div>
  );
}