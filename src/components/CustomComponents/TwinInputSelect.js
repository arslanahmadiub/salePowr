import { ClickAwayListener } from '@material-ui/core'
import { EventNote, ExpandLess, ExpandMore } from '@material-ui/icons'
import React from 'react'
import Styled from "styled-components"



const FlatContainer = Styled.div`
    postion: relative;
    height: 40px;
    cursor: pointer;
    padding: 0px;
    width: 100%;
    border-right: 0.5px solid grey;
    border-radius: 10px;
    line-height: 40px;
    background:#FFFFFF;
`
const Container = Styled.div`
    postion: relative;
    height: 40px;
    display: flex;
    justify-content:space-between;
    cursor: pointer;
    border: 0.5px solid #979FAA;
    border-radius: 10px;
    background: ${p => p.bg ? "#FFFFFF" : ""}
`


const SelectText = Styled.div`
    color: #979FAA;
    font-size: 14px;
    text-align: center;
`

const DropdownIcon = Styled(ExpandMore)`
    position: relative;
    top:5px;
    width: 20px;
    color: #979FAA;
`
const DropUpIcon = Styled(ExpandLess)`
    position: relative;
    top:5px;
    width: 20px;
    color: #979FAA;
`
const Icon = Styled(EventNote)`
    position: relative;
    top:-5px;
    width: 20px;
    color: #5A36CC;
    margin-right: 10px;
`

const List = Styled.ul`
    position:relative;
    padding: 2px;
    z-index: 100;
    overflow: hidden;
    float: right;
    width: %;
    top: -20px;
    right: 10px;
    text-align: center;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background: #FFF;
    padding: 10px;
    list-style-type: none;
    border-bottom-radius: 10px;
    display: ${p => p.show ? "" : "none"};
`

const ListItem = Styled.li`
    cursor: pointer;
    font-size: 11px;
    padding: 5px;
    border-radius: 10px;
    &:hover{
        background: #F5F8FD;
    }
`


const FlatSelect = props => {
    const [show, toggleShow] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    const selectItem = index => event => {
        event.stopPropagation();
        setSelected(index)
        toggleShow(!show)

    }

    const list = props.list || []
    return <ClickAwayListener onClickAway={() => toggleShow(false)}>
        <FlatContainer onClick={() => toggleShow(!show)} bg={props.bg}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {props.icon ? <Icon /> : <></>}
                <SelectText>{list.length > 0 ? list[selected] : ""}</SelectText>
                {show ? <DropUpIcon /> : <DropdownIcon />
                }
            </div>

            <List show={show}>
                {
                    list.map((item, index) => {
                        return <ListItem key={index} onClick={selectItem(index)}>{item}</ListItem>
                    })
                }
            </List>
        </FlatContainer>
    </ClickAwayListener>
}

const Input = Styled.input`
    border: 0;
    border-radius: 10px;
`



const TwinInputSelet = props => {

    return <Container>
        <FlatSelect list={props.list} />
        <Input />
    </Container>
}

export default TwinInputSelet;