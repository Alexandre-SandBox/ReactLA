import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CardLabel = styled.span``
const Test = styled.span``
function Demoniste() {
    const { classChoice } = useParams()
    console.log(classChoice);
    return (
        <div>
            <Test>Questionnaire 🧮</Test>
            <CardLabel>{ classChoice }</CardLabel>
        </div>
    )
}
export default Demoniste;
