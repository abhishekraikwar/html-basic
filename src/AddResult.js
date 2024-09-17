import { useState } from 'react';
import './AddResult.css';
import { Link } from 'react-router-dom';
const AddResult=({addResult, results})=>{
    const [formData, setFormData] = useState({
        rollno:'',
        name:'',
        dob:'',
        score:''
    })
    const[error,setError] = useState({
        rollno:'',
        name:'',
        dob:'',
        score:''
    })
    const [successMessage, setSuccessMessage] = useState("");

    const validate=()=>{
        let isValid = true;
        const newErrors = {};

        if(!formData.name){
            isValid=false;
            newErrors['name']='Name is required';
        }
        if(!formData.dob){
            isValid=false;
            newErrors['dob']='Date of birth is required';
        }
        if(!formData.rollno){
            isValid=false;
            newErrors['rollno']='Roll no. is required';
        }
        else if(results.some((result)=>{return result.rollno === formData.rollno})){
            isValid=false;
            newErrors['rollno']='Roll no. should be unique';    
        }
        if(!formData.score){
            isValid=false;
            newErrors['score']='Score is required';
        }
        setError(newErrors);
        return isValid;
    }
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormData({...formData , [name]:value});
        setError({ ...error, [name]: '' });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            addResult(formData);
            setFormData({
                rollno: '',
                name: '',
                dob: '',
                score: ''
            });

            setSuccessMessage('Result added successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    }
    return<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="rollno">Roll no. :</label>
            <input name="rollno" id='rollno'type="number" className="form-input" onChange={handleChange} value={formData.rollno}/>
            {error.rollno && <><div className='error'>{error.rollno}</div></>}            
            <label htmlFor="name">Name :</label>
            <input name="name" id='name'type="text" className="form-input" onChange={handleChange} value={formData.name}/>
            {error.name && <><div className='error'>{error.name}</div></>}
            <label htmlFor="dob">Date of Birth :</label>
            <input name="dob" id='dob'type="date" className="form-input" onChange={handleChange} value={formData.dob}/>
            {error.dob && <><div className='error'>{error.dob}</div></>}
            <label htmlFor="score">Score :</label>
            <input name="score" id='score'type="number" className="form-input" onChange={handleChange} value={formData.score}/>
            {error.score && <><div className='error'>{error.score}</div></>}
            {successMessage && <div className='success-message'>{successMessage}</div>}
            <div className='buttons'>
            <button type='submit ' className='submit btn'>Add</button>
            <Link to="/viewresult"><button className='view-btn btn'>View All</button></Link>
            </div>
        </form>
    </>
}

export default AddResult;