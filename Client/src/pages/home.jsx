import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fruitlist = (props) => {
  return <li>{props.fruit}</li>;
}

function Home() {
  const [fruits, setFruits] = useState([]); 

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/"); 
      setFruits(response.data.fruits); 
    } catch (error) {
      console.error("Error fetching fruits:", error);
    }
  }

  useEffect(() => {
    fetchApi(); 
  }, []);

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (  
          <Fruitlist key={index} fruit={fruit} /> 
        ))}
      </ul>
    </div>
  );
}

export default Home;