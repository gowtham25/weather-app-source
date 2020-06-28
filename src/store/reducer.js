import axios from 'axios';

const initialStata = {
    weatherData: {}
}

export const reducer = (state = initialStata, action) => {
    switch (action.type) {
        case "CITY_WEATHER_GET":
            return {
                ...state,
                weatherData: action.weatherData
            }
        default:
            return state;
    }
}

export function getWeatherDetails(str = 'London') {
    return (dispatch) => {
        return axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${str}&appid=aff21b6bbee22375db75b1e8f147bab4`)
            .then(res => {
                dispatch({ type: "CITY_WEATHER_GET", weatherData: res.data });
                return res.data;
            })
    };
}
export default reducer;