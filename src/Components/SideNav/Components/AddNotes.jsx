import React, { useState } from "react";
import "./AddNotes.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


function AddNotes() {
  const [notes,setNotes]=useState({
    title:'',
    description:''
  })
  const handleSubmit=()=>{
    if(notes.title=="" || notes.description==""){
      alert('Please fill both field')
    }else{
    const existingNotes=JSON.parse(localStorage.getItem('notesData')) || []
    const updatedNotes = [...existingNotes, { title: notes.title, description: notes.description }];

     localStorage.setItem('notesData',JSON.stringify(updatedNotes))
    setNotes({
      title:'',
      description:''
    })
  }

  }
  const handleInputChange = (e) => {
    setNotes({...notes,[e.target.name]:e.target.value})
  };
  return (
    <div className="CreateNotesContainer">
      <div className="titleInputBox">
        <label htmlFor="fullWidth" className="titleWord">
          Title:{" "}
        </label>
        <TextField
        name="title"
        value={notes.title}
          fullWidth
          id="fullWidth"
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Enter Title"
        />
      </div>
      <div className="descriptionBox">
        <label htmlFor="Title" className="titleWord">
          Description:{" "}
        </label>
        <div className="createInputNotesContainer">
        <TextField
        name="description"
          id="fullWidth"
          value={notes.description}
          className="createNotesInput"
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Enter Description"
          // InputProps={{
          //   style: { height: "450px" }, 
          // }}
        />
        </div>
      </div>
      <Button className='NotesSubmitBtn' variant="contained" onClick={handleSubmit} >Submit</Button>
    </div>
  );
}

export default AddNotes;
