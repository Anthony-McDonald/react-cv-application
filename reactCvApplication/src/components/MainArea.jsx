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

<EditableForm inputValues={inputValues} onInputChange={handleInputChange}></EditableForm>
</div>

<div className="right-side">
{/* <h3>rightSide</h3>  */}
<CVSection name={"Personal Details"} details1={"Name: " + inputValues.pd1} details2={"email: " + inputValues.pd2} details3={"phone number" + inputValues.pd3}></CVSection>
<CVSection name={"Education"} details1={"School: " + inputValues.ed1} details2={"University Degree: " +inputValues.ed2} details3={"Extra Curriculars: " +inputValues.ed3}></CVSection>
<CVSection name={"Previous Work"} details1={"1. " + inputValues.ex1} details2={"2. " + inputValues.ex2} details3={"3." + inputValues.ex3}></CVSection>
</div>

</div>
    )
}