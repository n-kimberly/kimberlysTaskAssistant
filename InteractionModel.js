{
  "intents": [
    {
      "name": "AMAZON.CancelIntent",
      "samples": []
    },
    {
      "name": "AMAZON.HelpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StopIntent",
      "samples": []
    },
    {
      "name": "MenuIntent",
      "samples": [
        "main menu",
        "menu",
        "home"
      ]
    },
    {
      "name": "CreatePromptIntent",
      "samples": [
        "I would like to add to my to do list",
        "add",
        "add to my list",
        "create item for list",
        "create item",
        "create an item",
        "create item on to do list"
      ]
    },
    {
      "name": "CreateActionIntent",
      "samples": [
        "remind me to {actionItem}",
        "please add {actionItem}",
        "add {actionItem} to my list",
        "add {actionItem} to my to do list",
        "{actionItem}"
      ],
      "slots": [
        {
          "name": "actionItem",
          "samples": [
            "go grocery shopping",
            "go to the gym",
            "buy toothpaste",
            "clean room",
            "get Rachel a smoothie",
            "cook dinner",
            "stand"
            "sit",
            "lie down"
          ]
        }
      ]
    },
    {
      "name": "ViewIntent",
      "samples": [
        "I would like to view my to do list",
        "view",
        "view my list",
        "view items",
        "list items",
        "view all items",
        "view to do list"
      ]
    },
    {
      "name": "UpdateIntent",
      "samples": [
        "I would like to update my to do list",
        "update",
        "update my list",
        "update items",
        "update list",
        "update the to do list",
        "update to do list"
      ]
    },
    {
      "name": "IndexIntent",
      "samples": [
        "next",
        "I didn't do that one",
        "nope",
        "no",
        "next item please"
      ]
    },
    {
      "name": "DestroyIntent",
      "samples": [
        "did that",
        "done",
        "completed",
        "remove that",
        "finished",
        "remove"
      ]
    }
  ]
}
