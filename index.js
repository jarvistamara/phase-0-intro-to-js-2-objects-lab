// Write your solution in this file!
const employee = {
    name: 'Sam',
    address: '110 Kings Road'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  return Object.assign({}, employee, {[key]: value})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, _key){
    const newEmployee = Employee.assign({}, employee);
  delete newEmployee.key;
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    Employee.assign({}, employee);
  delete employee[key];
  return employee;
}