import React from "react";
const PUT_DATA_WEATHER = "PUT_DATA_WEATHER";
const CHANGE_TEXT_WEATHER = "CHANGE_TEXT_WEATHER"
let InitialState = {
    weatherDataLocation: null,
    weatherText: ""
}
const weatherReducer = (state = InitialState, action) => {
    switch (action.type) {
        case PUT_DATA_WEATHER:
            return {
                ...state,
                weatherDataLocation: action.weatherDataLocation
            }

        case CHANGE_TEXT_WEATHER:
            return {
                ...state,
                weatherText: action.weatherText
            }
        default:
            return {
                ...state
            }
    }
}

export const putWeatherData = (data) => {
    return  {
        type: PUT_DATA_WEATHER,
        weatherDataLocation: data,
    }
}

export const onChangeText = (text) => {
    return  {
        type: CHANGE_TEXT_WEATHER,
        weatherText: text,
    }
}

export default weatherReducer;