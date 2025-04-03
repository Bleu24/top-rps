const getComputerChoice = require('./getCompChoice');

test('returns a valid choice', () => {
  const choice = getComputerChoice();
  expect(['rock', 'paper', 'scissors']).toContain(choice);
});
