const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

  function getAverageStudentScore(students) {
    const averageScore = students.reduce((acc, curr) => {
        return curr.score + acc;
    }, 0);
    return averageScore / students.length;
  }

  console.log(getAverageStudentScore(students))
