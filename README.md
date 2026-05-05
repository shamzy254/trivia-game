# CLI Trivia Game

A command-line trivia game built with JavaScript that tests your knowledge across various topics including geography, science, history, and programming.

## Features

- 🎯 **Interactive Quiz**: Answer multiple-choice questions in a clean CLI interface
- ⏱️ **Time Tracking**: Your completion time is recorded and displayed
- 📊 **Score Calculation**: Get your final score with percentage and performance feedback
- 🔄 **Replay Option**: Play multiple rounds without restarting the application
- ✅ **Input Validation**: Robust validation ensures smooth gameplay
- 🧪 **Test Suite**: Built-in tests to validate question structure

## Installation

1. **Clone or download** this repository
2. **Navigate** to the project directory:
   ```bash
   cd trivia-game
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

Start the game by running:
```bash
npm start
```

Or directly with Node.js:
```bash
node index.js
```

### How to Play

1. The game displays a welcome screen with instructions
2. Press ENTER to begin
3. Answer each question by typing the number (1-4) corresponding to your choice
4. Get immediate feedback on correct/incorrect answers
5. View your final score and time at the end
6. Choose to play again or exit

## Testing

Run the test suite to validate the questions structure:
```bash
npm test
```

Or directly:
```bash
node test.js
```

## Project Structure

- `index.js` - Main game application with game logic and UI
- `questions.js` - Trivia questions database
- `test.js` - Test suite for validating question structure
- `package.json` - Project configuration and dependencies

## Dependencies

- [readline-sync](https://www.npmjs.com/package/readline-sync) - Synchronous readline for CLI input

## Contributing

Feel free to contribute by:
- Adding more trivia questions to `questions.js`
- Improving the game logic or UI
- Adding new features or tests

## License

This project is licensed under the MIT License - see the package.json for details.