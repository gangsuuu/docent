import styled from "styled-components"

const ContentList = styled.div(`


    `)


export default function ContentItem () {
    return (
        <div className="content_lists">
            {
                Array(5).fill(
                    <>
                        <hr></hr>
                        <ContentList className='content_list'>
                            <div className="content_list_wrapper">
                                <div className="content_list_imgesWrapper">
                                    <div className="content_list_img">
                                        <img src='https://i.namu.wiki/i/K33eUbhOodam48Ryh37euorz-8gv2fkdRoJMWAlsD22wFH8KWJql7llYc9uICYCJx_5qfhpLyLhqlU5jbdBq0w.webp' />
                                    </div>                        
                                </div>
                                <div className="content_list_contents">
                                    <div className="content_list_upper">
                                        <div className='content_list_category'>
                                            <a>카테고리</a>
                                        </div>
                                        <div className='content_list_title'>
                                            <h2>제목입니다.</h2>
                                            <a>제목입니다.</a>
                                        </div>
                                        <div className="content_list_extract">
                                            <h3>발췌내용입니다.</h3>
                                        </div>
                                        <div className="content_list_infoWrapper">
                                            <div className="content_list_writer">
                                                <p>Huck</p>
                                            </div>
                                            <div className="content_list_slash">/</div>
                                            <div className="content_list_time">
                                                <p>Jun.11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content_list_bottom">
                                        <div className="content_list_hashs">
                                            <div className="content_list_hash">
                                                <a>#마틴로즈</a>
                                            </div>
                                            <div className="content_list_hash">
                                                <a>#이순신</a>
                                            </div>
                                            <div className="content_list_hash">
                                                <a>#발렌시아가</a>
                                            </div>
                                        </div>
                                        <div className="content_list_likeWrapper">
                                            <div className="content_list_like">
                                            🔥
                                            </div>
                                            <div className="content_list_likeCount">
                                            0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContentList>

                    </>
                )
            }
        </div>
    )
}