$(function() {
    const mondayClientList = {
        nineToTenAmClass: [],
        sixToSevenPmClass: []
    }
    // console.log(mondayClientList);


    //highlighting selected buttons
    const timeSlotButtons = $(".timeSlotButtons");

    timeSlotButtons.on("click", function(){
        //highlights a button when clicked
        $(this).toggleClass("selectedButtonChangesColor");

        //



        //on second click removes the highlighting
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");
    });

    //when TimeSlotButtons is clicked, 






    const askForClientName = function() {
        return prompt("Type in client's name");
    }

    $(".addClientButton").on("click", function(event){
        //preventing default
        event.preventDefault();

        //grab name from prompt
        const grabbedClientName = askForClientName();

        //add grabbed name to an array
        mondayClientList.nineToTenAmClass.push(grabbedClientName);
        
        //print the last name added to an array inside of the ClientList box
        $(".namesAddedToTimeSlotSoFar").append(`<li>${mondayClientList.nineToTenAmClass[mondayClientList.nineToTenAmClass.length - 1]}</li>`);

        //6 ppl is the max, so when the array's length reaches 6, the TimeSlot turns red.
        if (mondayClientList.nineToTenAmClass.length === 6) {

        }


        

        

        

    })



    //create a box that represents one day of a calendar (e.g. "Monday") using css. 
    //Let's say "Monday" has 2 classes available for booking - they look like 2 green buttons that say how many people already signed up for that class e.g. "2/6" -means two people signed up. 6 ppl per class maximum.

    //when the user taps on a green button - an empty box below is being populated with the following: 1)Date and time of the class 2)List of people (gets extracted from an array) who signed up for a class
    //when user taps on the "ADD NAME" button a prompt pops up asking for "Client's name"
    //name is added to the array (using .push()) which holds up to 6 people
    //when the class is full (6 names on the list) the green button becomes red (use condition statements) and a "sold out" sign appears on the button, which becomes inactive. 
    //when the length of the array is = 6, a new class is added to the button that represents a time slot

});
