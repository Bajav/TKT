import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
  const [message, setMessage] = useState(""); 

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/"); 
      setMessage(response.data.message); 
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  }

  useEffect(() => {
    fetchApi(); 
  }, []);

  return (
    <div>
     <h1>{message}</h1>
    </div>
  );
}

export default Home;