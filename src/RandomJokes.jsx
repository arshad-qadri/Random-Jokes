import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const RandomJokes = () => {
  const [joke, setJoke] = useState('');
  const [next, setNext] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general'
      );
      // console.log(result.data);
      setJoke(` ${result.data[0].setup}  ${result.data[0].punchline}`);
    };
    fetchData();
  }, [next]);
  return (
    <div className='joke'>
      <div className='joke-inner'>
        <h2 className='joke-text'>{joke}</h2>
        <button
          className='btn'
          onClick={() => {
            setNext(!next);
          }}
        >
          Next One!
        </button>
      </div>
    </div>
  );
};
export default RandomJokes;
