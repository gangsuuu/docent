import styled from "styled-components"


let totalWidth = 240
let width = 240 / 100 * 96
let widthLeft = (width / 100 * 30)
let widthRight = (width / 100 * 70) - 15
const Aside = styled.aside`
    width: ${totalWidth + 'px'} ;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    height: 100%;
`
const PinedContent = styled.div`
    width: ${width + 'px'};
    height: 75px;
    padding : ${  (totalWidth - width)/2 + 'px'};
    // border-bottom: 1px solid rgba(0 ,0 ,0, 0.1);
    // background-color : rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
    transition : background-color 0.175s;

    .pinedImgWrapper{
        width: ${widthLeft + 'px'};
        height : 100%;
        background-color : rgba(0, 0, 0, 0.2);
    }


    .pined_categori{
        margin-bottom: 4px;    
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: rgba(0, 0, 0, 0.7);

    }

    .pined_title {
        width: ${widthRight + 'px'};
        height: 20px;
        overflow: hidden;
        text-wrap: nowrap;

        .pined_title__wraper {
            width: ${widthRight + 'px'};
            height: 100%;
            overflow: hidden;
            text-wrap: nowrap;
            text-overflow: ellipsis;


            h3 {
                font-size: 13px;
                overflow: hidden;
                text-wrap: nowrap;
                text-overflow: ellipsis;    
            }        
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.3)
    }
`


export default function PinContainer () {

    return (
        <Aside className="Pined-content">
            <PinedContent>
                <div className='pinedImgWrapper'>
                    <img src='' alt=''/>
                </div>
                <div className='pinedContent'>
                    <div className='pined_categori'>
                        <p>fashion</p>
                    </div>
                    <div className='pined_title'>
                        <div className='pined_title__wraper'>
                            <h3>제목제목제목제목제목제목제목제목제목제목</h3>
                        </div>
                    </div>

                </div>
            </PinedContent>
        </Aside>
    )
}

