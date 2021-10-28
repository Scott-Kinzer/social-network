import React from "react";
import {connect} from "react-redux"
import {onChangeText, putWeatherData} from "../../redux/weather-reducer";
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

const Weather = (props) => {
    const myRef = React.createRef()


    return (
        <div className="content">
          <div className="content-wrapper">
              <div>
                  <input
                      ref={myRef} value={props.weatherPage.weatherText} onChange={() => {

                      const text = myRef.current.value;
                      console.log(text)
                      props.onChangeText(text)

                  }} type="text"/>
                  <Button variant="contained" onClick={() => props.putWeatherData(myRef.current.value)}>GET WEATHER</Button>
              </div>

              <div>
                  {props.weatherPage.weatherDataLocation === null ? <div>Empty</div>
                      : <>
                          <div>{props.weatherPage.weatherDataLocation.name}</div>
                          <div>{props.weatherPage.weatherDataLocation.timezone}</div>
                      </>
                  }

              </div>
          </div>
        </div>
        )
}

class WeatherContainer extends React.Component {

    onChangeTextWeather = (text) => {
        this.props.onChangeText(text);
    }

    fetchWeatherData = (cityName) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=104ad819a9a2d91b1fe977d04bfa83af`)
            .then(data => {
                return data.json()
            }).then(data => {
                this.props.putWeatherData(data);
        })
    }

    render() {
        return <Weather weatherPage={this.props.weatherData} onChangeText={this.onChangeTextWeather} putWeatherData={this.fetchWeatherData} />
    }
}

let mapStateToProps =  (state) => {
    return {
        weatherData: state.weatherPage
    }
}



export default connect(mapStateToProps, {putWeatherData,
onChangeText})(WeatherContainer)