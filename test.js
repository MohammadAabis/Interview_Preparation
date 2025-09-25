const employees = {
  'emp1': { name: 'Alice', department: 'HR' },
  'emp2': { name: 'Bob', department: 'IT' },
  'emp3': { name: 'Charlie', department: 'Finance' }
};

Object.entries(employees).forEach(([key, employee]) => {
  console.log(`Key: ${key}, Name: ${employee.name}`);
});

const employees2 = {
  'emp1': { name: 'Alice', department: 'HR' },
  'emp2': { name: 'Bob', department: 'IT' },
  'emp3': { name: 'Charlie', department: 'Finance' }
};

Object.keys(employees2).forEach(key => {
  const employee = employees2[key];
  console.log(`Key: ${key}, Name: ${employee.name}`);
});

const employees3 = {
  'emp1': { name: 'Alice', department: 'HR' },
  'emp2': { name: 'Bob', department: 'IT' },
  'emp3': { name: 'Charlie', department: 'Finance' }
};

Object.values(employees3).forEach(employee => {
  console.log(`Name: ${employee.name}, Department: ${employee.department}`);
});