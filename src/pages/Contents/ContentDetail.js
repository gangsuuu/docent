import styled from "styled-components"
import {totalWidth} from "../../component/PinContainer.js"

let ContentWrapper = styled.div`
 width: 88%;
 height : 300vh;
 display : flex;
`

let ContentInfos = styled.div`

    h1{
        font-size:45px;
        padding: 45px 0;
    }

    p{
        font-size:18px;
        color: #c0c0c0;
    }
`

let Contents = styled.div`


`

let ContentLeft = styled.div`
    width:70%;
`

let ContentRight = styled.div`
    width:30%;
`
let ContentOutline = styled.div`

    .detial-outline {
        font-size: 17px;
        padding : 20px 0;
    }

    li {
        color: #c0c0c0;
        padding: 3px 0;
        a {
         color: #c0c0c0;
        }
        a:visted{
            color: #c0c0c0;
        }
        &::before {	       // 가상선택자를 통해 li태그 앞에 dot 을 붙여준다.
            content: '•';   
            font-size: 108%;
            padding-right: 5px;
    }
`

export default function ContentDetail () {
    return (
        <ContentWrapper>
            <ContentLeft>
                <ContentInfos>
                    <h1>타이틀 입니다</h1>        
                    <p>발췌내용입니다</p>
                </ContentInfos>
                <Contents>

                </Contents>
            </ContentLeft>
            <ContentRight>
                <ContentOutline>
                    <div className="detial-outline">
                        <p>Oultline</p>
                    </div>
                    <ul>
                        {
                            Array(5).fill(
                                <>
                                    <li><a href='#'>콘텐츠</a></li>
                                </>
                                )
                        }
                    </ul>
                </ContentOutline>
            </ContentRight>
        </ContentWrapper>
    )
}