import React from 'react'
import { Button,Typography,styled } from '@mui/material'
import {Add,Settings} from '@mui/icons-material'
const App = () => {
   const BlueButton = styled(Button)({
    backgroundColor:"skyblue",
    color:'#888',
    margin:"25px",
    "&:hover":{
      backgroundColor:"lightblue",
    
    },
    "&:disabled":{
      backgroundColor:"gray",
      color:"white"
    }
   })
  return (
     <div>
        <Button variant="text">Text</Button>
        <Button startIcon={<Settings/>} variant="contained" color="secondary" size='small'>setting</Button>
        <Button startIcon={<Add/>} variant="contained" color="success" size='small'>Add new Post</Button>
        <Button variant="outlined">Outlined</Button>
         <Typography variant='h1' component="p">
             Its uses h1 style but  it's a p Tag
         </Typography>
        <BlueButton>My button</BlueButton>
        <BlueButton>My another button</BlueButton>
     </div>
  )
}

export default App
