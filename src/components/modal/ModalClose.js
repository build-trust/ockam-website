import styled from "@emotion/styled";

import cross from '../../assets/cross-icon.svg';

const ModalClose = styled.button`
  cursor: pointer;
  float: right;
  margin-left: auto;
  font-size: 2rem;
  background-image: url(${cross});
  background-size: 100% 100%;
  background-color: transparent;
  border:none;
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  right: 4rem;
  top: 3rem;
`;

export default ModalClose;
