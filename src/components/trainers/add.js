import { randomInt, shuffle } from '../../helpers';

const levels = [
  { questions: 10, min:   5, max:   10, answers: 2, answerRange:  2 },
  { questions: 10, min:   5, max:   10, answers: 2, answerRange:  2, mixed: true },
  { questions: 10, min:  10, max:   20, answers: 3, answerRange:  5 },
  { questions: 10, min:  10, max:   20, answers: 3, answerRange:  5, mixed: true },
  { questions: 10, min:  20, max:   50, answers: 3, answerRange: 10 },
  { questions: 10, min:  20, max:   50, answers: 3, answerRange: 10, mixed: true },
  { questions: 10, min:  50, max:  100, answers: 3, answerRange: 20, mixed: true },
  { questions: 10, min: 100, max:  200, answers: 4, answerRange: 30, mixed: true },
  { questions: 10, min: 200, max:  500, answers: 5, answerRange: 40, mixed: true },
  { questions: 10, min: 500, max: 1000, answers: 5, answerRange: 50, mixed: true }
];

const genQuestions = function*(level) {

  for (let i = 0; i < level.questions; i++) {
    const x = randomInt(level.min, level.max);
    const y = randomInt(level.min, level.max);

    const members = [ x, y, x + y ];
    const unknown = level.mixed ? randomInt(0, 2) : 2;
    const correctAnswer = members[unknown];
    members[unknown] = '?';

    let answers = [ correctAnswer ];
    while (answers.length < level.answers) {
      const answer = randomInt(correctAnswer - level.answerRange, correctAnswer + level.answerRange);
      if (answers.indexOf(answer) < 0) answers.push(answer);
    }
    shuffle(answers);

    yield {
      text: `${members[0]} + ${members[1]} = ${members[2]}`,
      answers,
      checkAnswer(answer) {
        return answer === correctAnswer;
      }
    };
  }
}

const quiz = {
  title: 'Сложение',
  levels,
  questions(level) {
    return [...genQuestions(level)];
  }
}

export default quiz;