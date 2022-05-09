let thingsToDo = {
    morning: "Exercise", 
    afternoon: "Work", 
    evening: 'Code', 
    night: ["Sleep", "Dream"]
}

let { morning, afternoon } = thingsToDo;
morning = 'Run';
console.log(morning, ' - ', afternoon);

//More destructuring
let uniStudent = (student) => {
  let { name, university } = student;
  console.log(`${name} from ${university}`);
};

uniStudent({
    name: 'Ryan',
    university: 'MilkyWay University of Technology'
});

//Another way to destructure the above function
let uniStudents = ({name, university}) => {
  console.log(`${name} from ${university}`);
};

uniStudents({
  name: 'Ryan',
  university: 'MilkyWay University of Technology'
});