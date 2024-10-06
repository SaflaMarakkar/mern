import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const View = () => {
  var [user, setuser] = useState([])
  var Navigate = useNavigate();
  axios.get("http://localhost:3006/view")
    .then((response) => {
      console.log(response.data)
      setuser(response.data)

    })
  
  const delvalue = (id) => {
    console.log(id)
    axios.delete("http://localhost:3006/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload();

      })
  }
    
  const updatevalue = (val) => {
    Navigate("/add",{state:{val}})
  }
  
    return (
      <div>
        <h1>EMPLOYEE DETAILS</h1>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>AGE</TableCell>
                <TableCell>DEPT</TableCell>
                <TableCell>SALARY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((val) => {
                return (
                  <TableRow>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept}</TableCell>
                    <TableCell>{val.Sal}</TableCell>
                    <TableCell>
                      <Button onClick={() => {
                        delvalue(val._id)
                      }}>DELETE</Button>
                      <Button variant='contained'
                        color='success'
                        onClick={() => {
                        updatevalue(val)
                      }}>UPDATE</Button>


                   </TableCell>
                   
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }

export default View