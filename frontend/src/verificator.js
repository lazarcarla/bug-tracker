import React, { useState , useEffect} from 'react';
import './App.css'
import { getAllBugs } from './api';
import { addBug , modifyBug, deleteBug} from './api';
import { all } from 'axios';


function BugManagementPage() {
    const [bugs, setBugs] = useState([]);
    const [newBugTitle, setNewBugTitle] = useState('');
    const [newBugDescription, setNewBugDescription] = useState('');
    const [newBugUrgency, setNewBugUrgency] = useState('Normal');
    const [newBugDate, setNewBugDate] = useState('');

    const addBugs  = async () => {
        if (newBugTitle && newBugDescription) {
            // const currentDate = new Date().toLocaleDateString();
            const bug = { title: newBugTitle, description: newBugDescription, date: newBugDate, urgency: newBugUrgency };
            await addBug(bug);
            setBugs([...bugs,bug]);
            alert('Bug adaugat cu succes!!')
            setNewBugTitle('');
            setNewBugDescription('');
            setNewBugDate('');
            setNewBugUrgency('Normal');
        }
    };

    useEffect(() => {
        const getBugs = async() => {
          const rez = await getAllBugs();
          setBugs(rez);
        }
        getBugs();
      }, []);

    const deleteBugs = async (index) => {
        
        const updatedBugs = bugs.filter((_, i) => i !== index);
        console.log(bugs[index]);

        await deleteBug(bugs[index].id);
        setBugs(updatedBugs);
    };

    const editBug = async (index) => {
        const currentBug = bugs[index];

        await modifyBug(currentBug);
        setNewBugTitle(currentBug.title);
        setNewBugDescription(currentBug.description);
        setNewBugDate(currentBug.date);

        const updatedBugs = bugs.filter((_, i) => i !== index);
        setBugs(updatedBugs);
    };

    return (
        <div className='bug-management-page'>
          
            <div className='bug-management-container'>
                <h2>Management Bug-uri</h2>
                <div>
                    <h3>Add Bug</h3>
                    <div>
                        <label htmlFor="bugTitle">Bug Title:</label>
                        <input className='textarea'
                            placeholder="Bug Title"
                            value={newBugTitle}
                            onChange={(e) => setNewBugTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="bugDescription">Bug Description:</label>
                        <input className='textarea'
                            placeholder="Bug Description"
                            value={newBugDescription}
                            onChange={(e) => setNewBugDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="bugDate">Bug Date:</label>
                        <input className='textarea'
                            placeholder="Bug Date"
                            value={newBugDate}
                            onChange={(e) => setNewBugDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Bug Urgency">Bug Urgency:</label>
                        <select value={newBugUrgency} onChange={(e) => setNewBugUrgency(e.target.value)}>
                            <option value="Normal">Normal</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>

                    <button style={{marginTop: '20px'}} className="button" onClick={addBugs}>Add Bug</button>
                </div>
            </div>
            <div className='bug-list-container'>
                <h3>Bug List</h3>
                <ul>
                    {bugs.map((bug, index) => (
                        <div className="bug-container" key={index}>
                            
                                <p><strong>Title:{bug.title}</strong></p>
                                <p><strong>Description:</strong>{bug.description}</p>
                                <p><strong>Date:</strong>{bug.date}</p>
                                {/* <p><strong>Urgency:</strong>{bug.urgency}</p> */}
                                <p><strong>Urgency: <span className={`urgency-${bug.urgency.toLowerCase()}`}>{bug.urgency}</span></strong></p>
                                <div>
                                    <button style={{marginTop: '20px'}} className="button" onClick={() => deleteBugs(index)}>Delete Bug</button>
                                    <button  style={{marginTop: '20px'}} className="button" onClick={() => editBug(index)}>Edit Bug</button>
                                </div>
                            
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BugManagementPage;
