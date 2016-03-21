import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data}
                        width={500}
                        height={180}
                        margin={5}>
                <SparklinesLine color={props.color}/>
            </Sparklines>
            <div>
                <span className="mini-stock-data">Max: {Math.max(...props.data)} {props.units}</span>
                <span className="mini-stock-data">Min: {Math.min(...props.data)} {props.units}</span>
                <span className="mini-stock-data">Avg: {average(props.data)} {props.units}</span>
            </div>
        </div>
    );
}

