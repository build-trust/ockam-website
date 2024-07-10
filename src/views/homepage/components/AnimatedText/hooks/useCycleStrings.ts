import { useState, useEffect } from 'react';

type UseCyclicStringsReturnType = [string, string, string];

// Custom hook to cycle through three arrays of strings
const useCycleStrings = (
  arr1: string[],
  arr2: string[] = [],
  arr3: string[] = [],
): UseCyclicStringsReturnType => {
  // State to keep track of current index in each array
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  // State to keep track of which array is currently being iterated
  const [currentArray, setCurrentArray] = useState(1);

  useEffect(() => {
    // Set an interval to update the indices every 3.5 seconds
    const interval = setInterval(() => {
      setIndex1((prevIndex1) => {
        if (currentArray === 1) {
          // If still within bounds of the first array, move to the next index
          if (prevIndex1 + 1 < arr1.length) {
            return prevIndex1 + 1;
          }

          // If reached the end of the first array, move to the second array if it exists
          const nextIndex = arr2.length > 0 ? 2 : 1;
          setCurrentArray(nextIndex);
          return 0; // Reset index1 to 0
        }

        return prevIndex1; // No change if not the current array
      });

      setIndex2((prevIndex2) => {
        if (currentArray === 2) {
          // If still within bounds of the second array, move to the next index
          if (prevIndex2 + 1 < arr2.length) {
            return prevIndex2 + 1;
          }

          // If reached the end of the second array, move to the third array
          setCurrentArray(3);
          return 0; // Reset index2 to 0
        }
        return prevIndex2; // No change if not the current array
      });

      setIndex3((prevIndex3) => {
        if (currentArray === 3) {
          // If still within bounds of the third array, move to the next index
          if (prevIndex3 + 1 < arr3.length) {
            return prevIndex3 + 1;
          }

          // If reached the end of the third array, move back to the first array
          setCurrentArray(1);
          return 0; // Reset index3 to 0
        }
        return prevIndex3; // No change if not the current array
      });
    }, 3500); // Update interval set to 3.5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [arr1.length, arr2.length, arr3.length, currentArray]);

  // Return the current strings from each array based on their respective indices
  return [arr1[index1], arr2[index2], arr3[index3]];
};

export default useCycleStrings;
