import React from "react";
import Styled from "styled-components";

const TabHeader = Styled.div`
    display: flex;
    height: 50px;
    border-bottom: .5px solid grey;
    width: 100%;
    position: relative;
    `
const TabLabelItem = Styled.div`
    font-size: 20px;
    line-height: 50px;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    color: ${props => props.selected ? "#31BDF4" : "#010101"};
    padding: 0px 20px;
    border-bottom: ${props => props.selected ? "2px solid #31BDF4" : 0}
`

const TabBody = Styled.div`
    position: relative;
    height: 90%;
    top: 15px;

`

const Tabs = props => {
    const [selectedTab, setSelectedTab] = React.useState(0)
    const headers = props.headers;
    const changeTab = index => event => { setSelectedTab(index); }

    return <div>
        <TabHeader >
            {
                headers && headers.map((header, index) => {
                    return <TabLabelItem key={header} onClick={changeTab(index)} selected={selectedTab === index}>{header}</TabLabelItem>
                })
            }

        </TabHeader>
        <TabBody>
            {props.children && props.children[selectedTab]}
        </TabBody>
    </div>
}


export default Tabs;