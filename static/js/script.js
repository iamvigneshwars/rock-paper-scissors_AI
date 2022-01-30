var SCORES = {
    "WIN" : 0,
    "TIE" : 0, 
    "LOSE" : 0 
}

var PLAYER_MOVES = [];
var AI_MOVES = [];

var ROUND = 0;

// Delay inbetween plays
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function decideWinner(player_choice, ai_choice){
    // TIE situation
    if (player_choice == ai_choice) return 0;

    // Player win situations
    if (player_choice == "rock" && ai_choice == "scissor") return 1;
    if (player_choice == "paper" && ai_choice == "rock") return 1;
    if (player_choice == "scissor" && ai_choice == "paper") return 1;

    // Player lose situations

    if (player_choice == "scissor" && ai_choice == "rock") return 2;
    if (player_choice == "rock" && ai_choice == "paper") return 2;
    if (player_choice == "paper" && ai_choice == "scissor") return 2;

}

// main function
function rpsGame(userInput){

    // Choises that the user and AI can make
    var choices = ["scissor", "rock", "paper"];
    // Get the user choice from the button clicked
    var player_choice = document.getElementById(userInput.id).id;

    var decision = ["TIE", "WIN", "LOSE"];
    // Generate a random choice for the AI 
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    var ai_choice = choices[random(0, 3)];


    // Decide the winner based on the choices (0: TIE, 1: WIN, 2: LOSE)
    var winner = decideWinner(player_choice, ai_choice)
    // Increament the score with corresponding result
    SCORES[decision[winner]]++;


    console.log("PLAYER: " , player_choice,"AI: " , ai_choice)
    console.log("Decision: ", decision[winner]);
    console.log("Score: ", SCORES[decision[winner]]);

    // Store player and AI choices
    // if (PLAYER_MOVES.length >= 1){

    //         console.log("Last Move: ", PLAYER_MOVES.slice(-1)[0])
    //     }

    for (let i = 1; i <= PLAYER_MOVES.length && i <= 5; i++){

        // let player_prev_moves = PLAYER_MOVES.slice
        // console.log(PLAYER_MOVES.length - i+1);
        console.log(PLAYER_MOVES[PLAYER_MOVES.length - i])
        document.getElementById("last_" + i).innerHTML = PLAYER_MOVES[PLAYER_MOVES.length -i].toUpperCase() + "  vs  " + AI_MOVES[AI_MOVES.length - i].toUpperCase();
         
        
        

    }


    PLAYER_MOVES.push(player_choice);
    AI_MOVES.push(ai_choice);
   
    // Update Round 
    ROUND++;
    document.getElementById("round").innerHTML = "ROUND " + ROUND;

    // Update Scores
    document.getElementById("player_score").innerHTML = SCORES.WIN;
    document.getElementById("tie").innerHTML = SCORES.TIE;
    document.getElementById("ai_score").innerHTML = SCORES.LOSE;


    // Update Player image
    document.getElementById("user_play").src = "static/images/rest.png"
    sleep(100).then(() => { document.getElementById("user_play").src = "static/images/" + player_choice + ".png"; });

    // Update AI image
    document.getElementById("ai_play").src = "static/images/rest_ai.png";
    sleep(100).then(() => { document.getElementById("ai_play").src = "static/images/" + ai_choice +"_ai" + ".png"; });


}