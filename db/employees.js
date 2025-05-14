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

export function getEmployees() {
  return employees;
}

export function addEmployees(employee) {
  employees.push(employee);
}

export default employees