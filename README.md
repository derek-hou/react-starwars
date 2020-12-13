## Summary
This application displays a list of characters and a random starship to be displayed on the page. It utilizes swapi.dev, a free API with data from all the Star Wars films.

## Usage
There are two navigation buttons on the top header 'Home' and 'Characters'.
Home display a picture of Mando and "the child" from the series titled The Mandalorian.
Characters navigates to the first page of characters. There are 10 characters per page, and a random starship added after the 8th character.

## React Component Hierarchy
Four components comprise the entire hierarchy.
The Characters component is the main component which includes links to drilldown to a Character Detail component, which includes more details of each character. When the drilldown link is clicked, the specific data is fecthed from swapi.

I have a button component that utilizes prop data or parameters coming from higher order components to generate the url links.

Character component - list of characters
    button component - previous
    button component - next
Character Detail component - more details
    button component - back
Starship Detail component - more details
    button component - back

## Issues
There are a couple of bugs that I must point out.
Issue 1:
Situation: When navigating to a character page 'page/:id', sometimes the data will not finish fetching.

Root cause: The promise does not complete prior to the rest of the code running.

Resolution: Need to use async and await so that the promise will finish before the rest of the code runs. Also add in a loading placeholder while the data is fetched.

Issue 2:
Situation: Data issue is causing page 3 to add the starship after the 7th character instead of 8th because 'people/17' does not exist.

Root cause: people ID 17 is missing, so instead of have 8 characters, there's only 7. Data is not perfect and so assuming I could use the ID was probably not the greatest solution.

Potential Resolutions: 
1. Add back a character with ID 17.
2. Count based on index instead of using mod against the character ID.

Issue 3: 
Situation: Cross Origin Resource Sharing (CORS) was preventing fetching of data.

Root cause: cross domains problem.

Resolution: prepend the API call with the use a proxy domain when fetching data.

## To Dos
Add unit testing ontop of user experience testing. Both are important for stamping out bugs.