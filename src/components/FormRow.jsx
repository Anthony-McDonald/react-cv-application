

export default function FormRow({name, value, onInputChange}) {
    return (
        <div className="form-rows">
            <input type="text" value={value}
            onChange={(e) => onInputChange(name, e.target.value)} />
        </div>
    )
}