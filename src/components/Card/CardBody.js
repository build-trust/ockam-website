import styled from '@emotion/styled';
import { space, color } from 'styled-system';

const CardBody = styled('div')(space, color);

CardBody.defaultProps = {
  padding: 4,
};

export default CardBody;
