$(function() {
    console.log("hi");
    // const mondayClientList = {
    //     nineToTenAmClass: [],
    //     sixToSevenPmClass: []
    // }

    //highlighting selected buttons
    // const timeSlotButtons = $(".timeSlotButtons");

    $(".timeSlotButtons").on("click", function(){
        //highlights a button when clicked
        $(this).toggleClass("selectedButtonChangesColor");

        //on second click removes the highlighting
        $(".timeSlotButtons").not(this).removeClass("selectedButtonChangesColor");
    });

    // $(".addClientButton").on("click", function(){
    //     const clientNameThatWillBeAddedToArray = prompt("Type in client's name");
    // })



    //create a box that represents one day of a calendar (e.g. "Monday") using css. 
    //Let's say "Monday" has 2 classes available for booking - they look like 2 green buttons that say how many people already signed up for that class e.g. "2/6" -means two people signed up. 6 ppl per class maximum.

    //when the user taps on a green button - an empty box below is being populated with the following: 1)Date and time of the class 2)List of people (gets extracted from an array) who signed up for a class
    //when user taps on the "ADD NAME" button a prompt pops up asking for "Client's name"
    //name is added to the array (using .push()) which holds up to 6 people
    //when the class is full (6 names on the list) the green button becomes red (use condition statements) and a "sold out" sign appears on the button, which becomes inactive. 
    //when the length of the array is = 6, a new class is added to the button that represents a time slot

});
