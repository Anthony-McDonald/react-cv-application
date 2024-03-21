import '../styles/main-styles.css'
import EditableForm from './EditableForm'
import CVSection from './CVSection'
import { useState } from 'react';

export default function MainArea() {
    const [inputValues, setInputValues] = useState({
        pd1: '',
        pd2: '',
        pd3: '',
        ed1: '',
        ed2: '',
        ed3: '',
        ex1: '',
        ex2: '',
        ex3: ''
    });
    const [lastValues, setLastValues] = useState({
        pd1: '',
        pd2: '',
        pd3: '',
        ed1: '',
        ed2: '',
        ed3: '',
        ex1: '',
        ex2: '',
        ex3: ''
    });

    function handleSubmitPress() {
        setLastValues({...inputValues});
        setInputValues({
            pd1: '',
            pd2: '',
            pd3: '',
            ed1: '',
            ed2: '',
            ed3: '',
            ex1: '',
            ex2: '',
            ex3: ''
        });
    }
    function handleEditPress() {
        setInputValues({...lastValues});
    }


    const handleInputChange = (name, value) => {
        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    return (
        <div className="container">
<div className="left-side">
{/* <h3>leftSide</h3> */}

<EditableForm editFunction = {handleEditPress}submitFunction = {handleSubmitPress}inputValues={inputValues} onInputChange={handleInputChange}></EditableForm>
</div>

<div className="right-side">
{/* <h3>rightSide</h3>  */}
<CVSection name={"Personal Details"} details1={"Name: " + lastValues.pd1} details2={"email: " + lastValues.pd2} details3={"phone number: " + lastValues.pd3}></CVSection>
<CVSection name={"Education"} details1={"School: " + lastValues.ed1} details2={"Title of Study: " +lastValues.ed2} details3={"Date of Study: " + lastValues.ed3}></CVSection>
<CVSection name={"Previous Work"} details1={"Company Name:  " + lastValues.ex1} details2={"Position Title: " + lastValues.ex2} details3={"Main Responsibilities: " + lastValues.ex3}></CVSection>
</div>

</div>
    )
}



