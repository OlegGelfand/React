# Project Overview
Oleg Gelfand
## Project Links
github link
https://github.com/OlegGelfand/React
live link
https://oleggelfand.github.io/React/

## Project Description

I want to build another profile page and by mimicing teslas page. my API will hopefully pull in photos of cities based on users location. I will have sections- skills, links, and projectabout me that can be referenced from the nav, 
my resume will be on another page, links will exist to my github, linked in, and portfolio page from project 1.

my skills section will link to the project section below, once a link is clicked only relevant projects show up. My API will be in the skills section- give the viewer a warm feel when they see a photo of their own city.

the about me will have a photo of each of the people in my family, each clickable

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

my API will show a picture of the city of the user.

```
const makeApiCall = async () => {
  const res = await fetch("https://api.teleport.org/api/");
  const json = await res.json();
  console.log(json);
};
makeApiCall();
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

Link to both wireframe and react arch:
https://res.cloudinary.com/dkng1fqtz/image/upload/v1585305015/IMG_3041_rv6rin.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Use external api 
- connect components
- Render data on page 
- Allow user to interact with the page
- add hamburger menu
- create responsive design
- add contact page
- add nav bar
- add links
- add rotating images

#### PostMVP EXAMPLE

- really want my contact form to be unique kind of like the spinning saw blade on dewalt.com, with a potential construction background
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router, route to everywhere but the footer | 
| Header | This will render the header include the nav, will have a hamburger icon when mobile. This will be Home (Router| 
| Footer | This will just have a nice quote and a route back to the Header ,No route| 
| About Me | This will include a nav bar in the bottom middle with 5 dots, scroll on click to the right or left, will show photos of my family that would show about me data once clicked | 
| Skills | This will render all of my skills which will be linked to my projects section, in desktop this will surround a photo of me, in mobile the photo will be much smaller  | 
| Projects | This will show only projects based on the skill that was clicked in Skills and will have a button to send back to skills to look at additional skills, ideally each project will show project data once clicked | 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Components Form | H | 4hrs| 0hrs | 0hrs |
| Render Components | H | 4hrs| 0hrs | 0hrs |
| Add API | H | 3hrs| 0hrs | 0hrs |
| Add rotating images | H | 4hrs| 0hrs | 0hrs |
| Add hamburger menu | H | 4hrs| 0hrs | 0hrs |
| Responsive design | H | 4hrs| 0hrs | 0hrs |
| Nav Bar | H | 3hrs| 0hrs | 0hrs |
| link resume, github, linkedin, and project 1 portfolio | H | 2hrs| 0hrs | 0hrs |
| Adding contact page | H | 3hrs| 0hrs | 0hrs |
| Buffer time | H | 9hrs| 0hrs | 0hrs |
| Total | H | 40hrs| 0hrs | 0hrs |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
