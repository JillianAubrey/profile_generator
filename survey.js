const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {
  name: {
    question: "What's your name? Nicknames are also acceptable :)"
  },
  activity: {
    question: "What's an activity you like doing?"
  },
  music: {
    question: "What do you listen to while doing that?"
  },
  meal: {
    question: "Which meal is your favourite (eg: dinner, brunch, etc.)"
  },
  food: {
    question: "What's your favourite thing to eat for that meal?"
  },
  sport: {
    question: "Which sport is your absolute favourite?"
  },
  superpower: {
    question: "What is your superpower? In a few words, tell us what you are amazing at!"
  }
};

for (const key in profile) {
  console.log(profile[key].question);
}
