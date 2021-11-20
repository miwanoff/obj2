let chevy = {
  make: "Chevrolet",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  mileage: 1021,
  needsWashing: false, // новое свойство - нуждается в мойке!
};

let student = {
  name: "Nicol",
  age: 15,
  marks: [11, 11, 12],
  show: function () {
    // метод drive
    alert("Бип!");
    alert(this.name + " " + this.age);
  },
  toString: function () {
    return "Студент " + this.name + " " + this.age;
  },
};

delete chevy.needsWashing;
for (let prop in chevy) {
  console.log(prop + ": " + chevy[prop]);
}

for (const key in student) {
  // if (Object.hasOwnProperty.call(object, key)) {
  console.log(student[key]);

  //  }
}
console.log(student.marks.length);
for (let i = 0; i < student.marks.length; i++) {
  //const element = student.marks[i];
  console.log(student.marks[i]);
}

console.log(chevy.make); // Chevrolet

console.log(student);
alert(student);
alert(student.name);
student.show();
document.write(student);
