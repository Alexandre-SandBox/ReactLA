import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CardLabel = styled.span``
function Demoniste() {
    const { classChoice } = useParams()
    console.log(classChoice);
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <CardLabel>{ classChoice }</CardLabel>
        </div>
    )
}
export default Demoniste;
