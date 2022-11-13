import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const VideoModal = ({ id, url, setModalOpen }) => {
  const modalEl = useRef();

  const handleCloseModal = ({ target }) => {
    if (!modalEl.current || !modalEl.current.contains(target))
      setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseModal);
    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
  }, []);

  return (
    <ModalWrap ref={modalEl}>
      <button onClick={() => setModalOpen(false)}>X</button>
      <iframe key={id} title={id} src={url} width="600" height="300"></iframe>
    </ModalWrap>
  );
};

export default VideoModal;

const ModalWrap = styled.div`
  width: 92%;
  z-index: 999;
  position: absolute;
  top: 1210px;
  left: 48%;
  transform: translate(-50%, -50%);
  background-color: #000;
  border: 1px solid black;
  border-radius: 8px;

  button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
