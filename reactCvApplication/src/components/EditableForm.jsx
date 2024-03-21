import FormTitleBox from "./FormTitleBox";
import FormHeaderRow from "./FormHeaderRow";
import FormRow from "./FormRow";

import Button from "./Button";

export default function EditableForm({ editFunction, submitFunction, inputValues, onInputChange}) {
    return (

<div className="editable-form">
<FormTitleBox></FormTitleBox>

        <div className="editable-form">
            <FormHeaderRow name={"Personal Details"}></FormHeaderRow>
            <FormRow name="pd1" value={inputValues.pd1} onInputChange={onInputChange}></FormRow>
            <FormRow name="pd2" value={inputValues.pd2} onInputChange={onInputChange}></FormRow>
            <FormRow name="pd3" value={inputValues.pd3} onInputChange={onInputChange}></FormRow>
            <FormHeaderRow name={"Education"}></FormHeaderRow>
            <FormRow name="ed1" value={inputValues.ed1} onInputChange={onInputChange}></FormRow>
            <FormRow name="ed2" value={inputValues.ed2} onInputChange={onInputChange}></FormRow>
            <FormRow name="ed3" value={inputValues.ed3} onInputChange={onInputChange}></FormRow>
            <FormHeaderRow name={"Experience"}></FormHeaderRow>
            <FormRow name="ex1" value={inputValues.ex1} onInputChange={onInputChange}></FormRow>
            <FormRow name="ex2" value={inputValues.ex2} onInputChange={onInputChange}></FormRow>
            <FormRow name="ex3" value={inputValues.ex3} onInputChange={onInputChange}></FormRow>
        </div>

<div className="form-entries">

</div>

    <div className="buttons">
        <Button name="Edit"buttonEffect={editFunction} ></Button>
        <Button name="Submit"buttonEffect={submitFunction}></Button>
    </div>

</div>

    );
}