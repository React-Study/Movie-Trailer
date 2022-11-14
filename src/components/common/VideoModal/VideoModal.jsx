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
      <iframe key={id} title={id} src={url} width="1417" height="796"></iframe>
    </ModalWrap>
  );
};

export default VideoModal;

const ModalWrap = styled.div`
  width: 80%;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  border: 1px solid black;
  border-radius: 8px;

  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #000;
    color: white;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }
`;
