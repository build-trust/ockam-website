import styled from '@emotion/styled';
import { space, layout, grid } from 'styled-system';

const Form = styled('form')(space, layout, grid);

Form.defaultProps = {
  width: '100%',
  display: 'grid',
  gridRowGap: 'medium',
  gridColumnGap: 'medium',
};

export default Form;
