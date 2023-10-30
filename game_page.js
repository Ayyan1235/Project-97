function load(){
    document.getElementById("player1_name").innerHTML = localStorage.getItem("player1_name")+" : 0";
    document.getElementById("player2_name").innerHTML = localStorage.getItem("player2_name")+" : 0";

    document.getElementById("player_question").innerHTML = "Question Turn:  " +localStorage.getItem("player1_name");
    document.getElementById("player_answer").innerHTML = "Answer Turn:  " +localStorage.getItem("player2_name");
}

