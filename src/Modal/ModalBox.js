import React from 'react';
import styled from 'styled-components';

function ModalBox(props) {
  return (
    <ModalContainer>
      <ModalBg onClick={props.closeModal} />
      <ModalSquare>
        <h3>Modal Test</h3>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
      </ModalSquare>
    </ModalContainer>
  );
}

export default ModalBox;

const ModalContainer = styled.div`
  position: fixed;
  height: 100%;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalSquare = styled.div`
  position: fixed;
  margin: 200px auto;
  left: 0;
  right: 0;
  width: 340px;
  text-align: center;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  h3 {
    margin: 40px;
    font-size: 30px;
    font-weight: 600;
  }

  p {
    margin: 40px;
    font-size: 20px;
  }
`;
