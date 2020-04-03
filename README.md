## Project title
Tesla App

This is a simple rendering of tesla.com, with an additional 2 API components that combines user data with weather data to help sell cars.

## Motivation
This project was built as a test to see what our newly-formed react skills can accomplish. This is my first React project.

## Tech/framework used
<b>Built with</b>
- React

## Features
What makes your project stand out?
2 APIs, responsive, identifies user location.
## Code Example
  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const ipAddressUrl = `http://gd.geobytes.com/GetCityDetails`;
    const makeIPApiCall = async () => {
      const response = await fetch(`${proxyUrl}${ipAddressUrl}`);
      let resText = await response.text();
      let json = JSON.parse(resText);
      setIPData(json);
    };
    makeIPApiCall();
  }, []);

  useEffect(() => {
    const addressInfo = ipData.geobytesfqcn;
    const makeApiCall = async () => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${addressInfo}&units=imperial&appid=${process.env.REACT_APP_WEATHERAPPAPI}`;
      const res = await fetch(weatherUrl);
      let json = await res.json();
      setWeatherData(json);
    };
    makeApiCall();
  }, [ipData]);


## How to use?
1)Plug the API into your project
2)utilize the function in weatherinfo to modify the content of the box to display what you want it to.

## Contribute

I really want to learn:
1) Techniques for better styling.
2) Incorporating other features, for instance a link within my weather function to guide the user to the car of their choice.
3) anything else.

## Credits
I used w3schools.com for my dropdown menu.

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [OlegGelfand]()