import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import Styled from "styled-components";


const OutterBox = Styled.input`
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
    position: relative;
    color: #979FAA;
    font-size: 16px;
    text-align: center;
    padding: 1px 5px;
    height: 40px;
    width: 100%;
    // @media (max-width: 960px){
    //     max-width: 50%;
    //     float: left;
    // }
    &::placehoder{
        color: #979FAA;
        font-size: 16px;
    }
`

const Icon = Styled(SearchIcon)`
    color: #979FAA;
    font-size: 20px;
    position: absolute;
    top: 30%;
    right: 5px;
`

const Container = Styled.div`
    position: relative;
`


const SearchBox = props => {

    return <Container>

        <OutterBox placeholder={props.placeholder && props.placeholder} />
        <Icon />


    </Container>
}

export default SearchBox