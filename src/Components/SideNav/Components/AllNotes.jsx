import React, { useEffect, useState } from "react";
import './AllNotes.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

function Home() {
  const [notesItem, setNotesItem] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = () => {
    const data = JSON.parse(localStorage.getItem("notesData"));
    console.log(data)
    setNotesItem(data);
  };
  return (
    <div className="HomeContainer">
      {notesItem && notesItem.map((item,index) => {
        return <div key={index} className="NotesContainer">
           <h1>{item.title}</h1>
           <p>{item.description}</p>
                <Button variant="contained" color="error" className="iconBtn" style={{ minWidth: "25px", width: "35px", height: "35px" }} >
                  <DeleteIcon className="icon" />
                </Button>
              
        </div>;
      })}
    </div>
  );
}

export default Home;
