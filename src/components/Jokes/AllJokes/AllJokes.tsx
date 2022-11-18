import React, {useEffect, useState} from 'react';
import OneJoke from "../OneJoke/OneJoke";

const url = 'https://v2.jokeapi.dev/joke/Programming';

const AllJokes = () => {
  const [jokes, setJokes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises: string[] = [];

      for (let i = 0; i < 4; i++) {
        let response = await fetch(url);
        if (response.ok) {
          const joke = await response.json()
          if (joke.joke) {
            promises.push(joke.joke)
          } else if (!joke.joke) {
            promises.push(joke.delivery)
          }
        }
      }
      setJokes(promises);
    }

    fetchData().catch(e => console.error(e));

  }, [])


  return (
    <>
      {jokes.map(joke => (
        <OneJoke key={Math.random()} oneJoke={joke}/>
      ))}
    </>
  );
};

export default AllJokes;