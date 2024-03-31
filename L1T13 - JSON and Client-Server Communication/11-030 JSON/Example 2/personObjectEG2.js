/* In this example we will allow the user to provide information that we will use to create
various Person objects using a contructor function. We will then display the information about
each person object that the user has added to our page. */

//Create an empty array that we will use to store all the Person objects created.
let pers = [];

/* When the page loads, we check to see whether it is the first time we are loading this page 
or not. If it is the first time we are loading the page, we initialise the values we want to 
store in sessionStorage. If it is not the first time we are loading the page, then we can 
assume that we already have some information about person objects stored in SessionStorage. 
We use this information in sessionStorage to add information about each person object we have 
created to our HTML page. */

function myLoad() {
    
    let htmlSelect = document.getElementById("personList");
    htmlSelect.style.visibility = "hidden";

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
       // let arrayOfPersonObjects = [];
        sessionStorage.setItem("persons", JSON.stringify(pers));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        //Get the array of person objects from sessionStorage and assign it to the array 'pers'
        pers = JSON.parse(sessionStorage.getItem("persons")); 
        
        let i = 0;
        
        //Loop through each person (p) in the pers array
        /*For each person in the array create an option element that displays 
        that person's name and add it to the select (dropdown) element on the HTML page */
        
        pers.forEach(function(p) {
            let optItem = document.createElement("option");
            optItem.innerHTML = p.name.first;
            optItem.value = i;
            i = i + 1;
            htmlSelect.appendChild(optItem);
        });
        
        //Only make the select element visible once there is at least one person object added that the user can select.
        if (i > 0) {
            htmlSelect.style.visibility = "visible";
        }
    }
}

//Below we create the constructor function that will be used to create all Person objects.
function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

/* The function below will be called every time the user clicks on the button to add a person on the 
HTML page. Each time this happens we will retrieve the data about the person from the form on the HTML page
that the user has comnpleted. We call the Person constructor function and pass through all this data as
arguments to create a new Person object. We then add the object to the array of people objects using the push method
(pers.push). Because we want this information to be available accross page loads, we add the updated array of people to sessionStorage. */

function addPerson() {
    
    pers = JSON.parse(sessionStorage.getItem("persons"));
    let newPerson = new Person(
        document.getElementById("fName").value,
        document.getElementById("lName").value,
        document.getElementById("age").value,
        document.getElementById("gender").value,
        document.getElementById("interests").value
    );
    pers.push(newPerson);
    sessionStorage.setItem("persons", JSON.stringify(pers));
}

/* When the user chooses a different person from the select (dropdown) element on the HTML page,
the function below will be called. 

This function adds a function called bio() to the person object that 
the user has selected and then calls that method to execute it. 

We know which person object the user has selected because the index of the array where the person object is stored is passed through to this function.
Have a look at the HTML page to see how this information is passed through to this method. "ChangeActiveUser(this.value)" is 
used. 'this.value' refers to the value of the currently selected option element. Now notice in the function
myLoad() (above) that 'i', which is the index of the object element in the pers array, is assigned to each option element that 
we created when we added each option element to the select element as the page loaded. */

function ChangeActiveUser(indexOfPersonObj) {
    
    pers[indexOfPersonObj].bio = function() {
        alert(
            this.name.first +
                " " +
                this.name.last +
                " is " +
                this.age +
                " years old. " +
                this.name.first +
                " likes " +
                this.interests +
                "."
        );
    };
    pers[indexOfPersonObj].bio();
}