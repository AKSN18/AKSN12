var myStr = "I am a \"double quoted\" string inside \"double quotes\"" ;
console.log(myStr)

//-----------------------------------------------

//Sentence
var myStr = "This is First Sentence. "
myStr += "This is Second Sentence."

console.log(myStr);

//-----------------------------------------------

//Sentence(Ultimate)
/* Example */
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

/* Setup */
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength)

//-----------------------------------------------

//Sentence(Ultimate+)
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0]

/* Setup */
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)

//-----------------------------------------------

//Sentence(Ultimate++)
var secondLetterOfFirstName = "";
var firstName = "Ada";

secondLetterOfFirstName = firstName[1]

/* Setup */
var thirdLetterOfLastName = "";
var lastName = "Lovelace";

thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName)

//-----------------------------------------------

//Sentence(Ultimate+last_Letter)
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];


/* Setup */
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName)