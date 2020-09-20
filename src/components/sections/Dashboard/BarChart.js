import React from "react"
import VerticalBar from "./VerticalBar"
import Styled from "styled-components"

const Container = Styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0;
    position: relative;
    width: 100%;
    `
// const StackContainer = Styled.div`
//         height: 100%;
//         position: relative;
//         border: 0.5px black dashed;
//         bottom: 0;
//          display: flex;
//         justify-content: space-between;
//         padding: 50px 0;
//     `

// const BarContianer = Styled.div`
//         height:100%;
//         position: relative;
//     `

const BarChart = props => {
    const data = props.data;

    return <Container>
        {
            data && data.map((item, index) => {
                // THIS EXTRA DIV IS NEEDED FOR STATIC POSITIONING
                return <div key={index}>
                    <VerticalBar percent={item.percent} label={item.label} />
                </div>
            })
        }
    </Container>

}

export default BarChart;