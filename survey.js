const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['How are you?', 'What are you doing?'];

const askQuestions = function(questions) {
  let questionIndex = 0;

  const askQuestion = function() {
    rl.question(questions[questionIndex], (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      questionIndex++;
      if (questionIndex === questions.length) {
        rl.close();
        return;
      }
      askQuestion();
    });
  };

  askQuestion();
};

askQuestions(questions);

// const profile = {
//   name: {
//     question: "What's your name? Nicknames are also acceptable :)"
//   },
//   activity: {
//     question: "What's an activity you like doing?"
//   },
//   music: {
//     question: "What do you listen to while doing that?"
//   },
//   meal: {
//     question: "Which meal is your favourite (eg: dinner, brunch, etc.)"
//   },
//   food: {
//     question: "What's your favourite thing to eat for that meal?"
//   },
//   sport: {
//     question: "Which sport is your absolute favourite?"
//   },
//   superpower: {
//     question: "What is your superpower? In a few words, tell us what you are amazing at!"
//   }
// };

// for (const key in profile) {
//   rl.question(profile[key].question, (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.pause();
//   })
// }

// rl.close();
