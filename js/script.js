$(function() {

    //array with client names
    const weekClientList = {
        Monday: {
            nineToTenAmClass: ["fuck", "ass"],
            sixToSevenPmClass: ["lol", "shit"]
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









    timeSlotButtons.on("click", function(){
        //highlights a time slot button when clicked
        $(this).toggleClass("selectedButtonChangesColor");
        //removes the highlighting of all other TimeSlot buttons  when one is highlighted
        timeSlotButtons.not(this).removeClass("selectedButtonChangesColor");

        const toggledObject = $(".selectedButtonChangesColor");
        console.log(`length of toggled class: ${toggledObject.length}`);


        if (toggledObject.length === 1) {
            const dayForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".dayContainer").find(".dayContainerHeaderBoxParagraphs").text();
            console.log(`dayForTheArrayNavigation: ${dayForTheArrayNavigation}`); //Monday
    
            const timeOnTheTimeSlotButton = $(".selectedButtonChangesColor").closest(".timeSlotButtons").text();
            console.log(`timeOnTheTimeSlotButton: ${timeOnTheTimeSlotButton}`); //9am-10am | 0/6
    
            const timeForTheArrayNavigation = $(".selectedButtonChangesColor").closest(".additonalClassForClosestMethod").find(".hiddenClassForArray").text();
            console.log(`timeForTheArrayNavigation: ${timeForTheArrayNavigation}`); //nineToTenAmClass
    
            const arrayPathThreeLevelsDeep = weekClientList[dayForTheArrayNavigation][timeForTheArrayNavigation];
            console.log(arrayPathThreeLevelsDeep);

            $(".clientListContainer").css("background-color", "rgba(209, 119, 5, 0.2)");
            //insert the Day and Time values in the Header of the client list container
            // console.log(`timeSlotButtonsBackgroundColor: ${timeSlotButtonsBackgroundColor}`);
            //rgb(209, 119, 5)

            selectSpanForDay.text(dayForTheArrayNavigation).css("color", "blue");
            selectSpanForTime.text(timeOnTheTimeSlotButton).css("color", "blue");

            addClientButton.attr("disabled", false);

            
            placeForTheListOfClients.empty();

            for (let i = 0; i < arrayPathThreeLevelsDeep.length; i++) {
                placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[i]}</li>`);
            };

            addClientButton.on("click", function (event) {
                //preventing default
                // event.preventDefault();
                //DO I NEED a "PREVENTDEFAULT" HERE?

                const askForClientName = function () {
                    return prompt("Type in client's name");
                };

                //grab name from prompt
                const grabbedClientName = askForClientName();

                arrayPathThreeLevelsDeep.push(grabbedClientName);
                console.log(grabbedClientName);
                console.log(arrayPathThreeLevelsDeep);

                // placeForTheListOfClients.empty();

                const arrayLength = arrayPathThreeLevelsDeep.length - 1;
                console.log(`arrayLength: ${arrayLength}`);
                placeForTheListOfClients.append(`<li>${arrayPathThreeLevelsDeep[arrayLength]}</li>`);

                if (arrayPathThreeLevelsDeep.length === 6) {
                    alert("Class is full. Congratulations!");
                };
                console.log(arrayPathThreeLevelsDeep.length);
            });

        } else {
            $(".clientListContainer").css("background-color", "transparent");
            selectSpanForDay.empty();
            selectSpanForTime.empty();
            addClientButton.attr("disabled", true);
            placeForTheListOfClients.empty();
            
        };
    });
});
