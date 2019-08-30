const teamObj = require('./team.js');

test('what happens when input is supplied', () => {
    const result = new teamObj('Raptors', 7, 6);

    expect(result).toBeInstanceOf(Object);
    expect(result.teamName).toEqual('Raptors');
    expect(result.level).toEqual(7);
    expect(result.points).toEqual(0);
});

test('what happens when no input is supplied', () => {
    const result = new teamObj();

    expect(result.teamName).toBeUndefined();
    expect(result.level).toBeUndefined();
    expect(result.points).toEqual(0);
});

test('what happens when incorrect type is supplied', () => {
    const result = new teamObj(42, 'abc', 'xyz');
    console.log(result)

    // expect(result.teamName).toBeNaN();  // Error: teamName should not accept a number.
    // expect(result.level).toBeNaN();  // Possible error: Should level accept a text value.
    expect(result.points).toEqual(0);
});