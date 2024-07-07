import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'
import Modal from './Modal'
import ModalConfirmation from './ModalConfirmation'

const App = () => {
  // Table state
  const [data, setData] = useState([
    { id: 1, type: "Capture Alphanumeric", prompt: "Enter your full name", stage: "Pre-Processing", enabled: true },
    { id: 2, type: "Prompt Only", prompt: "You've got mail!", stage: "Sent", enabled: false },
    { id: 3, type: "Boolean", prompt: "Question", stage: "In Progress", enabled: true }
  ]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  // Active row state
  const [activeRow, setActiveRow] = useState(null);

  const editDataRow = (idx) => {
    setActiveRow(idx);
    setModalOpen(true);
  }

  const deleteDataRow = (target) => {
    // open another modal, check response
    // Set the active row
    setActiveRow(target);
    setModalConfirmationOpen(true);
    // setData(data.filter((_, idx) => idx !== target));
  }

  const confirmDelete = (target) => {
    // 0 1 2
    setData(data.filter((idx) => idx.id !== target.id));
  }

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Table data={data} deleteData={deleteDataRow} editData={editDataRow}/>
      <button onClick={() => setModalOpen(true)}>Add new data</button>
      {
        modalOpen && (
          <Modal
          rows={ data }
          closeModal={
            () => {
              setModalOpen(false);
              setActiveRow(null);
            }
          }
          onSubmit={ addDataRow }
          defaultValue={
            activeRow !== null && data[activeRow]
          }/>
        )
      }
      {
        modalConfirmationOpen && (
          <ModalConfirmation
          closeModal={
            () => {
              setModalConfirmationOpen(false);
              setActiveRow(null);
            }
          }
          onSubmit={ confirmDelete } // Once submitted, delete row
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