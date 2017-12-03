(function () {
    'use strict';

    var Alexa = require("alexa-sdk");

    var backlog = [
        {
            item: "go grocery shopping",
            due_date: "december 15"
        },
        {
            item: "clean old apartment",
            due_date: "december 20"
        },
        {
            item: "complete checkpoint 5",
            due_date: "december 30"
        },
        {
            item: "prepare for monday",
            due_date: "december 30"
        },
        {
            item: "get some sleep",
            due_date: "december 30"
        }
    ];

    var BACKLOG_LENGTH = backlog.length;

    var handlers = {

        "LaunchRequest": function () {
            this.response
                .speak("Welcome to kimberly's to do list. Do you want to view or update kimberly's to do list?").listen("Would you like to create item on to do list, view to do list, or update the to do list?");
            this.emit(":responseReady");
        },

        "MenuIntent": function () {
            this.attributes.currentIndex = 0;
            this.response
                .speak("Do you want to view or update kimberly's to do list?").listen("Would you like to create item on to do list, view to do list, or update the to do list?");
            this.emit(":responseReady");
        },

        "UpdateIntent": function () {
            var currentItem = backlog[this.attributes.currentIndex].item.toUpperCase();
            this.response
                .speak("Okay, I will remind you of your to do items one by one. You have " + BACKLOG_LENGTH + " items. After each, please respond with completed, remove, or next to hear the next item. " +  currentItem)
                .listen(currentItem);
            this.emit(":responseReady");
        },

        "UpdateActionIntent": function () {
            var userReq = this.event.request.intent.slots.req.value.toString().toLowerCase();
            this.attributes.currentIndex += 1;
            var nextItem = backlog[this.attributes.currentIndex].item.toUpperCase();
            if (userReq === "completed") {
                this.response
                    .speak("Nice job! Next item, " + nextItem)
                    .listen(nextItem);

            } else {
                this.response
                    .speak("Item removed. Here is your next to do item: " + nextItem)
                    .listen(nextItem);

            }
            this.emit(":responseReady");
        },

        "UpdateIndexIntent": function () {
            var userReq = this.event.request.intent.slots.req.value.toString().toLowerCase();
            this.attributes.currentIndex += 1;
            this.response
                .speak("What's taking so long? Here is your next to do item: " + nextItem)
                .listen(nextItem);
            this.emit(":responseReady");
        },

        "ViewIntent": function () {
            var allItems = [];
            for (var i = 0; i < BACKLOG_LENGTH; i += 1) {
                allItems.push(backlog[this.attributes.i].item.toUpperCase());
            }
            this.response.speak(allItems.toString());
        },

        "AMAZON.StopIntent": function () {
            this.response.speak("Exiting kimberly's to do list.");
            this.emit(":responseReady");
        },

        "AMAZON.CancelIntent": function () {
            this.response.speak("Exiting kimberly's to do list.");
            this.emit(":responseReady");
        }
    };

    exports.handler = function (event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.registerHandlers(handlers);
        alexa.execute();
    };
}());
