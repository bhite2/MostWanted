/*
    Author: devCodeCamp
    Description: Most Wanted Starter Code
*/
//////////////////////////////////////////* Beginning Of Starter Code *//////////////////////////////////////////

"use strict";
//? Utilize the hotkey to hide block level comment documentation
////* Mac: Press "CMD"+"K" and then "CMD"+"/"
////* PC: Press "CTRL"+"K" and then "CTRL"+"/"

/**
 * This is the main logic function being called in index.html.
 * It operates as the entry point for our entire application and allows
 * our user to decide whether to search by name or by traits.
 * @param {Array} people        A collection of person objects.
 */
function app(people) {
    // promptFor() is a custom function defined below that helps us prompt and validate input more easily
    // Note that we are chaining the .toLowerCase() immediately after the promptFor returns its value
    let searchType = promptFor(
        "Do you know the name of the person you are looking for? Enter 'yes' or 'no'",
        yesNo
    ).toLowerCase();
    let searchResults;
    // Routes our application based on the user's input
    switch (searchType) {
        case "yes":
            searchResults = searchByName(people);
            break;
        case "no":
            //! TODO #4: Declare a searchByTraits (multiple traits) function //////////////////////////////////////////
                //! TODO #4a: Provide option to search for single or multiple //////////////////////////////////////////
            searchResults = searchByTraits(people);
            break;
        default:
            // Re-initializes the app() if neither case was hit above. This is an instance of recursion.
            app(people);
            break;
    }
    // Calls the mainMenu() only AFTER we find the SINGLE PERSON
    mainMenu(searchResults, people);
}
// End of app()

/**
 * After finding a single person, we pass in the entire person-object that we found,
 * as well as the entire original dataset of people. We need people in order to find
 * descendants and other information that the user may want.
 * @param {Object[]} person     A singular object inside of an array.
 * @param {Array} people        A collection of person objects.
 * @returns {String}            The valid string input retrieved from the user.
 */
function mainMenu(person, people) {
    // A check to verify a person was found via searchByName() or searchByTrait()
    if (!person[0]) {
        alert("Could not find that individual.");
        // Restarts app() from the very beginning
        return app(people);
    }
    let displayOption = prompt(
        `Found ${person[0].firstName} ${person[0].lastName}. Do you want to know their 'info', 'family', or 'descendants'?\nType the option you want or type 'restart' or 'quit'.`
    );
    // Routes our application based on the user's input
    switch (displayOption) {
        case "info":
            //! TODO #1: Utilize the displayPerson function //////////////////////////////////////////
            // HINT: Look for a person-object stringifier utility function to help
            let personInfo = displayPerson(person[0]);
            alert(personInfo);
            break;
        case "family":
            //! TODO #2: Declare a findPersonFamily function //////////////////////////////////////////
            // HINT: Look for a people-collection stringifier utility function to help
            let personFamily = findPersonFamily(person[0], people);
            alert(personFamily);
            break;
        case "descendants":
            //! TODO #3: Declare a findPersonDescendants function //////////////////////////////////////////
            // HINT: Review recursion lecture + demo for bonus user story
            let personDescendants = findPersonDescendants(person[0], people);
            alert(personDescendants);
            break;
        case "restart":
            // Restart app() from the very beginning
            app(people);
            break;
        case "quit":
            // Stop application execution
            return;
        default:
            // Prompt user again. Another instance of recursion
            return mainMenu(person, people);
    }
}
// End of mainMenu()

/**
 * This function is used when searching the people collection by
 * a person-object's firstName and lastName properties.
 * @param {Array} people        A collection of person objects.
 * @returns {Array}             An array containing the person-object (or empty array if no match)
 */
function searchByName(people) {
    let firstName = promptFor("What is the person's first name?", chars);
    let lastName = promptFor("What is the person's last name?", chars);

    // The foundPerson value will be of type Array. Recall that .filter() ALWAYS returns an array.
    let foundPerson = people.filter(function (person) {
        if (person.firstName === firstName && person.lastName === lastName) {
            return true;
        }
    });
    return foundPerson;
}
// End of searchByName()

