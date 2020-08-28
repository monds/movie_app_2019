import React, { useEffect } from 'react';

const Detail = ({ location, history }) => {

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  return (
    <span>{location.state.title}</span>
  )
}

export default Detail;
