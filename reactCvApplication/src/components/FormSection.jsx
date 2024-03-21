import FormHeaderRow from "./FormHeaderRow";
import FormRow from "./FormRow";

export default function FormSection({name}) {
    return (
        <div className="form-section">
        <FormHeaderRow name={name}></FormHeaderRow>
        <FormRow></FormRow>
        <FormRow></FormRow>
        <FormRow></FormRow>
        </div>

    )
}