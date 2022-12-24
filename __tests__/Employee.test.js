const Employee = require('../lib/Employee');
const employee = new Employee('Ali', '001', 'ali.rudnick@yahoo.com');

test('Checking for required Employee properties', () => {
    expect(employee.name).toBe('Ali');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('ali.rudnick@yahoo.com');
});

test('Get the Employees name',() => {
    expect(employee.getName()).toBe('Ali');
});

test('Get the Employees id',() => {
    expect(employee.getId()).toBe('001');
});

test('Get the Employees email',() => {
    expect(myEmployee.getEmail()).toBe('ali.rudnick@yahoo.com');
});

test('Get the Employees role',() => {
    expect(myEmployee.getRole()).toBe('Employee');

});