(function () {
    'use strict';

    var Alexa = require("alexa-sdk");

    var list = ["STAND", "SIT", "LIE DOWN"];

    var handlers = {

        "LaunchRequest": function () {
            this.attributes.currentIndex = 0;
            this.response
                .speak("Welcome to Kimberly's task assistant. Do you want to create an item, view all items, or update items on Kimberly's task list?").listen("Would you like to create an item on kimberly's task list, view kimberly's task list, or update kimberly's task list?");
            this.emit(":responseReady");
        },

        "MenuIntent": function () {
            this.attributes.currentIndex = 0;
            this.response
                .speak("Main menu: do you want to create an item, view all items, or update items on kimberly's task list?").listen("Would you like to create an item on kimberly's task list, view kimberly's task list, or update kimberly's task list?");
            this.emit(":responseReady");
        },

        "CreatePromptIntent": function () {
          this.response
              .speak("Okay, what would you like to add?").listen("What would you like to add to kimberly's task list?");
          this.emit(":responseReady");
        },

        "CreateActionIntent": function () {
          var actionItem = this.event.request.intent.slots.actionItem.value.toString().toUpperCase();
          list.push(actionItem);
          this.response
              .speak(actionItem + " has been added! Kimberly now has "+ list.length +" items. What else would you like to add? Say menu to return to the main menu.").listen("Your item has been added. Say menu to return to the main menu.");
          this.emit(":responseReady");
        },

        "ViewIntent": function () {
            var allItems = [];
            for (var i = 0; i < list.length; i += 1) {
                allItems.push(" Item " + [i+1] + " on kimberly's task list is "+ list[i]);
            }
            var listString = allItems.toString();
            this.response.speak("Sure thing! " + listString);
            this.emit(":responseReady");
        },

        "UpdateIntent": function () {
            var currentItem = list[this.attributes.currentIndex].toUpperCase();
            this.response
                .speak("Okay, I will recite kimberly's task items one by one. After each, please respond with completed, remove, or next to hear the next item. Kimberly's first item is " +  currentItem)
                .listen(currentItem);
            this.emit(":responseReady");
        },

        "IndexIntent": function () {
          this.attributes.currentIndex += 1;
          if (this.attributes.currentIndex < list.length) {
            var nextItem = list[this.attributes.currentIndex].toUpperCase();
            var indexResponse = "Kimberly's next item is " + nextItem;
          } else {
            var indexResponse = "Kimberly has no more items. Say menu to return to the main menu.";
          }
          this.response
              .speak("Kimberly will need to complete that at some point in her life. " + indexResponse)
              .listen(indexResponse);
          this.emit(":responseReady");
        },

        "CompleteIntent": function () {
          list.splice(this.attributes.currentIndex, 1);
          if (this.attributes.currentIndex < list.length) {
            var nextItem = list[this.attributes.currentIndex].toUpperCase();
            var indexResponse = "Kimberly's next items is " + nextItem;
          } else {
            var indexResponse = "Kimberly has no more items. Say menu to return to the main menu.";
          }
          this.response
              .speak("Great job! Item has been removed. " + indexResponse)
              .listen(indexResponse);
          this.emit(":responseReady");
        },

        "RemoveIntent": function () {
          list.splice(this.attributes.currentIndex, 1);
          if (this.attributes.currentIndex < list.length) {
            var nextItem = list[this.attributes.currentIndex].toUpperCase();
            var indexResponse = "Kimberly's next items is " + nextItem;
          } else {
            var indexResponse = "KImberly has no more items. Say menu to return to the main menu.";
          }
          this.response
              .speak("Item has been removed. " + indexResponse)
              .listen(indexResponse);
          this.emit(":responseReady");
        },

        'AMAZON.HelpIntent': function () {
            this.response.speak("Say, view to view kimberly's task list; update to update kimberly's task list; and create to create an item on kimberly's task list.");
            this.emit(":responseReady");
        },

        "AMAZON.StopIntent": function () {
            this.response.speak("Exiting kimberly's task assistant.");
            this.emit(":responseReady");
        },

        "AMAZON.CancelIntent": function () {
            this.response.speak("Exiting kimberly's task assistant.");
            this.emit(":responseReady");
        },

        // Save state
        'SessionEndedRequest': function() {
          console.log('session ended!');
          this.emit(':saveState', true);
        }
    };

    exports.handler = function (event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.dynamoDBTableName = 'kimberlysTaskAssistant';
        alexa.registerHandlers(handlers);
        alexa.execute();
    };
}());
