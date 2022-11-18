import React, {useEffect, useState} from 'react';
import OneJoke from "../OneJoke/OneJoke";

const url = 'https://v2.jokeapi.dev/joke/Programming';

const AllJokes = () => {
  const [jokes, setJokes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let promises: string[] = [];

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
      <h4 className="text-white">Jokes</h4>
      {jokes.map(joke => (
        <div className="border-bottom ">
        <OneJoke key={Math.random()} oneJoke={joke}/>
        </div>
      ))}
    </>
  );
};

export default AllJokes;