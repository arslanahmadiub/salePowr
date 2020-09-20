import React from 'react';

import {
    XYPlot,
    LineSeries,
    makeVisFlexible, makeWidthFlexible
} from 'react-vis';

const Flexible = makeWidthFlexible(XYPlot)

export default function Trends(props) {

    return (
        <Flexible height={props.height || 150}>
            <LineSeries
                style={{ strokeWidth: "3", fill: "none", }}
                stroke={props?.color || "#31BDF4"}
                className="area-series-example"
                curve="curveNatural"
                data={props?.data || []}
            />
        </Flexible>
    );
}