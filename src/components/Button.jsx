export default function button({name, buttonEffect}) {
    return (
        <>
        <button onClick={buttonEffect}>{name}</button>
        </>
    )
}