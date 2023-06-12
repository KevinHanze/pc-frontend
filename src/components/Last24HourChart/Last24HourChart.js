import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './Last24HourChart.css';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let totalUsage = 0;
class Last24HourChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const url = "http://shambuwu.com:8000/api/measurements?owner=kevin";
        //const everyNth = (arr, nth) => arr.filter((e,i) => i % nth === nth-1)


        fetch(url)
            .then(response => {
                return response.json()
            })
            .then( data => {
                var convertedData = []

                for(let datapoint in data){
                    let datapoints = {x: "", y: ""}
                    const currentTime = Date.parse(data[datapoint].timestamp)
                    datapoints.x = new Date(currentTime + 2 * 60 * 60 *1000)
                    datapoints.y = data[datapoint].active_power
                    totalUsage +=
                    convertedData.push(datapoints)
                }
                //const interval = Math.floor(convertedData.length/10)

                //const graphData = everyNth(convertedData,interval)

                this.setState({data:convertedData})
                console.log(totalUsage)

            },[])

    }



    render() {

        const { title = "Active watt usage last week"} = this.props
        const { xAxis = "time"} = this.props
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title:{
                text: title
            },
            axisY: {
                title: "Usage in Active Watt",
                suffix: "W"
            },
            axisX: {
                xValueType: "dateTime",
                title: xAxis,
            },
            data: [{
                type: "area",
                xValueType: "dateTime",
                toolTipContent: "seconds {x}: {y}",
                dataPoints: this.state.data
            }]


        }


        return (
            <div className="chart">
                <CanvasJSChart options = {options}
                />
                <h3>Total usage: {totalUsage/1000} Kw</h3>
            </div>
        );


    }

}

Last24HourChart.propTypes = {};

Last24HourChart.defaultProps = {};

export default Last24HourChart;
