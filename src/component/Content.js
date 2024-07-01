import styled from "styled-components";
import PinContainer from "./PinContainer";
import ContentList from "./ContentList.js";
import { Route, Routes } from "react-router-dom";


const Contents = styled.section`
    display: flex;
    width: 96vw;
    padding : 0 2vw;
    height : 500px;
    gap: 40px;
`

const Title = styled.h2`
`
export default function Content (props) {
    return (
        <Contents>
            <PinContainer>
            </PinContainer>
            {/* <Routes>

            </Routes> */}
        </Contents>
    )
}


const Article = () => {
    return (
        <div>

        </div>
    )
}