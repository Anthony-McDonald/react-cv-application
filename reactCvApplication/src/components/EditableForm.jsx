import FormTitleBox from "./FormTitleBox";
import FormSection from "./FormSection";
import Button from "./Button";

export default function EditableForm() {
    return (

<div className="editable-form">
<FormTitleBox></FormTitleBox>
<FormSection name="Personal Details"></FormSection>
<FormSection name="Education"></FormSection>
<FormSection name="Experience"></FormSection>
<div className="form-entries">

</div>

    <div className="buttons">
        <Button name="Edit"buttonEffect={editClicked} ></Button>
        <Button name="Submit"buttonEffect={submitClicked}></Button>
    </div>

</div>

    );
}

function editClicked() {
    console.log("edit clicked");
}

function submitClicked() {
    console.log("submit clicked");
}