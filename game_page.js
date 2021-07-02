player_1 = localStorage.getItem("player1");
player_2 = localStorage.getItem("player2");

players1 = 0 ;
players2 = 0 ;

document.getElementById("p1").innerHTML = player_1 + ":" ;
document.getElementById("p2").innerHTML = player_2 + ":" ;

document.getElementById("score1").innerHTML= players1 ;
document.getElementById("score2").innerHTML= players2 ;

document.getElementById("question").innerHTML= "Question =" + player_1 ;
document.getElementById("answer").innerHTML= "Answer  =" + player_2 ;

function send()  {
 number_1 = document.getElementById("number1").value;
 number_2 = document.getElementById("number2").value;
 actual_answer = parseInt(number_1) * parseInt(number_2) ;

 que_no = "<h4>" + number_1 + "X" + number_2 + "</h4>" ;
 inputbox = "<br>Answer : <input type = 'text' id = 'in_ch_bx'> "
 check_button = "<br><br><button class='btn-btn-info' onclick='click()'>Check</button";
 row =  que_no + inputbox + check_button ;
document.getElementById("output").innerHTML = row ;
document.getElementById(number_1).value = "" ;
document.getElementById(number_2).value = "" ;
}