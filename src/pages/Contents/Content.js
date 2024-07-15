import styled from "styled-components";
import PinContainer from "../../component/PinContainer.js";
import ContentItem from "../../component/ContentItem.js";
import { Route, Routes } from "react-router-dom";
import ContentDetail from "./ContentDetail.js";


const Contents = styled.section`
    display: flex;
    width: 100vw;
    padding : 0 2vw;
    max-width: 100%;
    gap: 40px;
    box-sizing : border-box;
`

const Title = styled.h2`
`
export default function Content (props) {

    return (
        <Contents>
            <PinContainer>
            </PinContainer>
            <Routes>
                <Route 
                    path='/' 
                    element={<ContentItem></ContentItem>}
                />
                <Route
                    path='detail' 
                    element={<ContentDetail></ContentDetail>}
                />
            </Routes>
        </Contents>

    )
}


const Article = () => {
    return (
        <div>

        </div>
    )
}

