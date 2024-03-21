import '../styles/main-styles.css'
import EditableForm from './EditableForm'
import CVSection from './CVSection'

export default function MainArea() {
    return (
        <div className="container">
<div className="left-side">
{/* <h3>leftSide</h3> */}

<EditableForm></EditableForm>
</div>

<div className="right-side">
{/* <h3>rightSide</h3> */}
<CVSection></CVSection>
<CVSection></CVSection>
<CVSection></CVSection>
</div>

</div>
    )
}