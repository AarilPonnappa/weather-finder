# Weather Finder

## Project Description

The Weather Finder is a web application built with HTML, CSS, and JavaScript using Spring Boot. The application allows users to view the current weather conditions in 10 Canadian cities. Users can select from a list of 10 cities and the app displays the current temperature, humidity, rain in the last hour, and wind speed.
The project uses the Open-Meteo API to get the latitude and longitude of a city and then uses those coordinates to display the weather data for that location.


## AI Usage

AI was used as a learning and assistance tool in all sections of this project.

## HTML Section
Initially, the list of the top 10 cities section was implemented using HTML table elements <table> and <td>. While designing the project, I encountered issues when trying to make the table cells behave as clickable city selections using JavaScript. AI was used to explore alternative approaches and explain why a list structure (<ul> and <li>) would be better suited for the project.

## CSS Section
AI was used to provide suggestions for improving the visual appearance and interactivity of the user interface. To enhance usability, AI suggested using ":hover" and "cursor: pointer", which were incorporated into the project. These changes helped make the interface feel more interactive and user-friendly.

## JavaScript Section

AI was used as a learning resource to understand what APIs are and how they work, the fetch() function, the structure and purpose of "try", "catch", and "finally" syntax and the usage of getElementById() and innerHTML.  

AI was also used to understand how the Open-Meteo API works. It explained that weather data cannot be requested directly using a city name. Instead we use the city's latitude and longitude to then get the coordinates to display the weather data.

During testing, I noticed that the application sometimes failed to consistently display weather data. AI suggested using "async" and "await" to properly handle the API calls, which improved reliability.

These concepts and implementations helped complete the project.