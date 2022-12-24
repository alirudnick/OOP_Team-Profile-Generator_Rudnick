const Manager = require('../lib/Manager');
const manager = new Manager('Sami', '002', 'sami.rudnick@yahoo.com');



test('Checking for required Manager properties', () => {
    expect(manager.name).toBe('Sami');
    expect(manager.id).toBe('002');
    expect(manager.email).toBe('sami.rudnick@yahoo.com');
    expect(manager.officeNumber)toBe('002');
});

test('Get the Managers name',() => {
    expect(manager.getName()).toBe('Sami');
});

test('Get the Manager id',() => {
    expect(manager.getId()).toBe('002');
});

test('Get the Managers email',() => {
    expect(manager.getEmail()).toBe('sami.rudnick@yahoo.com');
});

test('Get the Managers office number',() => {
    expect(manager.getOfficeNumber()).toBe('002');
});

test('Get the Managers role',() => {
    expect(manager.getRole()).toBe('Manager');

});