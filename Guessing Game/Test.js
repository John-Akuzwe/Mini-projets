function guess () {
    let chifre = document.getElementById("chiffre").value;
    console.log("Your number was " + chifre);

    const numberToGuess = Math.ceil(Math.random () * 5);
    console.log("The right answer was " + numberToGuess);

    if (chifre == numberToGuess) {
        alert("Congratulations! It was " + numberToGuess + ". Must be some luck. Do it again and I'll give you your five bucks." );

    }else if (chifre > 5 ) {
        alert("Do you know how to read ? I told you it was beetwen 1 and 5!") 

    }else {
        alert("Useless, it was " + numberToGuess + ". Just quit you'll never get it");
    }   
}
