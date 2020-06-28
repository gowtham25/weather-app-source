import React, { useEffect, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import LineChart from '../common/Chart';

const Graph = ({ weatherData }) => {
    const { city = {}, list = [] } = weatherData || {};
    const { name = '' } = city || {};
    let history = useHistory();

    useEffect(() => {
        !name && history.push("/");
        // navigate to home if user try to land on the chart page
    }, [name])

    const listData = useMemo(() => { //Generate array for last 4 date
        let lastDate = '';
        return list.slice(0, 25).filter((value) => {
            const { dt_txt = '' } = value || {};
            const dataDate = new Date(dt_txt).toISOString().slice(0, 10);
            if (lastDate !== dataDate) {
                lastDate = dataDate;
                return value;
            }

        })
    }, [list]);

    const pressureData = useMemo(() => {    //Generate Pressure data for chart
        return listData.map((value) => {
            const { dt_txt = '', main: { pressure } } = value || {};
            const dataDate = new Date(dt_txt).toISOString().slice(0, 10);
            return { x: dataDate, y: pressure }
        })
    }, [listData]);
    const humidityData = useMemo(() => {    //Generate Humidity data for chart
        return listData.map((value) => {
            const { dt_txt = '', main: { humidity } } = value || {};
            const dataDate = new Date(dt_txt).toISOString().slice(0, 10);
            return { x: dataDate, y: humidity }
        })
    }, [listData]);
    const tempData = useMemo(() => {    //Generate Temperature data for chart
        return listData.map((value) => {
            const { dt_txt = '', main: { temp } } = value || {};
            const dataDate = new Date(dt_txt).toISOString().slice(0, 10);
            return { x: dataDate, y: temp }
        })
    }, [listData]);

    return (
        <>
            <div className='all-container'>
                {name ?
                    <>
                        <div className='header'>
                            <button className='back-button' onClick={() => { history.push("/") }}>Home</button>
                            <span className='city-name'>{name}</span>
                        </div>
                        <div className='template-all-container'>
                            <LineChart data={pressureData} title='Pressure' />
                            <LineChart data={humidityData} title='Humidity' />
                            <LineChart data={tempData} title='Temperature' />
                        </div>
                    </> : <p>No City Data Found</p>
                }
            </div>
        </>
    )
}

export default Graph;