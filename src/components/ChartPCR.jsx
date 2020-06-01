import React,{useState,useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';

const ChartPCR = ({latest})=>{
    const[chartData,setChartData]=useState("")

    useEffect(()=>{
        setChartData({
            labels:[
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-20].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-19].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-18].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-17].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-16].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-15].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-14].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-13].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-12].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-11].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-10].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-9].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-8].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-7].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-6].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-5].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-4].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-3].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-2].date,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-1].date,
                ],
            datasets:[{
                barThickness:'20',
                label:'Tests',
                data:[
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-20].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-19].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-18].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-17].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-16].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-15].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-14].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-13].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-12].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-11].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-10].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-9].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-8].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-7].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-6].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-5].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-4].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-3].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-2].count,
                    latest?.data?.daily_pcr_testing_data[latest?.data?.daily_pcr_testing_data.length-1].count
                ],
                backgroundColor: 'rgb(47,192,83)',
                borderColor:'#2ABB53'
            }]
        })
    },[latest])
 
        return (
            <div  className="hospital-block" style={{width: '100%'}}>
                <h4 className="sub-heading bg-gray">Number of PCR test taken in last 20 days</h4>
                <div style={{padding:'1rem'}} className="chartPCR bg-gray">
                
                <Bar
                    data={chartData}
                    width={'100%'}
                    height={'35%'}
                    
                    options={
                        {
                            legend: {
                            display: false},
                            
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color:'rgba(100,100,100,0.2)'
                                    },
                                    ticks: {
                                        fontColor: "#2ABB53"
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color:'rgba(100,100,100,0.2)'
                                    },
                                    ticks: {
                                        fontColor: "#2ABB53"
                                    }
                                }]
                            }
                        }
                    }
                />
                </div>
            </div>
        );
        }


export default ChartPCR;