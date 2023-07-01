const students = [
  {
    name: "Ronaldo",
    assessmentOne: 5.1,
    assessmentTwo: 10
  },
  {
    name: "Joana",
    assessmentOne: 6.1,
    assessmentTwo: 3.9
  },
  {
    name: "Dougals",
    assessmentOne: 6.8,
    assessmentTwo: 8.4
  },
]


function ratingAverage(assessmentOne, assessmentTwo) {
  return ((assessmentOne+assessmentTwo)/2).toFixed(2)
}

function printratingAverage(student) {
  if(ratingAverage(student.assessmentOne,student.assessmentTwo) >= 7)
  {
    return `
     O aluno ${student.name} ficou com a média de ${ratingAverage(student.assessmentOne, student.assessmentTwo)}
     Sendo assim o aluno foi aprovado
  ` 
  }
  else
  {
    return `
    O aluno ${student.name} ficou com a média de ${ratingAverage(student.assessmentOne, student.assessmentTwo)}
    Sendo assim o aluno foi reprovado
 ` 
  }
}

for (let student of students) {
  let AverageAlert = printratingAverage(student)
  alert(AverageAlert)
}