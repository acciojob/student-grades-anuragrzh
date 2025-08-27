fetch('students.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch JSON");
    }
    return response.json();
  })
  .then(students => {
    students.forEach(student => {
      const total = student.marks.reduce((sum, mark) => sum + mark, 0);
      const average = total / student.marks.length;
      console.log(`${student.name}'s average marks: ${average.toFixed(2)}`);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
