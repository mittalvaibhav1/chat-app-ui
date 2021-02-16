const userChats = [
  {
    id: 1,
    name: "Vaibhav Mittal",
    photoUrl: "./images/male.png",
    messages: [
      {
        type: "sent",
        content: "Hey! How are you?",
        timestamp: "3:00 PM"
      },
      {
        type: "received",
        content: "Hey! I'm fine! How about you?",
        timestamp: "3:00 PM"
      }
    ]
  },
  {
    id: 2,
    name: "Kritika Kaur",
    photoUrl: "./images/female.png",
    messages: [
      {
        type: "sent",
        content: "Hey! How are you?",
        timestamp: "6:00 PM"
      },
      {
        type: "received",
        content: "Hey! I'm fine!",
        timestamp: "6:20 PM"
      }
    ]
  },
  {
    id: 3,
    name: "Anish Rajan",
    photoUrl: "./images/male2.png",
    messages: [
      {
        type: "received",
        content: "Yo! What's up?",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Nothing much. What about you?",
        timestamp: "9:10 AM"
      }
    ]
  },
  {
    id: 4,
    name: "Riya Malhotra",
    photoUrl: "./images/female2.png",
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      }
    ]
  },
  {
    id: 5,
    name: "Shivam Bansal",
    photoUrl: "./images/male3.png",
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  }
];

export default userChats;
