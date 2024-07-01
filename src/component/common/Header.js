import { useDispatch, useSelector } from "react-redux"
import { Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";


const selectDarkMode = (state) => state.darkMode.value;



const FirstRow = styled.div`
    width:96vw;   
    padding: 12px 2vw;
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const LogoWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items:center;
    gap: 20px;

    .logoWrapper {
        font-size:60px;

    }

    nav {
        height:100%;
    }

    .headerUl {
        display: flex;
        height:100%;
        gap: 20px;
        align-items: flex-end;


        li {
            font-size : 18px;
            color: #727272;
        }
    }
`

const QuickUserMenu = styled.div`
    display:flex;
    padding-right: 20px;
    align-items: flex-end;
    gap:15px;
    
    .header_search{
    }

    .header_userMenu{
        display:flex;
        gap: 15px;
    }
`

const SecondRow = styled.div`
 
`

export default function Header(props){
    // let page = 

    let darkMode = useSelector(selectDarkMode);
    let dispatch = useDispatch()

    let navigate = useNavigate()

    return (
        <header>
            <FirstRow>
                <LogoWrapper>
                    <div>
                        <div className="logoWrapper">
                            <h2 className="hide-text">DOCNET</h2>
                            <div className='headerLogo'>
                                <a className='btn' onClick={()=> {navigate('/')}}>DOCNET</a>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul className="headerUl">
                            <li><a className='btn btn-black' onClick={() => {navigate('/fashion')}}>패션</a></li>
                            <li><a className='btn btn-black' onClick={() => {navigate('/brand')}}>브랜드</a></li>
                            <li><a className='btn btn-black' onClick={() => {navigate('/music')}}>음악</a></li>
                            <li><a className='btn btn-black' onClick={() => {navigate('/art')}}>예술</a></li>
                            <li><a className='btn btn-black' onClick={() => {navigate('/architecture ')}}>건축</a></li>
                            <li><a className='btn btn-black' onClick={() => {navigate('/lift')}}>라이프</a></li>
                        </ul>
                    </nav>
                </LogoWrapper>
                <QuickUserMenu>
                    <div className="header_search">검색</div>
                    <div className="header_userMenu">
                        <div>유저</div>
                        <div>모드</div>
                        <div>메뉴</div>
                    </div>
                </QuickUserMenu>
            </FirstRow>
            <SecondRow>

            </SecondRow>
        </header>
    )
}