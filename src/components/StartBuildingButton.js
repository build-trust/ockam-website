import React from 'react';
import GithubIcon from 'emotion-icons/simpleIcons/GitHub';


import useSiteMetadata from "../hooks/useSiteMetadata";

import Button from "./Button";
import Link from "./Link";
import Icon from "./Icon";

const StartBuildingButton = ({ ...rest }) => {
  const { ockamLibraryRepo } = useSiteMetadata();
  return (
    <Button
      mb={3}
      outline="primary"
      as={Link}

      to={ockamLibraryRepo}
      textAlign="center"
      {...rest}
    >
      <Icon mr={3} color='primary' size={26} icon={GithubIcon} />
      Start building
    </Button>
  );
};


export default StartBuildingButton;
