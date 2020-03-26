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
        //TRY TAKING THE ARRAY INSIDE A FUNCTION/EVENT LISTENER
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








    timeSlotButtons.on("click", function(){
        //highlights a time slot button when clicked
        $(this).toggleClass("selectedButtonChangesColor");
        //removes the highlighting of all other TimeSlot buttons  when one is highlighted
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");

        const toggledObject = $(".selectedButtonChangesColor");
        // console.log(`length of toggled class: ${toggledObject.length}`);

        //if toggled class exists in the DOM do the following:
        if (toggledObject.length === 1) {
            //find and save a text node representing the DAY:
            const dayForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
            // console.log(`dayForTheArrayNavigation: ${dayForTheArrayNavigation}`); //Monday

            //find and save a text node representing the TIME:
            const timeForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenClassForArray").text();
            // console.log(`timeForTheArrayNavigation: ${timeForTheArrayNavigation}`); //nineToTenAmClass

            //find and save a text node representing the text written on the selected button:
            const timeOnTheTimeSlotButton = $(".selectedButtonChangesColor").closest(".timeSlotButtons").find(".times").text();
            // console.log(`timeOnTheTimeSlotButton: ${timeOnTheTimeSlotButton}`); //9am-10am | 0/6
    
    
            const arrayPathThreeLevelsDeep = weekClientList[dayForTheArrayNavigation][timeForTheArrayNavigation];
            // console.log(arrayPathThreeLevelsDeep);

            $(".clientListContainer").css("background-color", "rgba(209, 119, 5, 0.1)");

            selectSpanForDay.text(dayForTheArrayNavigation).css("color", "blue");
            selectSpanForTime.text(timeOnTheTimeSlotButton).css("color", "blue");

            addClientButton.attr("disabled", false);

            
            placeForTheListOfClients.empty();

            for (let i = 0; i < arrayPathThreeLevelsDeep.length; i++) {
                placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[i]}</li>`);
            };


            addClientButton.off().on("click", function (event) {
                //preventing default
                event.preventDefault();

                const askForClientName = function () {
                    return prompt("Type in client's name");
                };

                //grabs name from prompt
                const grabbedClientName = askForClientName();

                if (grabbedClientName.trim().length === 0){
                    return alert("Hey! Stop it, Safi! Type a REAL name!");
                } else {
                    arrayPathThreeLevelsDeep.push(grabbedClientName);
                };


                
                //show how many people are signed up for a particular class
                if (arrayPathThreeLevelsDeep.length < 7) {
                    $(".selectedButtonChangesColor").closest(".timeSlotButtons").find(".counters").text(`${arrayPathThreeLevelsDeep.length}/6`);
                };
                
                const arrayLength = arrayPathThreeLevelsDeep.length - 1;
                if (arrayLength < 6) {
                    placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[arrayLength]}</li>`);
                };
                
                classFullMessage(arrayPathThreeLevelsDeep);
            });
            
        } else {
            removeStyles();
        };
    });
    
    
    
    //shows a message when 6 names are added to an array
    const classFullMessage = function(array) {
        if (array.length === 6) {
            // when the class is full (6ppl max) show a message "Class is full" 
            //and show the SOLD sign
            alert("Class is full. Congratulations!");
            $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenSOLDSign").css("opacity", "1");
            addClientButton.attr("disabled", true);
        };
    }



    //removes all styles and popuated fields from the Client List Box
    const removeStyles = function() {
        $(".clientListContainer").css("background-color", "transparent");
        selectSpanForDay.empty();
        selectSpanForTime.empty();
        addClientButton.attr("disabled", true);
        placeForTheListOfClients.empty();
    }
//end of docready
});