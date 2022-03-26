import { useParams } from 'react-router-dom'

function Demoniste() {
    const { classChoice } = useParams()
    console.log(classChoice);
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <p>{ classChoice }</p>
        </div>
    )
}
export default Demoniste;
