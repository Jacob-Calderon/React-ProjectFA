import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box width={500} bgcolor="blue"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
            <Geolocated>
                {({coords})}=(
                  <Weather
  latitude={coords.latitude}
  longitude={coords.longitude}
  unit="fahrenheit"
>
  {({ temperature, condition }) => (
    <Box>
      <p>The temperature is {temperature}°F and the condition is {condition}.</p>
    </Box>
  )}
</Weather>
            </Geolocated>
      </header>
    </div>
  );
}

export default App;
