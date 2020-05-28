import React from 'react';
import {Bar, Pie, HorizontalBar} from 'react-chartjs-2';

class GlobalTotalChart extends Component {

    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Total Cases','Deaths','Recovered'],
                datasets:[{
                    label:'Patients',
                    data:[
                        700,
                        200,
                        1000
                    ],
                    backgroundColor:[
                        '#1A73E8',
                        '#1A73E8',
                        '#1A73E8'
                    ]
                }]
            }
        }
    }

    render() {
        return (
            <div className="chart">
                <HorizontalBar
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        );
    }
}

export default GlobalTotalChart;