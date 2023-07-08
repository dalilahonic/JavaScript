/*
We're building a football betting app.

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Gnarby'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;
console.log(players1);
console.log(players2);

let [gk, ...otherPLayers] = players1;
console.log(gk, otherPLayers);

let allPLayers = [...players1, ...players2];
console.log(allPLayers);

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// let teamOneOdds = game.odds?.team1;
// let teamTwoOdds = game.odds?.team2;
// let drawOdds = game.odds?.x;
// console.log(teamOneOdds, teamTwoOdds, drawOdds);

let {
  odds: { team1: teamOneOdds, x: drawOdds, team2: teamTwoOdds },
} = game;
console.log(teamOneOdds, teamTwoOdds, drawOdds);

// function printGoals(...playerNames) {
//     // console.log(...playerNames);

//     let totalGoals = 0;
//     let playerScored = [];

//     for(let player of game.scored) {
//         if(playerNames.includes(player)) {
//             totalGoals++;
//             playerScored.push(player);
//             // console.log(player);
//         }
//     }
//     // console.log(totalGoals);
//     console.log(playerScored);

//     console.log( `the first team achived ${totalGoals} goals and the scorders were ${ playerScored}`);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Gnarby') ;

function printGoals(...playerNames) {
  let playerGoals = {};

  for (let player of game.scored) {
    if (playerNames.includes(player)) {
      if (playerGoals[player]) {
        playerGoals[player]++;
      } else {
        playerGoals[player] = 1;
      }
    }
  }

  for (let player in playerGoals) {
    console.log(`${player} gave ${playerGoals[player]} goals`);
  }
  //   console.log(playerGoals);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich', 'Gnarby');

printGoals(...game.scored);

teamOneOdds < teamTwoOdds && console.log('team one has higher odds to win');
teamTwoOdds < teamOneOdds && console.log('team two has higer odds to win');

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/


for (let [index, playerName] of game.scored.entries()) {
  index++;
  console.log(`${playerName} goal ${index}`);
}

let avrage = 0;
for (let odd of Object.values(game.odds)) {
  avrage += odd;
}

avrage = avrage / Object.values(game.odds).length;
console.log(avrage);
//..................................

// for (let odd of Object.values(game.odds)) {
//   console.log(`Odd of victory : ${odd}`);
// }

// for (let teamName of Object.keys(game.odds)) {
//   // console.log(game.teamName);
//   console.log((game[teamName] ??= 'Draw'));
// }

let teamNameArr = [];
for (let teamName of Object.keys(game.odds)) {
  teamNameArr.push(teamName);
}

console.log(teamNameArr);

let oddsArray = [];
for (let odd of Object.values(game.odds)) {
  oddsArray.push(odd);
}

console.log(oddsArray);

// for (let odd of Object.values(game.odds)) {
//   console.log(`Odd of victory : ${odd}`);
// }

for (let i = 0; i < Object.values(game.odds).length; i++) {
  if (game[teamNameArr[i]] === undefined) {
    console.log(`Odd of draw: ${oddsArray[i]}`);
  } else {
    console.log(`Odd of victory ${game[teamNameArr[i]]}: ${oddsArray[i]}`);
  }
}

//.....................

for (let [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//...............................
// game.scored = [...game.scored, 'jos neko'];
// console.log(game.scored);

// console.log({...game.odds, ds: 'das'})

//..........................

// game.scoredObject = {};

// for (let i = 0; i < game.scored.length; i++) {
//   game.scoredObject[game.scored[i]] = '';
// }

// console.log(game.scoredObject, ' ..............');

//..........................

// function howManyGoals(arr) {
//   let playersWhoScored = {};

//   for (let i = 0; i < arr.length; i++) {

//     playersWhoScored[arr[i]] = '';

//   }

//   console.log(playersWhoScored);
// }

function howManyGoals(arr) {
  let playersWhoScoredObject = {};
  let playersWhoScoredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!playersWhoScoredArr.includes(arr[i])) {
      playersWhoScoredArr.push(arr[i]);
      playersWhoScoredObject[arr[i]] = 1;
    } else {
      playersWhoScoredObject[arr[i]]++;
    }
  }

  console.log(playersWhoScoredObject);
  // console.log(playersWhoScoredArr);
}

howManyGoals(game.scored);

//....................................

const scorers = {};

game.scored.forEach((player) => {
  if (scorers[player]) {
    scorers[player] += 1;
  } else {
    scorers[player] = 1;
  }
});

console.log(scorers);

game.scorers = scorers;
console.log(game);

//.........................................

const scorers2 = {};
for (const player of game.scored) {
  scorers2[player] ? scorers2[player]++ : (scorers[player] = 1);
}

console.log(scorers2);

//....................................................

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// console.log(gameEvents.values());
// let events = new Set(gameEvents.values())
let events = [...new Set(gameEvents.values())]
console.log(events);

gameEvents.delete(64);

console.log(`An event happend on avrage every ${90 / gameEvents.size} minutes`);

// let time = [...gameEvents.keys()].pop();
// console.log(time);

for(let [keys, values] of gameEvents) {
  let half = keys <= 45 ? 'First' : 'Second ';
  console.log(`[${half } half] ${keys} : ${values}`);
}

