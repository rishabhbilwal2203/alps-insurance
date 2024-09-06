import React, { useState } from 'react';
import InsuranceForm from './InsuranceForm';
import UpdateForm from './UpdateForm';

const ModalForm = ({setEmployees, setIsUpdateOpen, isUpdateOpen, upDateForm, setUpdateForm}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleUpdateModal = () => {
    setIsUpdateOpen(!isUpdateOpen);
  };


  return (
    <div>
      <button onClick={toggleModal} style={styles.openButton}>
        Open Form
      </button>

      {isOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button onClick={toggleModal} style={styles.closeButton}>
              Close
            </button>
            <InsuranceForm setEmployees={setEmployees}/>
          </div>
        </div>
      )}
      {isUpdateOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button onClick={toggleUpdateModal} style={styles.closeButton}>
              Close
            </button>
            <UpdateForm upDateForm={upDateForm} setUpdateForm={setUpdateForm} setEmployees={setEmployees}/>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  openButton: {
    backgroundColor: '#6366f1',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '400px',
    position: 'relative',
  },
  closeButton: {
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};

export default ModalForm;

