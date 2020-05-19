import { useContext } from 'react';

import LocationContext from '../contexts/LocationContext';

const useLocation = () => {
  return useContext(LocationContext);
};

export default useLocation;
