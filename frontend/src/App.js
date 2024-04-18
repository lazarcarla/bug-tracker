import React, { useEffect, useState } from 'react';
import './App.css';
import RoleSelectionPage from './roleSelectionPage';
import LoginPage from './login';
import BugManagementPage from './verificator';
import ProgrammerPage from './programator';
import { getAllBugs } from './api';

function App() {
  const [selectedRole, setSelectedRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bugs, setBugs] = useState([]);
  useEffect(() => {
    const getBugs = async() => {
      const rez = await getAllBugs();
      setBugs(rez);
    }
    getBugs();
  }, []);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleLogin = (username, password) => {
    
    setIsLoggedIn(true);
    
  };
  const handleDeleteBug = (bugId) => {
    
    const updatedBugs = bugs.filter((bug) => bug.id !== bugId);
    setBugs(updatedBugs);
  };

  const handleLogout = () =>{
    setIsLoggedIn(false);
    localStorage.clear();
    setSelectedRole('');
  }

  return (
    <div className="App">
      {isLoggedIn && <button className='logout-button' onClick={handleLogout}>Logout</button>}
      {!isLoggedIn ? (
        !selectedRole ? (
          <RoleSelectionPage onSelectRole={handleRoleSelection} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )
      ) : (
        selectedRole === 'Verifier' ? (
          <BugManagementPage />
        ) : (
          <ProgrammerPage bugs={bugs} onDeleteBug={handleDeleteBug} />
        )
      )}
   
    </div>
  );
}



export default App;
