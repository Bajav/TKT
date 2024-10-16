import React, { Fragment , useEffect } from 'react';
import axios from 'axios';

function Home() {
  const fetchApi = async ()=>{
    const response = await axios.get("http://localhost:3000/");
    console.log(response);
  }
   useEffect(()=>{
    fetchApi();
   },[]);

  return (
    <div>
        <h1>home</h1>
    </div>
  )
}

export default Home;