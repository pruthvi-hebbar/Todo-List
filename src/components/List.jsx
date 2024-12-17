import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function List({note,DeleteNote,updateNote}) {
  return (
    <Paper  elevationl={3} sx={{p:2,display:"flex",justifyContent:"space-between",mt:1}}>
        <Box sx={{display:"flex",
            gap:1,
            alignItems:"center"}}>
            <Checkbox checked={note.completed?true:false}
            onChange={()=>updateNote(note)}/>
            <Typography color="text.secondary"
            sx={{
            fontWeight:"600",
                textTransform:"capitalize",textDecoration:note.completed?"line-through":"none",}}
                >
                    {note?.title}
                    </Typography>
        </Box>
        <IconButton onClick={ ()=>DeleteNote(note.id)} color="error">
            <DeleteIcon/>
        </IconButton>
    </Paper>
  )
}