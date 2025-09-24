const employees = {
  'emp1': { name: 'Alice', department: 'HR' },
  'emp2': { name: 'Bob', department: 'IT' },
  'emp3': { name: 'Charlie', department: 'Finance' }
};

Object.entries(employees).forEach(([key, employee]) => {
  console.log(`Key: ${key}, Name: ${employee.name}`);
});