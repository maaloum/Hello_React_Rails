import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { FetchGreeting } from '../store/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchGreeting());
  }, [dispatch]);

  const greetings = useSelector((state) => state.home.data);

  if (greetings) {
    return (
      <div>
        <h1>{greetings.message}</h1>
      </div>
    );
  }
};

export default Greeting;
