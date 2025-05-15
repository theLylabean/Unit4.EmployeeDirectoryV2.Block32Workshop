const employees = [
  { id: 1, name: "Kevin Malone" },
  { id: 2, name: "Dwight Schrute" },
  { id: 3, name: "Jim Halpert" },
  { id: 4, name: "Erin Hannon" },
  { id: 5, name: "Stanley Hudson" },
  { id: 6, name: "Creed Bratton" },
  { id: 7, name: "Phillis Vance of Vance Refrigeration" },
  { id: 8, name: "Oscar Martinez" },
  { id: 9, name: "Angela Martin" },
  { id: 10, name: "Toby Flenderson" },
];
let newId = Math.max(...employees.map(e => e.id)) + 1;

export function getEmployees() {
  return employees;
}

export function addEmployees(name) {
  const checkEmployee = employees.some(emp => emp.name.toLowerCase() === name.toLowerCase());
  if (checkEmployee) {
    return null;
  }
  const newEmployee = {
    id: newId++,
    name
  }
  employees.push(newEmployee);
  return newEmployee;
}
