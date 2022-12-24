const Intern = require('../lib/Intern');
const intern = new Intern('Nikki', '003', 'nikki.rudnick@yahoo.com');

test('Checking for required Intern properties', () => {
    expect(intern.name).toBe('Nikki');
    expect(intern.id).toBe('003');
    expect(intern.email).toBe('nikki.rudnick@yahoo.com');
    expect(intern.school).toBe('Miami');
});

test('Get the Interns name',() => {
    expect(intern.getName()).toBe('Nikki');
});

test('Get the Interns id',() => {
    expect(intern.getId()).toBe('003');
});

test('Get the Interns email',() => {
    expect(intern.getEmail()).toBe('nikki.rudnick@yahoo.com');
});

test('Get the Interns school',() => {
    expect(intern.getSchool()).toBe('Miami');
});

test('Get the Interns role',() => {
    expect(intern.getRole()).toBe('Intern');

});