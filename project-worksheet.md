# Project Overview
Oleg Gelfand CityApp
## Project Links
github link
https://github.com/OlegGelfand/React
live link
https://oleggelfand.github.io/React/

## Project Description

Copy of Tesla page with weather widget

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

my API will show the weather and say stuff based on the weather. Ex. "looks like it's raining outside, luckily we've got you covered. "Sunny? come on, show us off"

```
The API is from a class assignment.
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

Link to both wireframe and react arch:
wireframe:
https://res.cloudinary.com/dkng1fqtz/image/upload/v1585338515/IMG_3050_ztfjhz.jpg
react Arch:
https://res.cloudinary.com/dkng1fqtz/image/upload/v1585338527/IMG_3049_jamtvb.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Use external api 
- connect components
- Render data on page 
- mimic links
- add drop down menu
- create responsive design (same as desktop just smaller)
- add nav bar
- links will all be disabled.

#### PostMVP EXAMPLE

- really mimic the functionality of the entire page if possible.
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router, rout to Model X and Model Y | 
| MainData | This will render the nav and main page| 
| Footer | This will have a static nav bar | 
|Weatherinfo | provide a weather report with jokes (see above) | 
| Model Y| page that contains data about teslas Model Y | 
| Model X| page that contains data about teslas Model X | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Components Form | H | 4hrs| 4hrs | 5hrs |
| Render Components | H | 4hrs| 3hrs | 3hrs |
| Add API | H | 3hrs| 5hrs | 7hrs |
| Responsive design | H | 4hrs| 4hrs | 4hrs |
| Nav Bar in header | H | 3hrs| 3hrs | 3hrs |
| Add grid | H | 4hrs| 1hrs | 1hrs |
| Add styling | H | 4hrs| 5hrs | 5hrs |
| Buffer time | H | 8hrs| 8hrs | 8hrs |
| Total | H | 34hrs| 34hrs | 36hrs |


## Additional Libraries
 I created the drop down menu from w3schools. using their code and modifying.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
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
```
