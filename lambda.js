(function () {
    'use strict';

    var Alexa = require("alexa-sdk");

    var list = ["STAND", "SIT", "LIE DOWN"];

    var handlers = {

        "LaunchRequest": function () {
            this.attributes.currentIndex = 0;
            this.response
                .speak("Welcome to kimberly's to do list. Do you want to create an item, view all items, or update items on kimberly's to do list?").listen("Would you like to create an item on your to do list, view your to do list, or update your to do list?");
            this.emit(":responseReady");
        },

        "MenuIntent": function () {
            this.attributes.currentIndex = 0;
            this.response
                .speak("Main menu. Do you want to create an item, view all items, or update items on kimberly's to do list?").listen("Would you like to create item on to do list, view to do list, or update the to do list?");
            this.emit(":responseReady");
        },

        "CreatePromptIntent": function () {
          this.response
              .speak("Okay, what would you like to add?").listen("What would you like to add to your to do list?");
          this.emit(":responseReady");
        },

        "CreateActionIntent": function () {
          var actionItem = this.event.request.intent.slots.actionItem.value.toString().toUpperCase();
          list.push(actionItem);
          this.response
              .speak(actionItem + " has been added! You now have "+ list.length +" items. What else would you like to add? Say menu to return to the main menu.").listen("Your item has been added. Say menu to return to the main menu.");
          this.emit(":responseReady");
        },

        "ViewIntent": function () {
            var allItems = [];
            for (var i = 0; i < list.length; i += 1) {
                allItems.push(" Item " + [i+1] + " on your to do list is "+ list[i]);
            }
            var listString = allItems.toString();
            this.response.speak("Sure thing! " + listString);
            this.emit(":responseReady");
        },

        "UpdateIntent": function () {
            var currentItem = list[this.attributes.currentIndex].toUpperCase();
            this.response
                .speak("Okay, I will remind you of your to do items one by one. After each, please respond with completed, remove, or next to hear the next item. Your first item is " +  currentItem)
                .listen(currentItem);
            this.emit(":responseReady");
        },

        "IndexIntent": function () {
          this.attributes.currentIndex += 1;
          if (this.attributes.currentIndex < list.length) {
            var nextItem = list[this.attributes.currentIndex].toUpperCase();
            this.response
                .speak("You'll need to complete that at some point in your life. Your next item is " + nextItem)
                .listen(nextItem);
            this.emit(":responseReady");
          } else {
            this.response
                .speak("You have no more items. Say menu to return to the main menu.")
                .listen("Say menu to return to the main menu.");
            this.emit(":responseReady");
          }
        },

        "DestroyIntent": function () {
          list.splice(this.attributes.currentIndex, 1);
          var nextItem = list[this.attributes.currentIndex].toUpperCase();
          this.response
              .speak("Item removed. Your next to do item is " + nextItem)
              .listen(nextItem);
          this.emit(":responseReady");
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
