import React from 'react'
import Styled from "styled-components"



const data = [
    90, 10, 67
]

const makeData = data => {
    var finalData = []
    let len = data.length;
    let start = 1



    if (len === 1 || len === 0) return data;

    while (start < len) {
        const inter = generateInterval(data[start - 1], data[start])
        finalData = [...finalData, ...inter]

        start++

    }


    return finalData;
}

const generateInterval = (point1, point2) => {

    let arr = []
    if (point1 == point2) {

    } else if (point1 > point2) {
        for (let i = 0; i < point1 - point2;) {
            i++;
            arr.push(point1 - i + 1)

        }
    } else {
        for (let i = 0; i < point2 - point1;) {
            i++;
            arr.push(point1 + i)

        }
    }

    return arr;
}

const TrendComponent = props => {
    let arr = makeData([90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0, 90, 5, 90, 30, 45, 112, 69, 0,]);
    console.log(arr)

    return arr ? <div style={{ display: "flex", justifyContent: "space-evenly", height: "90% ", position: "absolute", bottom: 0, width: "90%" }}>
        {
            arr.map((point, index) => {
                return <div key={point ** 3 - index ** 2} style={{ height: `${point}px`, background: "black", position: "relative", bottom: "20px", width: "10px" }} />
            })
        }
    </div>
        : <>
            {arr.length}
        </>

}

export default TrendComponent;