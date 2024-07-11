import styled from "styled-components"
import {totalWidth} from "../../component/PinContainer.js"

console.log(totalWidth)
let ContentWrapper = styled.div`
 width: ${100% - totalWidth+'px'};
 height : 300vh;
 background-color: rgba(0, 0, 0, 0.2)
`


export default function ContentDetail () {
    return (
        <ContentWrapper>

        </ContentWrapper>
    )
}