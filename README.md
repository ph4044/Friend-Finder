# Friend-Finder

# liri-node-app

### Overview
LIRI is a _Language_ Interpretation and Recognition Interface.  It is a command line node app that takes in parameters and gives you back data.  

Friend-Finder is a compatibility-based application; basically a friend app that takes in results from the users' surveys, then compares the answers among users. The app then displays the name and picture of the user with the best overall match.


### Setup
1. Clone the repo.
2. In Terminal/Bash window, enter "npm install".
3. You will need to supply your own `.env` file.
4. In Terminal/Bash enter "node server.js".

### User Guide / Commands

liri.js can take in the following commands, one at a time:

1. `node liri.js concert-this <artist/band name here>`

    Searches the Bands in Town Artist Events API for an artist and renders the following information about each event:

     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

    Searches Spotify API and displays the following information about the song:

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

    If no song is provided the program defaults to "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`

    Searches the OMDB API and outputs the following information:
   
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

    If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    
4. `node liri.js do-what-it-says`

    Reads the text inside of random.txt and then uses it to call one of LIRI's commands.  random.txt stored in the repo has contents: 'spotify-this-song,"I Want it That Way"'.

### Screen Shots

Screen shots showing execution of liri.js:

1.  the initial home screen:

    ![Image of home-page](images/home-page.PNG)

2.  the survey:

    ![Image of survey](images/survey.PNG)

3.  resulting friend suggestion (closest match):

    ![Image of friend-suggestion](images/friend-suggestion.PNG)

4.  listing the contents of the Friends API:

    ![Image of API-contents](images/API-contents.PNG)

## Author
Philip Hu