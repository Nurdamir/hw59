import React from 'react';

interface OneJokeProps {
  oneJoke: string;
}

const OneJoke:React.FC<OneJokeProps> = (props) => {
  return (
    <div>
      {props.oneJoke}
    </div>
  );
};

export default OneJoke;