import React from 'react'
import Styled from 'styled-components'
import { SearchResultsItem } from '../SearchResultsItem/SearchResultsItem'


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
    display:flex;
    flex-wrap:wrap;
    width:80%;
`
const Result = Styled.div`
text-align:center;
color:#fff;
font-size:30px;
margin:0 auto;
`
export const SearchResultsContent = ({ url, data }) => {
    console.log(data)
    return (
        <SectionWrapper>
            <PageTitle> Search results for {url} </PageTitle>
            <Content>
                {
                    data.length > 0 ?
                        data.map((item, key) =>
                            <div>
                                <SearchResultsItem key={key} id={item.id} title={item.original_title} src={item.poster_path} />
                            </div>
                        )
                        :
                        <Result> NO RESLUTS</Result>
                }

            </Content>
        </SectionWrapper>
    )


}


