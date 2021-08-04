import styled from 'styled-components';
import { useState } from 'react';
import Modal from './ModalBox';

function ModalBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);

    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);

    document.body.style.overflow = 'unset';
  };

  return (
    <Container>
      <Button onClick={handleModal}>Modal Button</Button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </Container>
  );
}

export default ModalBtn;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 300px auto;
  border-style: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #ff1744;

  &:hover {
    cursor: pointer;
  }
`;
