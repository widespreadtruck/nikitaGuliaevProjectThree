$(function() {
    //array with client names
    const weekClientList = {
        Monday: {
            nineToTenAmClass: [],
            sixToSevenPmClass: []
        }
    };

    //"ADD CLIENT" button selector
    const addClientButton = $(".addClientButton");
    
    // "Time Slot" button selector 
    const timeSlotButtons = $(".timeSlotButtons");

    //day of the week that shows up in Client List box
    const selectSpanForDay = $(".dayOfTheClassOnClientList");

    //time of the class that shows up in Client List box
    const selectSpanForTime = $(".classTimeSlot");




    timeSlotButtons.on("click", function(){
        //highlights a time slot button when clicked
        $(this).toggleClass("selectedButtonChangesColor");
        //highlight the client list container when a time slot button is selected

        //When a time slot is selected, travel up the DOM until find the closest class="dayContainer", then traverse down until find the closest class="dayContainerHeaderBoxParagraphs" and copy the text - Day of the week.
        const grabsTheClosestDayValue = $(this).closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
        //When a time slot is selected, copy the time period written on the Time Slot button
        const timeOfClass = $(this).text();

        //when the Time Slot button is selected and changes color, highlight the Client List container and populate "Time" & "Class" fields in the header
        const timeSlotButtonsBackgroundColor = $(this).css("background-color");
        if (timeSlotButtonsBackgroundColor === "rgb(209, 119, 5)"){
            $(".clientListContainer").css("background-color", "rgba(209, 119, 5, 0.2)");
            //insert the Day and Time values in the Header of the client list container
            
            
            
            
        //need to check if working. Text() was copying the display hidden text.
        //see if html() is respecting css properties
        //replaced text() with html()
            selectSpanForDay.html(grabsTheClosestDayValue).css("color", "rebeccapurple");
            selectSpanForTime.html(timeOfClass).css("color", "rebeccapurple");








            addClientButton.attr("disabled", false);
        } else {
            $(".clientListContainer").css("background-color", "transparent");
            $(".dayOfTheClassOnClientList").empty();
            $(".classTimeSlot").empty();  
            addClientButton.attr("disabled", true);
        };

        //removes the highlighting of all other TimeSlot buttons  when one is highlighted
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");
    });








    const askForClientName = function () {
        return prompt("Type in client's name");
    }

    //when "ADD CLIENT" button is clicked ask for a prompt and add the entered value to an array, as well as display this name in the Client List box
    addClientButton.on("click", function(event){
        //preventing default
        event.preventDefault();

        //grab name from prompt
        const grabbedClientName = askForClientName();

        const dayForTheArrayNavigation = $(selectSpanForDay).text();
        console.log(dayForTheArrayNavigation); //Monday






        //find the highlighted button and traverse down to find the hidden span with class time for the array and copy it
        //need to check if working

        const timeForTheArrayNavigation = $(".selectedButtonChangesColor").find(".hiddenClassForArray").text();
        console.log(timeForTheArrayNavigation);








        //add grabbed name to an array
        weekClientList[dayForTheArrayNavigation].nineToTenAmClass.push(grabbedClientName);
        
        //print the last name added to an array inside of the ClientList box
        $(".namesAddedToTimeSlotSoFar").append(`<li>${weekClientList[dayForTheArrayNavigation].nineToTenAmClass[weekClientList[dayForTheArrayNavigation].nineToTenAmClass.length - 1]}</li>`);

        console.log(weekClientList.Monday);

        //6 ppl is the max, so when the array's length reaches 6, the TimeSlot turns red.
        if (weekClientList.Monday.nineToTenAmClass.length === 6) {
            alert("Class is full. Congratulations!");
        }
    })

//copy IMPORTANT!!!!!!!!!!!!!!!!!
    // $(".namesAddedToTimeSlotSoFar").append(`<li>${weekClientList.Monday.nineToTenAmClass[weekClientList.Monday.nineToTenAmClass.length - 1]}</li>`);
//copy IMPORTANT!!!!!!!!!!!!!!!!!







    //create a box that represents one day of a calendar (e.g. "Monday") using css. 
    //Let's say "Monday" has 2 classes available for booking - they look like 2 green buttons that say how many people already signed up for that class e.g. "2/6" -means two people signed up. 6 ppl per class maximum.

    //when the user taps on a green button - an empty box below is being populated with the following: 1)Date and time of the class 2)List of people (gets extracted from an array) who signed up for a class
    //when user taps on the "ADD NAME" button a prompt pops up asking for "Client's name"
    //name is added to the array (using .push()) which holds up to 6 people
    //when the class is full (6 names on the list) the green button becomes red (use condition statements) and a "sold out" sign appears on the button, which becomes inactive. 
    //when the length of the array is = 6, a new class is added to the button that represents a time slot

});
