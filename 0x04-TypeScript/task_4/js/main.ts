/// <reference path='./subjects/Cpp.ts' />
/// <reference path='./subjects/Java.ts' />
/// <reference path='./subjects/React.ts' />
/// <reference path='./subjects/Teacher.ts' />
/// <reference path='./subjects/Subject.ts' />


console.log(Subjects);
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const cTeacher: Subjects.Teacher = {
    firstName: 'Andy',
    lastName: 'Cote',
    experienceTeachingC: 10,
}

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
java.getAvailableTeacher();

console.log('React');
java.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

export { cpp, java, react };