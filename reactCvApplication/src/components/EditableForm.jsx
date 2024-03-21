import FormTitleBox from "./FormTitleBox";
import FormRow from "./FormRow";
import EditButton from "./EditButton";
import SubmitButton from "./SubmitButton";

export default function EditableForm() {
    return (
<>

<FormTitleBox></FormTitleBox>
<FormRow></FormRow>
<FormRow></FormRow>
<FormRow></FormRow>
<div className="buttons">
    <EditButton></EditButton>
    <SubmitButton></SubmitButton>
</div>


</>
    );
}