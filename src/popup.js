import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const App = ({ourCharityName,ourCharityDescription}) => {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className='ourCharity-popup'>
      <button onClick={onOpenModal} className="SeeMore">...SeeMore</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>{ourCharityName}</h2>
        <p>{ourCharityDescription}</p>
      </Modal>
    </div>
  );
};

export default App