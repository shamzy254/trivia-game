// index.js - Main Trivia Game Application

const readline = require('readline-sync');
const questions = require('./questions');

// Game state
let score = 0;
let currentQuestionIndex = 0;
let startTime = null;
let endTime = null;

/**
 * Display welcome message and game instructions
 */
function displayWelcome() {
  console.clear();
  console.log('╔════════════════════════════════════════╗');
  console.log('║     🎯 CLI TRIVIA GAME CHALLENGE 🎯    ║');
  console.log('╔════════════════════════════════════════╗');
  console.log('║                                        ║');
  console.log('║  Answer questions correctly to score!  ║');
  console.log('║  Your time will be tracked.            ║');
  console.log('║                                        ║');
  console.log('╚════════════════════════════════════════╝\n');
}

/**
 * Display a single question with its options
 * @param {Object} questionObj - Question object containing question, options, and correct answer
 * @param {number} index - Current question number
 */
function displayQuestion(questionObj, index) {
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Question ${index + 1} of ${questions.length}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  console.log(`❓ ${questionObj.question}\n`);
  
  // Display options with letters (A, B, C, D)
  questionObj.options.forEach((option, i) => {
    console.log(`   ${i + 1}. ${option}`);
  });
  console.log();
}

/**
 * Get user's answer input with validation
 * @returns {number} - User's selected answer (0-indexed)
 */
function getUserAnswer() {
  let answer;
  let validInput = false;
  
  while (!validInput) {
    const input = readline.question('Enter your answer (1-4): ');
    answer = parseInt(input);
    
    if (answer >= 1 && answer <= 4) {
      validInput = true;
    } else {
      console.log('❌ Invalid input! Please enter a number between 1 and 4.\n');
    }
  }
  
  return answer - 1; // Convert to 0-indexed
}

/**
 * Check if the user's answer is correct and provide feedback
 * @param {number} userAnswer - User's selected answer index
 * @param {number} correctAnswer - Correct answer index
 * @returns {boolean} - True if answer is correct, false otherwise
 */
function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log('\n✅ Correct! Well done!\n');
    return true;
  } else {
    console.log(`\n❌ Incorrect! The correct answer was: ${questions[currentQuestionIndex].options[correctAnswer]}\n`);
    return false;
  }
}

/**
 * Calculate and display final game results
 */
function displayResults() {
  endTime = Date.now();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
  const percentage = ((score / questions.length) * 100).toFixed(1);
  
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║           🏆 GAME OVER 🏆              ║');
  console.log('╚════════════════════════════════════════╝\n');
  console.log(`📊 Your Score: ${score} / ${questions.length} (${percentage}%)`);
  console.log(`⏱️  Time Taken: ${timeTaken} seconds\n`);
  
  // Performance feedback using array method (filter to get correct answers)
  const correctAnswers = Array(questions.length).fill(0).filter((_, i) => i < score);
  
  if (percentage >= 80) {
    console.log('🌟 Outstanding! You\'re a trivia master!');
  } else if (percentage >= 60) {
    console.log('👍 Good job! You know your stuff!');
  } else if (percentage >= 40) {
    console.log('📚 Not bad! Keep learning!');
  } else {
    console.log('💪 Keep practicing! You\'ll improve!');
  }
  
  console.log();
}

/**
 * Display score breakdown using array methods
 */
function displayScoreBreakdown() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📈 Question Breakdown:\n');
  
  // Using map to create a summary of each question
  const summary = questions.map((q, index) => {
    return `Q${index + 1}: ${q.question.substring(0, 40)}...`;
  });
  
  summary.forEach(item => console.log(`   ${item}`));
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

/**
 * Main game loop
 */
function playGame() {
  // Reset game state
  score = 0;
  currentQuestionIndex = 0;
  startTime = Date.now();
  
  displayWelcome();
  
  // Press any key to start
  console.log('Press ENTER to start the quiz...');
  readline.question();
  
  // Loop through all questions
  while (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    
    displayQuestion(currentQuestion, currentQuestionIndex);
    const userAnswer = getUserAnswer();
    const isCorrect = checkAnswer(userAnswer, currentQuestion.correctAnswer);
    
    if (isCorrect) {
      score++;
    }
    
    // Pause before next question
    if (currentQuestionIndex < questions.length - 1) {
      console.log('Press ENTER for the next question...');
      readline.question();
      console.clear();
    }
    
    currentQuestionIndex++;
  }
  
  // Display final results
  displayResults();
  displayScoreBreakdown();
}

/**
 * Ask if user wants to play again
 * @returns {boolean} - True if user wants to play again
 */
function playAgain() {
  const answer = readline.question('Would you like to play again? (yes/no): ').toLowerCase();
  return answer === 'yes' || answer === 'y';
}

/**
 * Main application entry point
 */
function startApp() {
  let playing = true;
  
  while (playing) {
    playGame();
    playing = playAgain();
    
    if (playing) {
      console.clear();
    }
  }
  
  console.log('\n👋 Thanks for playing! Goodbye!\n');
}

// Start the application
startApp();
startApp();