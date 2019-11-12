import React, { useState, useEffect } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import axios from 'axios';

function HomePage() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  // useEffect(() => {
  //   setInterval(() => setIndex(index%5 + 1), 2000);
  // }, [index]);

  useEffect(() => {
    const fetchData = async () => {
      var config = {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const result = await axios(
        'https://us-central1-fire-app-bykk.cloudfunctions.net/allbooks', config
      );
      setData(result.data.slice(4,10));
    };
    fetchData();
  }, []);

  return (
    <div style={{maxWidth:'500px', maxHeight: '700px'}}>
      {data.length === 0 && <Spinner animation="border" />}
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        {data.map((d,i) =>
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={d.image}
              alt={d.title}
            />
            <Carousel.Caption>
        <h3>{d.title}</h3>
        <p>{d.description.slice(0,100) + '...'}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}


      </Carousel>
    </div>
  )
}


export default HomePage;