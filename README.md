# gameof3
Full stack code of implementation of Game Of 3.


# Game Rules
1. It’s a two player game and, the game starts with a random number.
2. After the game starts, the first player who joins the game has to start the game with a random whole number.
3. A player can choose to respond with either -1, 0, or +1.
4. The response by the player will be operated with the game’s number and it’ll be divided by three.
5. The result of above calculation would be the input for the next player and the player should respond with the options given.
6. After a player’s response if the calculation mentioned in point 5 results in 1, then that player will be declared as the winner.

# Tech Stack
## Client
1. React
2. Redux
3. Socket

## Server
1. Express
2. Socket

# Client
Created with create-react-app, to run the dev server, go to client directory and run `npm start`

## Tests
Run `npm test`

# Server
Go to server directory and run the command `node index.js`

Note: All game data will be stored in local variables on server. Hence reloading server will result in clearing data.
