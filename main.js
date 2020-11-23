function playerTurn() {

	let playerTurn = "player1"
}


function jouer(zone) {
    createCircle(zone);
}

function jouer(zone) {
    createCross(zone);
}

function createCircle(zone) {

    let newCircle = document.createElement('span');
    newCircle.setAttribute("class", "circle");
    document.getElementById(zone).appendChild(newCircle);

}

function createCross(zone) {

    let newCross = document.createElement('span');	
    newCross.setAttribute("class", "cross");
    document.getElementById(zone).appendChild(newCross);

}





if (playerTurn === "player1") {​​

createCircle()

}​​ 

else

 {​​

createCross()

{​​

playerTurn  = playerTurn == "player1" ? "player2" : "player1"

} 