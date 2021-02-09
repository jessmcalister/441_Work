function getYN(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Sabrina is asked to go on a date with Tyler to a hockey game or with Henry to a symphony concert. Which does she choose?";
        document.getElementById("choice1").innerHTML = "Hockey game";
        document.getElementById("choice2").innerHTML = "Symphony concert";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Sabrina starts to feel like she might enjoy the hockey game. Does she cancel on Henry and go with Tyler?";
        document.getElementById("choice1").innerHTML = "Cancel and go with Tyler";
        document.getElementById("choice2").innerHTML = "Stay with Henry";
    } else if (choice == 1 && answer1 == "Hockey game") {
        document.getElementById("story").innerHTML = "Tyler asks if he can walk her home after the game. She senses he might want to ask her a question at the end of the night.";
        document.getElementById("choice1").innerHTML = "Say yes.";
        document.getElementById("choice2").innerHTML = "Say you like walking alone.";
    } else if (choice == 2 && answer2 == "Symphony concert") {
        document.getElementById("story").innerHTML = "Henry tells Sabrina she looks beautiful and holds out his hand.";
        document.getElementById("choice1").innerHTML = "Take his hand.";
        document.getElementById("choice2").innerHTML = "Act like you need something out of your purse.";
    } else if (choice == 1 && answer1 == "Cancel and go with Tyler") {
        document.getElementById("story").innerHTML = "Henry asks why you canceled. Should you tell him?";
        document.getElementById("choice1").innerHTML = "Yes, honesty is the best policy.";
        document.getElementById("choice2").innerHTML = "No, he'll want to end things.";
    } else if (choice == 2 && answer2 == "Stay with Henry") {
        document.getElementById("story").innerHTML = "Tyler asks to come over later that night. Do you let him?";
        document.getElementById("choice1").innerHTML = "No, Henry might want to come over.";
        document.getElementById("choice2").innerHTML = "Yes, you get to hangout with two crushes in one night.";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Hockey game") {
        document.getElementById("story").innerHTML = "Tyler asks you to be his girlfriend. Do you say yes?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Say you like walking alone") {
        document.getElementById("story").innerHTML = "Tyler is hurt and wants to end things." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Take his hand") {
        document.getElementById("story").innerHTML = "Henry asks you to be his girlfrined. Do you say yes?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Act like you need something from your purse.") {
        document.getElementById("story").innerHTML = "Henry is hurt and wants to stop seeing you." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes, honesty is the best policy.") {
        document.getElementById("story").innerHTML = "Henry is hurt and wants to end things." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No, he'll want to end things") {
        document.getElementById("story").innerHTML = "Henry is confused and ends things." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "No, Henry might want to come over.") {
        document.getElementById("story").innerHTML = "Henry asks you to be his girlfriend." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Yes, you get to hangout with two crushes in one night.") {
        document.getElementById("story").innerHTML = "Henry comes over and sees Tyler. He breaks things off." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Sabrina hasn't found love yet. Are you willing to help her?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Maybe one day she'll find love!";

    }


}
