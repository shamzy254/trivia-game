const assert = require('assert');
const questions = require('./questions');

assert(Array.isArray(questions), 'questions should be an array');
assert(questions.length > 0, 'questions array should not be empty');

questions.forEach((q, index) => {
  assert.strictEqual(typeof q.question, 'string', `question ${index} should have a question string`);
  assert(Array.isArray(q.options), `question ${index} should have an options array`);
  assert(q.options.length >= 2, `question ${index} should have at least two options`);
  assert.strictEqual(typeof q.correctAnswer, 'number', `question ${index} should have a correctAnswer number`);
  assert(q.correctAnswer >= 0 && q.correctAnswer < q.options.length, `question ${index} should have a valid correctAnswer index`);
});

console.log('✅ All tests passed.');
