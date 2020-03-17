$(function() {
    //array with client names
    const weekClientList = {
        Monday: {
            nineToTenAmClass: [],
            sixToSevenPmClass: []
        }
    };


    //when TimeSlotButtons is clicked, 
    //highlight selected buttons and the client list box
    const timeSlotButtons = $(".timeSlotButtons");

    // const dayOfTheClass = function() {
    //     for (let item in weekClientList){
    //         console.log(item);
    //         if (item == ){
                    //ConditionRule;
    //         }
    //     }
    // };

    // $(".dayContainerHeaderBoxParagraphs").text();

    timeSlotButtons.on("click", function(){
        //highlights a time slot button when clicked
        $(this).toggleClass("selectedButtonChangesColor");
        //highlight the client list container when a time slot button is selected
        $(".clientListContainer").toggleClass("thisClassWillBeToggledToHighlightClientListBox");
        //When a time slot is selected, travel up the DOM until find the closest class="dayContainer", then traverse down until find the closest class="dayContainerHeaderBoxParagraphs" and copy the text - Day of the week.
        const grabsTheClosestDayValue = $(this).closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
        //copy the time period from the button
        const timeOfClass = $(this).text();
        console.log(grabsTheClosestDayValue);
        console.log(timeOfClass);
        //insert the Day and Time values in the Header of the client list container
        $(".dayOfTheClassOnClientList").text(grabsTheClosestDayValue).css("color", "rebeccapurple");
        $(".classTimeSlot").text(timeOfClass).css("color", "rebeccapurple");

        


        //on second click removes the highlighting of the selected TimeSlot button & the client list container
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");
        // .removeClass("thisClassWillBeDisplayedInTheHeaderOfClientListBox");
    });







    const askForClientName = function() {
        return prompt("Type in client's name");
    }

    $(".addClientButton").on("click", function(event){
        //preventing default
        event.preventDefault();

        //grab name from prompt
        const grabbedClientName = askForClientName();

        //add grabbed name to an array
        weekClientList.monday.nineToTenAmClass.push(grabbedClientName);
        
        //print the last name added to an array inside of the ClientList box
        $(".namesAddedToTimeSlotSoFar").append(`<li>${weekClientList.monday.nineToTenAmClass[weekClientList.monday.nineToTenAmClass.length - 1]}</li>`);

        //6 ppl is the max, so when the array's length reaches 6, the TimeSlot turns red.
        if (weekClientList.monday.nineToTenAmClass.length === 6) {
            alert("Class is full. Congratulations!");
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
