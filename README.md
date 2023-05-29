# Decimal Game

#### Video Demo: [Watch Demo](https://www.youtube.com/watch?v=XdU0npj8qwc)

#### Description:
The Decimal Game is an engaging web-based mini-game that tests players' ability to convert binary numbers to decimal numbers within a specified time limit. It aims to enhance players' understanding of binary-to-decimal conversion while providing an enjoyable and interactive experience.

## Features

- Binary-to-decimal conversion challenges: Players are presented with binary numbers and must convert them to their decimal equivalents.
- Countdown timer: A timer displays the remaining time to complete each question, adding a sense of urgency to the gameplay.
- Scoring system: Players earn 1 point for each correct conversion, while incorrect answers or running out of time result in a deduction of 1 point.
- Endless gameplay: The game continues indefinitely until the player decides to give up.
- Give up option: Players can choose to give up at any time, redirecting them to a result page to view their final score.
- Dynamic generation of random binary numbers: Each question features a new random binary number, ensuring a diverse range of conversion challenges.

## How to Play

1. Open the Decimal Game in your web browser.
2. Click Get Started In Home Page.
3. The game interface will display a binary number.
4. Convert the binary number to its decimal equivalent.
5. Enter your answer in the provided input field.
6. Submit your answer before the timer runs out.
7. If your answer is correct, you will earn 1 point. Incorrect answers or running out of time will result in a deduction of 1 point.
8. The game continues with a new random binary number for the next question.
9. If you decide to give up, click on the "SURRENDER" button.
10. You will be redirected to a result page where you can view your final score.

## Technologies Used

- HTML: Markup language for creating the game interface.
- CSS: Styling the game components for an appealing and user-friendly interface.
- JavaScript: Programming language used to implement the game logic, including timer functionality, score tracking, and dynamic generation of binary numbers.

## Project File Structure

### `index.html`
This is the home page of the Decimal Game. It serves as the entry point for players and provides an overview of the game. The page typically includes a brief description of the game and a call-to-action button to start the game.

### `/html/game.html`
The game.html file represents the game page where players can actively participate in the Decimal Game. It contains the game interface, including the binary number to be converted, a countdown timer, an input field for entering the decimal answer, and a submit button to check the answer. This page also includes a surrender button to give up the game and redirect to the result page.

### `/html/result.html`
The result.html file is displayed when the player decides to give up the game or when the timer runs out. It shows the final score achieved by the player during the game session. This page provides feedback on the player's performance and allows them to evaluate their conversion skills. It include an option to play again.

### `/css/style.css`
The style.css file contains the CSS rules and styles that define the visual appearance of the Decimal Game website. It includes properties for elements like fonts, colors, layout, and other visual aspects to ensure a consistent and appealing user interface.

### `/js/game.js`
The game.js file contains the JavaScript logic and functionality for the game page. It handles the generation of random binary numbers, the countdown timer, checking the correctness of the decimal answer, updating the score, and resetting the game state for each question. This script interacts with the HTML elements on the game page to provide an interactive and dynamic gameplay experience.

### `/js/result.js`
The result.js file contains the JavaScript logic and functionality for the result page. It retrieves the final score from the game session and displays it on the result.html page.


## Future Enhancements

- Leaderboard: Implement a leaderboard feature to track and display the highest scores achieved by players.
- Difficulty Levels: Introduce different difficulty levels, allowing players to choose the level of challenge that suits their skill level.
- Sound Effects and Visual Feedback: Incorporate sound effects and visual feedback to make the game more immersive and engaging.
- Mobile Responsiveness: Optimize the game interface for mobile devices, enabling players to enjoy the game on various screen sizes.

## Conclusion

The Decimal Game provides an entertaining and educational way for players to practice and improve their binary-to-decimal conversion skills. By participating in this interactive game, players can enhance their understanding of binary numbers, improve mental math abilities, and have fun in the process.

Get ready to challenge yourself with the Decimal Game! Try to achieve the highest score and become a master of binary-to-decimal conversion. Play now and see how well you can convert binary numbers to decimals within the given time limit!