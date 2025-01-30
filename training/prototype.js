class Human{

}

class Person extends Human{

}


class Student extends Person{

}


const stu = new Student();

console.log(typeof Student.prototype);

console.log(Student.prototype);

console.log(typeof Person);

console.log(stu.__proto__);