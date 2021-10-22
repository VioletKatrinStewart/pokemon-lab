## MAKING A PLAN

# WHAT IS YOUR APP STATE? How will you represent it as a view?
* total plays
* whats been picked
* whats been shown 

# When will your state change? In response to what user action?
* on page load 3 random pokemon are generated
* update shown 
* render pokemon on page
* on button click load 3 new random pokemon 
* update picked
* update shown
* increment total plays 
# What pages will need to be created?
* we will need a home page and a results page 
# What data will need to be saved, updated, and when?
* data that will be saved is pokemon shown and pokemon picked, shown updated on page load as well as when button is clicked, and pokemon picked updated on button click when selected
* total plays counts up from 1 to 10 and is tracked with each click (pokemon selected)
# What variables will need to be used to track data?
* ID will be used to connect results object with pokemon array
# What data will need to be saved to local storage?
* pokemon shown and pokemon picked, as you capture them it stores them

## STEPS 

* home page (root directory)
    * index.hmtl
    * app.js
* results page (/results directory)
    * index.html
    * results.js
* storage-utils.js -- hold our localstorage functions
* pokemon.js -- holds the data

# make a home page with 

* three images as radio buttons
* button with an id of select-pokemon
* empty results page 

# local storage functions

* getResults -- returns the results array or empty array
* showPokemon -- incrememnt the shown key for a pokemon
* pickPokemon -- increment the picked key for a pokemon

# ap.js logic 

* generate 3 random pokemon
* call showPokemon for each
* render the pokemon on the page

# on page load 
* set totalPlays to 0 
* call generatePokemon

# on button click 
* incrememnet totalPlays
* call pickPokemon with chosed pokemon
* if totalPlays >= 10 redirect to results
* else generatePokemon