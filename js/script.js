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

    //"Day:" selector in Client List box
    const selectSpanForDay = $(".dayOfTheClassOnClientList");

    //"Class:" selector in Client List box
    const selectSpanForTime = $(".classTimeSlot");

    //body of the Client LIst container where names are printed
    const placeForTheListOfClients = $(".namesAddedToTimeSlotSoFar");




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
            selectSpanForDay.text(grabsTheClosestDayValue).css("color", "rebeccapurple");
            selectSpanForTime.text(timeOfClass).css("color", "rebeccapurple");








            addClientButton.attr("disabled", false);
        } else {
            $(".clientListContainer").css("background-color", "transparent");
            $(".dayOfTheClassOnClientList").empty();
            $(".classTimeSlot").empty();  
            addClientButton.attr("disabled", true);
        };

        //removes the highlighting of all other TimeSlot buttons  when one is highlighted
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");

        placeForTheListOfClients.empty();

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

        const dayForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
        // console.log(dayForTheArrayNavigation); //Monday






        //find the highlighted button and traverse down to find the hidden span with class time for the array and copy it
        //need to check if working

        const timeForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenClassForArray").text();
        // console.log(timeForTheArrayNavigation); //nineToTenAmClass










        //add grabbed name to an array
        const arrayPathThreeLevelsDeep = weekClientList[dayForTheArrayNavigation][timeForTheArrayNavigation];

        arrayPathThreeLevelsDeep.push(grabbedClientName);
        console.log(arrayPathThreeLevelsDeep);
        

        

        //show list ONLY when Day: & Time: are showing


        const timeOnTheTimeSlotButton = $(".selectedButtonChangesColor").closest(".timeSlotButtons").text();
        console.log(timeOnTheTimeSlotButton);


        placeForTheListOfClients.empty();

        if (dayForTheArrayNavigation == selectSpanForDay.text() && timeOnTheTimeSlotButton == selectSpanForTime.text()) {
            for (let i = 0; i < arrayPathThreeLevelsDeep.length; i++) {
                placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[i]}</li>`);
            }
        } else {
            placeForTheListOfClients.empty();
        }

        // console.log(arrayPathThreeLevelsDeep.length);
        if (arrayPathThreeLevelsDeep.length === 6) {
            alert("Class is full. Congratulations!");
        }
    })




});
