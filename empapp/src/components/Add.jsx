import { Button,  TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Add = (props) => {
    var [inputs, setInputs] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
    var location =(useLocation)
        console.log(location.state)
    
    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);
    };
    const AddHandler = () => {
        if (location.state !== null) {
            axios.put("http://localhost:3006/edit/" + location.state.val._id, inputs)
                .then((res) => {
                    alert(res.data.message)
                    Navigate('/')
                })
                .catch((err) => { console.log })
        }
        else {
            axios.post("http://localhost:3006/add", inputs)
                .then((res) => {
                    console.log(res);
                    alert(res.data.message)
                    navigate('/')
                })
        
        }
    }
    useEffect(() => {
        if (location.state !== null) {
            setInputs({...inputs,
                Name: location.state.val.Name,
                
            })
        }
    })
    return (
        <div>
            <h1>ADD EMPLOYEE</h1>
            <TextField
                label="NAME"
                variant='outlined'
                value={inputs.Name}
                onChange={inputHandler}
                name="Name" /><br />
            &nbsp;
            <br />
            <TextField label="AGE"
                variant='outlined'
                value={inputs.Age}
                onChange={inputHandler}
                name="Age" /><br />
            &nbsp;
            <br />
            
            <TextField label="DEPT"
                variant='outlined'
                value={inputs.Dept}
                onChange={inputHandler}
                name="Dept" /><br />
            &nbsp;
            <br />
            
            <TextField label="SALARY"
                variant='outlined'
                value={inputs.Sal}
                onChange={inputHandler}
                name="Sal" /><br />
            &nbsp;
            <br />
            <Button variant="contained" onClick={AddHandler}
            >SUBMIT</Button>
        </div>
    )
}

export default Add