/**
 * This function will be useful for STRINGIFYING a collection of person-objects
 * first and last name properties in order to easily send the information
 * to the user in the form of an alert().
 * @param {Array} people        A collection of person objects.
 */
function displayPeople(people) {
    alert(
        people
            .map(function (person) {
                return `${person.firstName} ${person.lastName}`;
            })
            .join("\n")
    );
}
// End of displayPeople()

/**
 * This function will be useful for STRINGIFYING a person-object's properties
 * in order to easily send the information to the user in the form of an alert().
 * @param {Object} person       A singular object.
 */
function displayPerson(person) {
    let personInfo = `First Name: ${person.firstName}\n`;
    personInfo += `Last Name: ${person.lastName}\n`;
    personInfo += `Gender: ${person.gender}\n`;
    personInfo += `DOB: ${person.dob}\n`;
    personInfo += `Height: ${person.height}\n`;
    personInfo += `Weight: ${person.weight}\n`;
    personInfo += `Eye Color: ${person.eyeColor}\n`;
    personInfo += `Occupation: ${person.occupation}\n`;
    //! TODO #1a: finish getting the rest of the information to display //////////////////////////////////////////
    return personInfo;
}
// End of displayPerson()

/**
 * This function's purpose is twofold:
 * First, to generate a prompt with the value passed in to the question parameter.
 * Second, to ensure the user input response has been validated.
 * @param {String} question     A string that will be passed into prompt().
 * @param {Function} valid      A callback function used to validate basic user input.
 * @returns {String}            The valid string input retrieved from the user.
 */
