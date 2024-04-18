import React, { useState } from 'react';
import { deleteBug, getAllBugs } from './api';
import './App.css'

function ProgrammerPage({ bugs, onDeleteBug }) {
  const [selectedUrgency, setSelectedUrgency] = useState('');
  

  const handleDeleteBug =  async (bugId) => {
    await deleteBug(bugId);
    onDeleteBug(bugId);
  };

  const handleSelectedUrgency = (event) => {
    setSelectedUrgency(event.target.value);
  }

  const filteredBugs = selectedUrgency
    ? bugs.filter((bug) => bug.urgency.toLowerCase() === selectedUrgency.toLowerCase())
    : bugs;

  return (
    <div className='container-programmer'>
      <h2>Bug List</h2>
      <select value={selectedUrgency} onChange={handleSelectedUrgency}>
        <option value="">All Bugs</option>
        <option value="Normal">Normal</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <div>
      <ul>
        {filteredBugs.map((bug) => (
          <li key={bug.id}>
            <div className='bug-container'>
              <strong>Title:{bug.title}</strong>
              <p><strong>Description:</strong>{bug.description}</p>
              <p><strong>Date:</strong> {bug.date}</p>
              <p><strong>Urgency: <span className={`urgency-${bug.urgency.toLowerCase()}`}>{bug.urgency}</span></strong></p>

              <button className='button' onClick={() => handleDeleteBug(bug.id)}>Bug rezolvat</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ProgrammerPage;
