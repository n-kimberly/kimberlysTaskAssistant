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
        "create item"
      ],
      "slots": []
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
          "name": "item",
          "samples": [
            "go grocery shopping",
            "go to the gym",
            "buy toothpaste",
            "clean room",
            "get Rachel a smoothie",
            "cook dinner"
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
        "list items"
      ],
      "slots": []
    },
    {
      "name": "UpdateIntent",
      "samples": [
        "I would like to update my to do list",
        "update",
        "update my list",
        "update items",
        "update list"
      ],
      "slots": []
    },
    {
      "name": "IndexIntent",
      "samples": [
        "next",
        "I didn't do that one",
        "nope",
        "no",
        "next item please"
      ],
      "slots": []
    },
    {
      "name": "DestroyIntent",
      "samples": [
        "did that",
        "done",
        "completed",
        "remove that",
        "finished"
      ],
      "slots": []
    }
  ]
}