function promptFor(question, valid) {
    do {
        var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
}
// End of promptFor()

/**
 * This helper function checks to see if the value passed into input is a "yes" or "no."
 * @param {String} input        A string that will be normalized via .toLowerCase().
 * @returns {Boolean}           The result of our condition evaluation.
 */
function yesNo(input) {
    return input.toLowerCase() === "yes" || input.toLowerCase() === "no";
}
// End of yesNo()

/**
 * This helper function operates as a default callback for promptFor's validation.
 * Feel free to modify this to suit your needs.
 * @param {String} input        A string.
 * @returns {Boolean}           Default validation -- no logic yet.
 */
function chars(input) {
    return true; // Default validation only
}
// End of chars()

//////////////////////////////////////////* End Of Starter Code *//////////////////////////////////////////
// Any additional functions can be written below this line ????. Happy Coding! ????

function foundSpouse(person, people){
    let spouse = people.filter(function(people){
        if (person.currentSpouse === el.id){
            return true;
        }
    })
    return spouse;
}
   

function foundParents(person, people){
    let parents = people.filter(function(el) {
        if(person.parents.includes(el.id)) {
          return true;
        } 
      })
      return parents;
}


function foundSiblings(person, people){
    let siblings = people.filter(function(el) {
        for(let i = 0; i < person.parents.length; i++) {
          if(el.parents.includes(person.parents[i]) && el.id != person.id){
            return true;
          }
        }
      })
      return siblings;
    }

function findPersonFamily(person, people) {
    let findSpouse = foundSpouse(person, people);
    let personFamily = `Spouse: ${findSpouse[0].firstName} ${findSpouse[0].lastName}\n`;
    let findParents = foundParents(person, people);
    for(let i = 0; i < foundParents.length; i++){
        personFamily += `Parent: ${findParents[i].firstName} ${findParents[i].lastName}\n`;
    }
    if (findParents[0]){
        let findSiblings = foundSiblings(person, people);
        for(let i = 0; i < foundSiblings.length; i++){
            personFamily += `Sibling: ${findSiblings[i].firstName} ${findSiblings[i].lastName}\n`;
        }
    }

    return personFamily;
}

function foundDescendants(person, people){
    let children = people.filter(function(people){
        for(let i = 0; i < people.parents.length; i++){
            if(person.id === people.parents[i]){
                return true;
            }
        }
    })
      return children;
}

function findPersonDescendants(person, people){
    let findChildren = foundDescendants(person, people);
    let personDescendants = ""
    for(let i = 0; i < findChildren.length; i++){
        personDescendants += `${findChildren[i].firstName} ${findChildren[i].lastName}\n`;
    }
    return personDescendants;
}


function searchByTraits(people){
    let searchResults = people;
    while(searchResults.length === 0 || searchResults.length > 1){
        let searchTrait = promptFor(
            'What trait do you want to search by: gender, dob, height, weight, eyeColor, occupation or return to main menu', chars);
        switch(searchTrait){
            case 'main menu':
                return app(people);
            case 'gender':
                searchResults = foundGender(searchResults)
                if(searchResults.length != 0){
                    alert(getResults(searchResults))
                    break;
                }
                else;
                return searchByTraits(people);
            case 'dob':
                searchResults = foundDOB(searchResults)
                if(searchResults.length != 0){
                    alert(getResults(searchResults))
                    break;
                }
                else;
                return searchByTraits(people);
            case 'height':
                searchResults = foundHeight(searchResults)
                if(searchResults.length != 0){
                    alert(getResults(searchResults))
                    break;
                }
                else;
                return searchByTraits(people);
            case 'weight':
                searchResults = foundWeight(searchResults)
                if(searchResults.length != 0){
                    alert(getResults(searchResults))
                    break;
                }
                else;   
                return searchByTraits(people);
            case 'eyeColor':
                searchResults = foundEyeColor(searchResults)
                if(searchResults.length != 0){
                    alert(getResults(searchResults))
                    break;
                }
                else;
                return searchByTraits(people);
            case 'occupation':
                searchResults = foundOccupation(searchResults)
                if(searchResults.length != 0){
                    alert(getResults(searchResults))
                    break;
                }
                else;
                return searchByTraits(people);    
            default:
                return app(people);
            
            
            }
        }

        return searchResults;
}

function foundGender(people){
    let searchPrompt = promptFor(
        'Choose male or female:', chars)
    
    let searchResults = people.filter(function(people){
        if(people.gender === searchPrompt){
            return true;
        }
    })
    return searchResults;
}

function foundDOB(people){
    let searchPrompt = promptFor(
        'Enter dob:', chars
    )
    let searchResults = people.filter(function(people){
        if(people.dob === searchPrompt){
            return true;
        }
    })
    return searchResults;
}

function foundHeight(people){
    let searchPrompt = promptFor(
        'Enter height:', chars
    )
    let searchResults = people.filter(function(people){
        if(people.height === searchPrompt){
            return true;
        }
    })
    return searchResults;
}

function foundWeight(people){
    let searchPrompt = promptFor(
        'Enter weight:', chars
    )
    let searchResults = people.filter(function(people){
        if(people.weight === searchPrompt){
            return true;
        }
    })
    return searchResults;
}

function foundEyeColor(people){
    let searchPrompt = promptFor(
        'Choose an eye color :  blue, brown, black, green, hazel', chars
    )
    let searchResults = people.filter(function(people){
        if(people.eyeColor === searchPrompt){
            return true;
        }
    })
    return searchResults;
}

function foundOccupation(people){
    let searchPrompt = promptFor(
        'Enter the occupation you are looking for:', chars
    )
    let searchResults = people.filter(function(people){
        if(people.occupation === searchPrompt){
            return true;
        }
    })
    return searchResults;
}

function getResults(searchResults){
    let display = `Name: ${searchResults[0].firstName} ${searchResults[0].lastName}\n`;
    for(let i = 1;i < searchResults.length;i++){
        display += `Name: ${searchResults[i].firstName} ${searchResults[i].lastName}\n`;

    }
    return display;
}