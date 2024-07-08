import React, { useState } from 'react'
import './App.css'
import Table from './Tables/Table'
import ModalForm from './Modals/ModalForm'
import ModalConfirmation from './Modals/ModalConfirmation'

const App = () => {
  // Table dummy data
  const [data, setData] = useState([
    { id: 1, type: "Capture Alphanumeric", prompt: "Enter your full name", stage: "Pre-Processing", enabled: 1 },
    { id: 2, type: "Prompt Only", prompt: "You've got mail!", stage: "Sent", enabled: 0 },
    { id: 3, type: "Boolean", prompt: "Question", stage: "In Progress", enabled: 1 },
  ]);

  // For opening modals
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  
  // For checking/editing active row
  const [activeRow, setActiveRow] = useState(null);

  // Used for closing modal
  const closeModal = () => {
    setModalOpen(false);
    setModalConfirmationOpen(false);
    setActiveRow(null);
  }

  // Opens modal to edit the current row
  const editDataRow = (idx) => {
    setActiveRow(idx);
    setModalOpen(true);
  }

  // Sets up deletion modal before delete
  const deleteDataRow = (target) => {
    setActiveRow(target);
    setModalConfirmationOpen(true);
  }

  // Deletes the row once confirmed
  const confirmDelete = (target) => {
    setData(data.filter((idx) => idx.id !== target.id));
  }

  // Resultant from modal with user formed data
  const addDataRow = (row) => {
    activeRow === null 
      ? setData([...data, row])
      : setData(data.map((currentRow, idx) => {
        if (idx !== activeRow) {
          return currentRow;
        }
        return row;
      }));
  }

  return (
    <>
      <Table data={data} deleteData={deleteDataRow} editData={editDataRow} />
      <button className='btn btn-secondary mt-2' onClick={() => setModalOpen(true)}>Add</button>
      {
        modalOpen && (
          <ModalForm
          rows={ data }
          closeModal={ closeModal }
          onSubmit={ addDataRow }
          defaultValue={
            activeRow !== null && data[activeRow]
          }/>
        )
      }
      {
        modalConfirmationOpen && (
          <ModalConfirmation
          closeModal={ closeModal }
          onSubmit={ confirmDelete }
          defaultValue={
            activeRow !== null && data[activeRow]
          }
          />
        )
      }
    </>
  )
}

export default App;