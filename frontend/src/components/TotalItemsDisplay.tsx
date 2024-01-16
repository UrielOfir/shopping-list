import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../store";


const TotalItemsDisplay: React.FC = ( ) => {
  const {items } = useTypedSelector((state) => state.reducer)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const sumOfLengths = Object.values(items).reduce((accumulator, currentArray) => {
      return accumulator + currentArray.length
    }, 0);
    setCount(sumOfLengths)

  },[items])
  return <p>Total Items: {count}</p>;
}

export default TotalItemsDisplay;
