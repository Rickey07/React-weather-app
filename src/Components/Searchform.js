import React, { useState , useEffect } from 'react'
import { Form , Container , Button } from 'react-bootstrap'
import { useCityContext } from '../contexts/Citycontext';

export default function Searchform() {
  const {city,setCity,setData,setError} = useCityContext();


  const fetchData = async () => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
      let data = await response.json();
      console.log(data);
      setData(data)
    } catch (error) {
      return false;
    }
  }

  return (
    <Container>
      <Form className='button-form' expand='lg' >
        <Form.Control type="text" className='input-bg' placeholder='Enter city name' value={city} onChange={(e) => setCity(e.target.value)}/>
        <Button variant='outline-success' className='button-inside-form' onClick={fetchData} size='sm'>Search</Button>
      </Form>
    </Container>
  )
}
