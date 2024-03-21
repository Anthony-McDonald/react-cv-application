import CVHeader from "./CVHeader"
import CVEntry from "./CVEntry"

export default function CVSection({name, details1, details2, details3}) {
    return (
        <>
        <CVHeader name={name}></CVHeader>
        <CVEntry details={details1}></CVEntry>
        <CVEntry details={details2}></CVEntry>
        <CVEntry details={details3}></CVEntry>
        </>
    )
}