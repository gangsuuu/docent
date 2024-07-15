import styled from "styled-components"
import {totalWidth} from "../../component/PinContainer.js"

let ContentWrapper = styled.div`
 width: 88%;
 height : 300vh;
 background-color: rgba(0, 0, 0, 0.2)
`

let ContentDetailTitles


export default function ContentDetail () {
    return (
        <ContentWrapper>
            <div className="content-detail"></div>        
        </ContentWrapper>
    )
}