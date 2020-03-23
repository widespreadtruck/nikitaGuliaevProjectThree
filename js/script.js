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

    const askForClientName = function () {
        return prompt("Type in client's name");
    }






    timeSlotButtons.on("click", function(){
        //highlights a time slot button when clicked
        $(this).toggleClass("selectedButtonChangesColor");
        //removes the highlighting of all other TimeSlot buttons  when one is highlighted
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");

        //highlight the client list container when a time slot button is selected

        //When a time slot is selected, travel up the DOM until find the closest class="dayContainer", then traverse down until find the closest class="dayContainerHeaderBoxParagraphs" and copy the text - Day of the week.
        // const grabsTheClosestDayValue = $(this).closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
        const dayForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
        console.log(`dayForTheArrayNavigation: ${dayForTheArrayNavigation}`); //Monday

        //When a time slot is selected, copy the time period written on the Time Slot button
        // const timeOfClass = $(this).text();
        // console.log(`timeOfClass: ${timeOfClass}`); //9am-10am | 0/6
        const timeOnTheTimeSlotButton = $(".selectedButtonChangesColor").closest(".timeSlotButtons").text();
        console.log(`timeOnTheTimeSlotButton: ${timeOnTheTimeSlotButton}`); //9am-10am | 0/6

        const timeForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenClassForArray").text();
        console.log(`timeForTheArrayNavigation: ${timeForTheArrayNavigation}`); //nineToTenAmClass

        const arrayPathThreeLevelsDeep = weekClientList[dayForTheArrayNavigation][timeForTheArrayNavigation];
        console.log(arrayPathThreeLevelsDeep);
        console.log(weekClientList.Monday.nineToTenAmClass);
        console.log(weekClientList.Monday.sixToSevenPmClass);  
        
        if (arrayPathThreeLevelsDeep.length === 6) {
            alert("Class is full. Congratulations!");
        };


        console.log(`color: ${timeSlotButtons.css("background-color")}`);

        //when the Time Slot button is selected and changes color, highlight the Client List container and populate "Time" & "Class" fields in the header
        const timeSlotButtonsBackgroundColor = $(".selectedButtonChangesColor").css("background-color");
        
        if (timeSlotButtonsBackgroundColor === "rgb(209, 119, 5)"){
            $(".clientListContainer").css("background-color", "rgba(209, 119, 5, 0.2)");
            //insert the Day and Time values in the Header of the client list container
            console.log(`timeSlotButtonsBackgroundColor: ${timeSlotButtonsBackgroundColor}`);
            //rgb(209, 119, 5)

            selectSpanForDay.text(dayForTheArrayNavigation).css("color", "rebeccapurple");
            selectSpanForTime.text(timeOnTheTimeSlotButton).css("color", "rebeccapurple");

            addClientButton.attr("disabled", false);

            // placeForTheListOfClients.empty();

            for (let i = 0; i < arrayPathThreeLevelsDeep.length; i++) {
                placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[i]}</li>`);
            };
        } else if (timeSlotButtons.css("background-color") === "rgb(13, 229, 90)"){
            $(".clientListContainer").css("background-color", "transparent");
            selectSpanForDay.empty();
            selectSpanForTime.empty();  
            addClientButton.attr("disabled", true);
            placeForTheListOfClients.empty();
        };

        addClientButton.on("click", function (event) {
            //preventing default
            event.preventDefault();
            //DO I NEED a "PREVENTDEFAULT" HERE?

            //grab name from prompt
            const grabbedClientName = askForClientName();

            arrayPathThreeLevelsDeep.push(grabbedClientName);
            console.log(grabbedClientName);

            // placeForTheListOfClients.empty();
        });



        // placeForTheListOfClients.empty();
    });


});



    // //when "ADD CLIENT" button is clicked ask for a prompt and add the entered value to an array, as well as display this name in the Client List box
    // addClientButton.on("click", function(event){
    //     //preventing default
    //     event.preventDefault(); //DO I NEED a "PREVENTDEFAULT" HERE?

    //     //grab name from prompt
    //     const grabbedClientName = askForClientName();

    //     const dayForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
    //     // // console.log(dayForTheArrayNavigation); //Monday

    //     //find the highlighted button and traverse down to find the hidden span with class time for the array and copy it
    //     //need to check if working
    //     const timeForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenClassForArray").text();
    //     // console.log(timeForTheArrayNavigation); //nineToTenAmClass


    //     //add grabbed name to an array
    //     const arrayPathThreeLevelsDeep = weekClientList[dayForTheArrayNavigation][timeForTheArrayNavigation];

    //     arrayPathThreeLevelsDeep.push(grabbedClientName);
    //     console.log(arrayPathThreeLevelsDeep);

    //     //show list ONLY when Day: & Time: are showing
    //     const timeOnTheTimeSlotButton = $(".selectedButtonChangesColor").closest(".timeSlotButtons").text();
    //     console.log(timeOnTheTimeSlotButton);

    //     // const testTest = $(".timeSlotButtons").css("background-color");

    //     placeForTheListOfClients.empty();
    //     // console.log(testTest);

    //     if (dayForTheArrayNavigation == selectSpanForDay.text() && timeOnTheTimeSlotButton == selectSpanForTime.text()) {
    //         for (let i = 0; i < arrayPathThreeLevelsDeep.length; i++) {
    //             placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[i]}</li>`);
    //         }
    //     } else {
    //         placeForTheListOfClients.empty();
    //     }
    //     // console.log(arrayPathThreeLevelsDeep.length);
    //     if (arrayPathThreeLevelsDeep.length === 6) {
    //         alert("Class is full. Congratulations!");
    //     }
    // })
