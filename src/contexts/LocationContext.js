import React from 'react';
import PropTypes from 'prop-types';

const LocationContext = React.createContext();

export const LocationContextProvider = ({ children, location }) => {
  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};

LocationContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default LocationContext;
