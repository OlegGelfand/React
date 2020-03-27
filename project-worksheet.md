# Project Overview
Oleg Gelfand CityApp
## Project Links
github link
https://github.com/OlegGelfand/React
live link
https://oleggelfand.github.io/React/

## Project Description

This is a city App, an opportunity for user to see if they can identify the photo presented in the app. they fill out their answer and if wrong, get sent to a page informing them of the correct answer with some more city detail.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

my API will show a picture of the city of the user.

```
Object
id: "2XPHhQCdm1A"
created_at: "2020-01-02T19:05:21-05:00"
updated_at: "2020-03-14T01:03:14-04:00"
promoted_at: null
width: 6000
height: 4000
color: "#E8DDD0"
description: "January 2020. Cleveland, OH."
alt_description: "high-angle photography of city high rise buildings"
urls: {raw: "https://images.unsplash.com/photo-1578009661061-f2…ebedb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjkyOX0", full: "https://images.unsplash.com/photo-1578009661061-f2…crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMjkyOX0", regular: "https://images.unsplash.com/photo-1578009661061-f2…ysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMjkyOX0", small: "https://images.unsplash.com/photo-1578009661061-f2…nysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMjkyOX0", thumb: "https://images.unsplash.com/photo-1578009661061-f2…nysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMjkyOX0"}
links: {self: "https://api.unsplash.com/photos/2XPHhQCdm1A", html: "https://unsplash.com/photos/2XPHhQCdm1A", download: "https://unsplash.com/photos/2XPHhQCdm1A/download", download_location: "https://api.unsplash.com/photos/2XPHhQCdm1A/download"}
categories: []
likes: 12
liked_by_user: false
current_user_collections: []
user: {id: "ylS8Bfzq_lY", updated_at: "2020-03-27T07:53:18-04:00", username: "dj_johns1", name: "DJ Johnson", first_name: "DJ", …}
exif: {make: "SONY", model: "ILCE-7M3", exposure_time: "1/1250", aperture: "5.6", focal_length: "41.0", …}
location:
title: "Hope Memorial Bridge, Cleveland, OH, USA"
name: "Hope Memorial Bridge, Cleveland, OH, USA"
city: "Cleveland"
country: "United States"
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

Link to both wireframe and react arch:
wireframe:
https://res.cloudinary.com/dkng1fqtz/image/upload/v1585331555/image0_fszgld.jpg
react Arch:
https://docs.google.com/drawings/d/1SLIciyLF5CcJ4rvIwiXGht6WxOTFOgM_FMzs3HqYTfs/edit?usp=sharing

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Use external api 
- connect components
- Render data on page 
- build comment box
- create responsive design (same as desktop just smaller)
- add nav bar
- add submit box
- create boolean function for when user gets a right or wrong answer

#### PostMVP EXAMPLE

-Have my main page show many photos and if clicked on will first open bigger and be the box where user can fill in their answer
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router, route to everywhere but the footer | 
| Header | This will render the header include the nav, which will just have a link in the city info page to go back home. This will be Home Router| 
| Footer | This will just have a nice quote | 
| CityInfo | provide a photo of the city when user gets the answer wrong and gives more info | 
| Form | handles all the click events  | 
| CityGuess |  home page- shows the user an image, has them answer what it is. If right, user gets a little description and and option to continue to next photo. If wrong, user goes to CityInfo| 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Components Form | H | 4hrs| 0hrs | 0hrs |
| Render Components | H | 4hrs| 0hrs | 0hrs |
| Add API | H | 3hrs| 0hrs | 0hrs |
| Responsive design | H | 4hrs| 0hrs | 0hrs |
| Nav Bar | H | 3hrs| 0hrs | 0hrs |
| Adding contact box | H | 3hrs| 0hrs | 0hrs |
| Adding submit box with | H | 3hrs| 0hrs | 0hrs |
| Adding boolean function to submit box | H | 3hrs| 0hrs | 0hrs |
| Buffer time | H | 9hrs| 0hrs | 0hrs |
| Total | H | 35hrs| 0hrs | 0hrs |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
