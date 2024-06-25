import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";



const selectDarkMode = (state) => state.darkMode.value;

export default function Header(props){
    let darkMode = useSelector(selectDarkMode);
    let dispatch = useDispatch()




    const FirstRow = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:96%;
        padding: 0 2%;
    `

    const LogoWrapper = styled.div`
    `


    return (
        <header>
            <FirstRow>
                <LogoWrapper>
                    <div>DOCNET</div>
                </LogoWrapper>
            </FirstRow>
        </header>
    )
}