import React, { useState } from 'react';
import './App.css'

function RoleSelectionPage({ onSelectRole }) {
  const [role, setRole] = useState('');

  const handleRoleSelection = () => {
    if (role === '') {
      alert('Selectează un rol!');
      return;
    }

    localStorage.setItem('role', role);

    onSelectRole(role);
  };

  return (
    <div className='container-role'>
      <h2>Choose your role:</h2>
      <div style={{fontSize: '20px'}}>
        <input
          type="radio"
          id="Programmer"
          value="Programmer"
          checked={role === 'Programmer'}
          onChange={() => setRole('Programmer')}
        />
        <label htmlFor="Programmer">Programmer</label>
      </div>
      <div style={{marginTop: '10px', fontSize: '20px'}}>
        <input
          type="radio"
          id="Verifier"
          value="Verifier"
          checked={role === 'Verifier'}
          onChange={() => setRole('Verifier')}
        />
        <label htmlFor="Verifier">Verifier</label>
      </div>
      <button style={{marginTop:'20px'}} className="button" onClick={handleRoleSelection}>Ok</button>
    </div>
  );
}

export default RoleSelectionPage;
