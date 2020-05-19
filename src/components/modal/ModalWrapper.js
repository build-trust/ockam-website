import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.modalBackground};
`;

export default ModalWrapper;
