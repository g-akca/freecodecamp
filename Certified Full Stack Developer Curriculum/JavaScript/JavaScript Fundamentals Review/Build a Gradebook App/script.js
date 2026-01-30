function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score < 60) return "F";
  else if (score < 70) return "D";
  else if (score < 80) return "C";
  else if (score < 90) return "B";
  else if (score < 100) return "A";
  else return "A+";
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade != "F";
}

function studentMsg(scores, studentScore) {
  const avg = getAverage(scores);
  const grade = getGrade(studentScore);
  if (hasPassingGrade(studentScore)) return "Class average: " + avg + ". Your grade: " + grade + ". You passed the course.";
  else return "Class average: " + avg + ". Your grade: " + grade + ". You failed the course.";
}