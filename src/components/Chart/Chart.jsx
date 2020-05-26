import React, {useEffect, useState} from 'react';
import {fetchChartData} from "../../api";
import {Line} from 'react-chartjs-2';
import {makeStyles} from "@material-ui/styles";

const useStyles=makeStyles({
    lineChart:{
        width:'80%',
        margin:'30px auto'
    }
})
const Chart = props => {
    const styles=useStyles();
    const [dailyData, setDailyData] = useState({});

    useEffect(
        () => {
            const fetchAPI = async () => {
                const data= await  fetchChartData();
                setDailyData(data)

            };
            fetchAPI();
        },[]
    )

    const line=(
        dailyData[0]?
        <Line data={{
            labels:dailyData.map(data=>data.date),
            datasets:[{
                data:dailyData.map(data=>data.confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(data=>data.deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.6)',
                fill:true
            }]
        }}/>:<p>Loading....</p>
    )
    return (
        <div className={styles.lineChart}>{line}</div>
    )
};

export default Chart;