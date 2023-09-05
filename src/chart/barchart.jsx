import React, { Component } from "react";
// import ReactApexCharts from "apexcharts";
// import ReactApexChart from "react-apexcharts";
import Chart from 'react-apexcharts'

// icon import
import SquareIcon from '@mui/icons-material/Square';

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'male',
                data: [50],
                color: "#6A00BD"
            }, {
                name: 'female',
                data: [50],
                color: "#9358C2"
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 100,
                    stacked: true,
                    stackType: '100%',
                    sparkline: {
                        enabled: true
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false  //or just here to disable only x axis grids
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false  //or just here to disable only y axis
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                // title: {
                //     text: '100% Stacked Bar'
                // },
                xaxis: {
                    categories: [""],
                    labels: {
                        show: false,
                    }
                },
                // tooltip: {
                //     y: {
                //         formatter: function (val) {
                //             return val + "K"
                //         }
                //     }
                // },
                yaxis: {
                    labels: {
                        show: false,
                    }
                },
                fill: {
                    opacity: 1

                },
                // legend: {
                //     position: 'top',
                //     horizontalAlign: 'left',
                //     offsetX: 40
                // }
            },


            series1: [{
                name: 'male in 30s',
                data: [25],
                color: "#6A00BD"
            }, {
                name: 'female in 30s',
                data: [25],
                color: "#4157CE"
            },
            {
                name: 'male is 20s',
                data: [25],
                color: "#677CEF"
            }, {
                name: 'female in 20s',
                data: [25],
                color: "#C4D5DE"
            }
        
        ],
            options1: {
                chart: {
                    type: 'bar',
                    height: 100,
                    stacked: true,
                    stackType: '100%',
                    sparkline: {
                        enabled: true
                    }
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false  //or just here to disable only x axis grids
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false  //or just here to disable only y axis
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                // title: {
                //     text: '100% Stacked Bar'
                // },
                xaxis: {
                    categories: [""],
                    labels: {
                        show: false,
                    }
                },
                // tooltip: {
                //     y: {
                //         formatter: function (val) {
                //             return val + "K"
                //         }
                //     }
                // },
                yaxis: {
                    labels: {
                        show: false,
                    }
                },
                fill: {
                    opacity: 1

                },
                // legend: {
                //     position: 'top',
                //     horizontalAlign: 'left',
                //     offsetX: 40
                // }
            },


        };
    }



    render() {
        return (
            <>
                <div id="chart" style={{marginTop:"10px"}}>
                    <Chart options={this.state.options} series={this.state.series} type="bar" height={18} />
                    <SquareIcon style={{ color: "#6A00BD" }} /> <span style={{ fontSize: "12px" }}>Male:00%</span> <SquareIcon style={{ color: "#9358C2" }} /> <span style={{ fontSize: "12px" }}>Female:00%</span>
                </div>
                <div id="chart" style={{marginTop:"10px"}}>
                    <Chart options={this.state.options1} series={this.state.series1} type="bar" height={18} />
                    <SquareIcon style={{ color: "#1C31A1" }} /> <span style={{ fontSize: "12px" }}>Male in his 30s:00%</span> <SquareIcon style={{ color: "#4157CE" }} /> <span style={{ fontSize: "12px" }}>Male in his 20s:00%</span>
                    <SquareIcon style={{ color: "#677CEF" }} /> <span style={{ fontSize: "12px" }}>Female in his 20s:00%</span> <SquareIcon style={{ color: "#C4D5DE" }} /> <span style={{ fontSize: "12px" }}>others:00%</span>
                </div>
            </>
        )
    }

}