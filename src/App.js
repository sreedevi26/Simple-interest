import { TextField } from '@mui/material';
import './App.css';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


function App() {
//state to hold value
  const[Principle,setPrinciple]=useState(0)
  const[interset,setInterset]=useState(0)
  const[Year,setYear]=useState(0)
  const[result,setResult]=useState(0)

// submitt part
  const handleSubmit=(e)=>{
    // to prevent reloading webpage
    e.preventDefault()
    // checking
    if(Principle=="" || interset =='' || Year==""){
      alert('Please your valid inputs...')
    }
    else{
      let output = Principle*interset*Year/100 
      setResult(output)
    }
  }
  const handleRest =()=>{
    setResult(0)
    setPrinciple(0)
    setInterset(0)
    setYear(0)
  }
  return (
    <div className="app">
      <div className="container">
        <div className="heading_text">
          <h1 className="heading_one">Simple Calculator</h1>
          <p  className="heading_two">Calculator your simple interset Easily</p>
        </div>
        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_heading">₹{result}</h3>
            <p className="total_amount">Total simple interst</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>

        <div className="inputs">

          <div className="input-fields">
            <TextField value={Principle || ""} type='number' className="outlined-basic" label="₹ Principle amount" 
            variant="outlined" onChange={e=>setPrinciple(e.target.value)}/>
          </div>

          <div className="input-fields">
            <TextField value={interset|| ""} type='number' className="outlined-basic" label="Rate of interset (p.a)%" 
            variant="outlined" onChange={e=>setInterset(e.target.value)}/>
          </div>

          <div className="input-fields">
            <TextField value={Year || ""} type='number' className="outlined-basic" label="Time period (Yr)" 
            variant="outlined" onChange={e=>setYear(e.target.value)}/>
          </div>
        </div>
        <div className="button">
        <Stack direction='row' spacing={2}>
          <Button type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">CALCULATE</Button>
          <Button onClick={handleRest} className='btn' variant="outlined">RESET</Button>
          </Stack>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
