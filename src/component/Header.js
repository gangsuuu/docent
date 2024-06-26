import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";


const selectDarkMode = (state) => state.darkMode.value;



const FirstRow = styled.div`
    width:100%;
`

const LogoWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:96%;
    padding: 12px 2%;
`



export default function Header(props){
    let darkMode = useSelector(selectDarkMode);
    let dispatch = useDispatch()





    return (
        <header>
            <FirstRow>
                <LogoWrapper>
                    <div>
                        <div>DOCNET</div>
                        <nav>
                            <ul className="HaederUl">
                                <li>패션</li>
                                <li>브랜드</li>
                                <li>음악</li>
                                <li>예술</li>
                                <li>건축</li>
                                <li>라이프</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div>검색</div>
                        <div>
                            <div>유저</div>
                            <div>모드</div>
                            <div>메뉴</div>
                        </div>
                    </div>
                </LogoWrapper>
            </FirstRow>
        </header>
    )
}