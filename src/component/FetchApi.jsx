import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=4')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>API Data:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item,index) => (
           <div key={index}>
            <h4>{item.id}</h4>
            <h2>{item.author}</h2>
            <img src={item.download_url} width={200} alt="" />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchApi;