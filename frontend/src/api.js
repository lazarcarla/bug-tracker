import axios from 'axios';

export const getAllBugs = async () => {
    try{
        const rez = await axios.get("http://localhost:8080/bugs");
        return Promise.resolve(rez.data);
    }
    catch (err){
        return Promise.reject(err);
        
    }
}


export const loginUser = async (loginData) => {
    try{
        const rez = await axios.post("http://localhost:8080/users/login", loginData);
        return Promise.resolve(rez.data);
    }
    catch (err){
        return Promise.reject(err);
    }
}

export const deleteBug = async (idBug) => {
    try{

        const rez = await axios.delete(`http://localhost:8080/bugs/${idBug}`);
        return Promise.resolve(rez.data);
    }
    catch (err){
        return Promise.reject(err);
    }
}

export const modifyBug = async (bug) => {
    try{
        const rez = await axios.put(`http://localhost:8080/bugs`, bug);
        return Promise.resolve(rez.data);
    }
    catch (err){
        return Promise.reject(err);
    }
}

export const addBug = async (bug) => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }; 
        const rez = await axios.post(`http://localhost:8080/bugs`, bug, config);
        return Promise.resolve(rez.data);
    }
    catch (err){
        return Promise.reject(err);
    }
}


