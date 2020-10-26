import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { Tour } from './typeDefs/types';
import './App.css';

const url = 'https://course-api.netlify.app/api/react-tours-project';

type State = Tour[];

function App() {
  const [tours, setTours] = useState<State | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTours = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTours(data);
        console.log(tours);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!tours) return <div>Error</div>;

  return (
    <div>
      <h1>Our Tours</h1>
      <Tours tours={tours} />
    </div>
  );
}

export default App;
