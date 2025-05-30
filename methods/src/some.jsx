
const some = () => {
    const students = [
        { id: 1, name: "Amit", marks: 75, city: "Surat", isPresent: true },
        { id: 2, name: "Riya", marks: 32, city: "Ahmedabad", isPresent: false },
        { id: 3, name: "Mehul", marks: 88, city: "Rajkot", isPresent: true },
        { id: 4, name: "Pooja", marks: 45, city: "Vadodara", isPresent: true },
        { id: 5, name: "Neha", marks: 29, city: "Surat", isPresent: false },
        { id: 6, name: "Jay", marks: 59, city: "Ahmedabad", isPresent: true },
      ];

    const absent = students.some((student) => student.isPresent === false);
    console.log(absent); 
}

export default some
