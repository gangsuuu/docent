import styled from "styled-components";
import PinContainer from "./PinContainer";
import ContentItem from "./ContentItem.js";
import { Route, Routes } from "react-router-dom";


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
                    path='/detail' 
                    element={<div>디테일페이지 입니다 </div>}
                />
                <Route 
                    path='/*
                    ' 
                    element={<div>디테일페이지 입니다 </div>}
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

