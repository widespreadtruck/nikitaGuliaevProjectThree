$(function() {

    //array with client names
    const weekClientList = {
        Monday: {
            nineToTenAmClass: [],
            sixToSevenPmClass: []
        },
        Tuesday: {
            nineToTenAmClass: [],
            sixToSevenPmClass: []           
        }
    };

    // "Time Slot" button selector 
    const timeSlotButtons = $(".timeSlotButtons");

    //"ADD CLIENT" button selector
    const addClientButton = $(".addClientButton");
    
    //"Day:" selector in Client List box
    const selectSpanForDay = $(".dayOfTheClassOnClientList");

    //"Class:" selector in Client List box
    const selectSpanForTime = $(".classTimeSlot");

    //body of the Client LIst container where names are printed
    const placeForTheListOfClients = $(".namesAddedToTimeSlotSoFar");

    const buttons = $('.additonalClassForClosestMethod');

    //when a green button is selected (tapped on) do the following:
    //highlight the section down below 
    //names are added to this section by clicking on ADD CLIENT button
    //6 names maximum
    //add SOLD OUT sign when the class is full and it says 6/6 on the right side of the buttons
    timeSlotButtons.on("click", function(){
        //highlight the TimeSlot button when selected (tapped on)
        $(this).toggleClass("selectedButtonChangesColor");
        
        //removes the highlighting of all other TimeSlot buttons
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");
        
        //if toggled class exists in the DOM do the following:
        const toggledObject = $(".selectedButtonChangesColor");
        if (toggledObject.length === 1) {
            //find and save a text node representing the DAY:
            const dayForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text(); //e.g. Monday

            //find and save a text node representing the TIME:
            const timeForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenClassForArray").text(); //e.g. nineToTenAmClass

            //find and save a text node representing the text written on the selected button:
            const timeOnTheTimeSlotButton = $(".selectedButtonChangesColor").closest(".timeSlotButtons").find(".times").text(); //e.g. 9am-10am
    
            //array path to the list of client names
            const arrayPathThreeLevelsDeep = weekClientList[dayForTheArrayNavigation][timeForTheArrayNavigation];

            //when a button is selected - highlight the other section
            $(".clientListContainer").css("background-color", "rgba(209, 119, 5, 0.1)");

            //populate the header with the Day and Time of the selected class
            selectSpanForDay.text(dayForTheArrayNavigation).css("color", "blue");
            selectSpanForTime.text(timeOnTheTimeSlotButton).css("color", "blue");

            console.log(arrayPathThreeLevelsDeep.length);
            //activate the ADD CLIENT button
            if (arrayPathThreeLevelsDeep.length <= 5) {
                addClientButton.attr("disabled", false);
            } else if (arrayPathThreeLevelsDeep.length >= 6){
                addClientButton.attr("disabled", true);
            };

            //populate the DAY/CLASS section with the list of names when one of the TimeSlot buttons is selected
            placeForTheListOfClients.empty();
            for (let i = 0; i < arrayPathThreeLevelsDeep.length; i++) {
                placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[i]}</li>`);
            };

            //ADD CLIENT button shows a prompt that grabs a string of text(client name) and
            //adds that name to the client list section of the app
            addClientButton.off().on("click", function (event) {
                event.preventDefault();

                //show a prompt when the button is clicked
                //grab a string of text from prompt
                //if string is empty show an alert
                //if there is at least one symbol - add that text string to the appropriate array
                promptLogic(arrayPathThreeLevelsDeep);
                
                //show how many people are signed up for a particular class e.g. 2/6
                //display that in the appropriate button on the right side
                spotCounter(arrayPathThreeLevelsDeep);
                
                //add a name at the bottom of the name list in the DAY/CLASS section every time a new name is added via prompt
                addName(arrayPathThreeLevelsDeep);
                
                //show a message when 6 names are added to an array
                classFullMessage(arrayPathThreeLevelsDeep);
            });
        } else {
            //removes all styles and populated fields from the Client List Box
            removeStyles();
        };
    });

    //handles the logic from the point when the ADD CLIENT button is clicked
    //till when the name is added to the array
    const promptLogic = function (array) {
        //show a prompt when the ADD CLIENT button is clicked
        let askForClientName = function () {
            return prompt("Type in client's name");
        };
        //grab a string of text from prompt
        const grabbedClientName = askForClientName();
        //if string is empty show an alert
        if (grabbedClientName.trim().length === 0) {
            // updates the variable holding a string of text and prevents from adding the name entered in the previous prompt
            alert("Hey! Stop it, Safi! Type at least something!");
            grabbedClientName = null;
        } else if (grabbedClientName.trim().length > 0){
            //if there is at least one symbol - add that text string to the appropriate array
            array.push(grabbedClientName);
        };
    };

    //show how many people are signed up for a particular class e.g. 2/6
    //display that in the appropriate button on the right side
    const spotCounter = function(array) {
        if (array.length < 7) {
            $(".selectedButtonChangesColor").closest(".timeSlotButtons").find(".counters").text(`${array.length}/6`);
        };
    };

    //add a name at the bottom of the name list in the DAY/CLASS section every time a new name is added via prompt
    const addName = function(array) {
        const arrayLength = array.length - 1;
        if (arrayLength < 6) {
            placeForTheListOfClients.append(`<li>${array[arrayLength]}</li>`);
        };
    };

    //shows a message when 6 names are added to an array
    const classFullMessage = function(array) {
        if (array.length >= 6) {
            // when the class is full (6ppl max) show a message "Class is full" 
            //and show the SOLD sign
            alert("Class is full. Congratulations!");
            $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenSOLDSign").css("opacity", "1");
            addClientButton.attr("disabled", true);
        };
    };

    //removes all styles and populated fields from the Client List Box
    const removeStyles = function() {
        $(".clientListContainer").css("background-color", "transparent");
        selectSpanForDay.empty();
        selectSpanForTime.empty();
        addClientButton.attr("disabled", true);
        placeForTheListOfClients.empty();
    };
});