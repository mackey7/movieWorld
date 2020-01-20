import React from 'react'
import Styled from 'styled-components'

const SectionWrapper = Styled.section`
    background:#3d2f87;
    min-width:100%;
    min-height:100vh;
    padding:0;
    margin:0;
`
const PageTitle = Styled.h1`
    text-align:center;
    font-weight:100;
    text-transform:uppercase;
    padding:20px;
    color:#d8d8d8;
    margin:0;
`

const Content = Styled.div`
    margin:0 auto;
`

export const SearchResultsContent = ({ url, data }) => {

    return (
        <SectionWrapper>
            <PageTitle> Search results for {url} </PageTitle>
            <Content>
                {
                    data ?
                        data.map((item, key) =>
                            <div key={key}>

                            </div>
                        )
                        :
                        <div> NO RESLUTS</div>
                }

            </Content>
        </SectionWrapper>
    )


}


// const SliderWrapper = Styled.div`
//    
//     font-size:24px;
//     font-weight:700;
//     max-width:80%;
// `
