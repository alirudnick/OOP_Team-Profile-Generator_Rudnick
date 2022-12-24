const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Kim', '004', 'kim.rudnick@yahoo.com');

test('Checking for required Engineer properties', () => {
    expect(engineer.name).toBe('Kim');
    expect(engineer.id).toBe('004');
    expect(engineer.email).toBe('kim.rudnick@yahoo.com');
    expect(engineer.githubUsername).toBe('alirudnick');
});

test('Get the Engineers name',() => {
    expect(engineer.getName()).toBe('Nikki');
});

test('Get the Engineers id',() => {
    expect(engineer.getId()).toBe('004');
});

test('Get the Engineers email',() => {
    expect(engineer.getEmail()).toBe('kim.rudnick@yahoo.com');
});

test('Get the Engineers Github username',() => {
    expect(engineer.getSchool()).toBe('alirudnick');
});

test('Get the Engineers role',() => {
    expect(engineer.getRole()).toBe('Engineer');

});