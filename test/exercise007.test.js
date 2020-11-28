const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("Returns the sum of all of the digits in a number", () => {
        expect(sumDigits(1)).toBe(1);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(123456)).toBe(21);
    });
});

describe("createRange", () => {
    test("Creates a range of numbers as an array with a start, end and step", () => {
        expect(createRange(1,10,1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
        expect(createRange(1,100,10)).toEqual([1,11,21,31,41,51,61,71,81,91]);
    });
});

describe("getScreentimeAlertList", () => {
    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }]
        },
        {
            username: "rebe_2001",
            name: "Rebeca Sciamanna",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 26, instagram: 30, facebook: 31, mapMyRun: 40} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }]
        },
    ]
    test("Checks which staff have exeeded 100 minutes usage on a given date", () => {
        expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(["beth_1234","rebe_2001"]);     
    });
});

describe("hexToRGB", () => {
    test("Returns the RGB value of a hex number", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#ABCDEF")).toEqual("rgb(171,205,239)");
    });
});

describe("findWinner", () => {
    const board1 = [
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]];

    test("See if we have a winner in the game", () => {
        expect(findWinner(board1)).toEqual("X");     
    });

    const board2 = [
        ["X", "0", null],
        ["0", "X", "0"],
        ["X", null,"0"]];

    test("Check if we dont have a winner in the game", () => {
        expect(findWinner(board2)).toEqual(null);     
    });

    const board3 = [
        ["0", "X", null],
        [null, "0", "X"],
        ["X", null,"0"]];

    test("See if we have a winner in the game", () => {
        expect(findWinner(board3)).toEqual("0");     
    });

    const board4 = [
        ["0", "X", null],
        [null, "0", "0"],
        ["X", "X","X"]];

    test("See if we have a winner in the game", () => {
        expect(findWinner(board4)).toEqual("X");     
    });
});