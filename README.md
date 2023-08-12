# Code-Quiz

Live Link: https://mjjust31.github.io/Code-Quiz/

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

1. I click the start button to begin the quiz.
   a. the instructions are erased.
   b. the timer begins.
   c. View high scores in top left hand stay.

- completed

- fuctions for displaying questions (loop).
  -function for displaying choices. (loop).
- need to verify the correct answer.
- If else statement for correct answer (add 10 points), else {deduct the time and deduct score}

2. The first question appears. There are four options.
   a. when I click the correct answer, the question is removed and a new question appears.
   i. the screen shows the user that the answer was correct.

b. when I click the wrong answer, the question is removed and a new question apepars.
i. the scresn show the user that the answer was wrong.
ii. time is deducted from the timer.

3. When the questions are complete. the quiz ends and the timer stops.
4. a score is calculated based on the correct answers.
5. the user can enter their initials with a submit button.
6. Once I click submit, the user's score and intials are saved to the high score.
7. I am taken to the high score page.
8. I see two buttons:
   i. When I click "go back", the quiz starts over.
   ii. When I click "clear high scores", it clears all saved high scores.

   Using Object methods to use as quiz info. I reviewed the following material to help me understand how to set up the object of quizInfo. 1.https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/ 2. https://www.youtube.com/watch?v=gnbzqtd2zgM

9. I wanted to see if I can could generate the questions randomly. I realized I needed to pass a function into the function displayQuestionWithChoices. Looked at this code to determine how to remove option from an array. https://stackoverflow.com/questions/37963358/how-can-i-make-a-random-array-with-no-repeats and incorporated it into my code.

10. Had difficulty reoving the previous choice buttons. Came up with a solution to create a fuction and reuse it after click event for either right or wrong answer. 

11. Review of forms for HTML https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit

