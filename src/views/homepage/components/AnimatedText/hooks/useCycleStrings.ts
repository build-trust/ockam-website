import { useState, useEffect } from 'react';

type UseCyclicStringsReturnType = [string, string, string];

const useCycleStrings = (
  arr1: string[],
  arr2: string[],
  arr3: string[],
): UseCyclicStringsReturnType => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [currentArray, setCurrentArray] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((prevIndex1) => {
        if (currentArray === 1) {
          if (prevIndex1 + 1 < arr1.length) {
            return prevIndex1 + 1;
          }
          setCurrentArray(2);
          return 0;
        }
        return prevIndex1;
      });

      setIndex2((prevIndex2) => {
        if (currentArray === 2) {
          if (prevIndex2 + 1 < arr2.length) {
            return prevIndex2 + 1;
          }
          setCurrentArray(3);
          return 0;
        }
        return prevIndex2;
      });

      setIndex3((prevIndex3) => {
        if (currentArray === 3) {
          if (prevIndex3 + 1 < arr3.length) {
            return prevIndex3 + 1;
          }
          setCurrentArray(1);
          return 0;
        }
        return prevIndex3;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [arr1.length, arr2.length, arr3.length, currentArray]);

  return [arr1[index1], arr2[index2], arr3[index3]];
};

export default useCycleStrings;
