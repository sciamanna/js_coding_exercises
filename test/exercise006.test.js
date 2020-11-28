const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
        expect(sumMultiples([5, 3, 7, 8, 1, 10, 1])).toBe(18);
        expect(sumMultiples([4, 22, 654, 123, 65.0, 23, 40, 1, 22])).toBe(882);
    });
    test("if no multiples of 3 or 5 return 0", () => {
        expect(sumMultiples([1, 2, 7, 8, 1, 11])).toBe(0);
    });
});
describe("isValidDNA", () => {
    test("A valid DNA string may contain characters C, G, T or A only", () => {
        const result = isValidDNA("GCTATAB");
        const expected = false;
        expect(result).toBe(expected);
        expect(isValidDNA("GCTATA")).toBe(true);
    });
    test("if no valid DNA chars return false", () => {
        expect(isValidDNA("BDFHIJKLMNOPQRSUVWXYZ")).toBe(false);
    });
});
describe("getComplementaryDNA", () => {
    test("In DNA, T always pairs with A, and C always pairs with G.", () => {
        const result = getComplementaryDNA("ACTG");
        const expected = "TGAC";
        expect(result).toBe(expected);
        expect(getComplementaryDNA("ACTGAG")).toBe("TGACTC");
    });
});
describe("isItPrime", () => {
    test("A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
        const result = isItPrime(7);
        const expected = true;
        expect(result).toBe(expected);
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(9967)).toBe(true);
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(-1)).toBe(false);
    });
});
describe("createMatrix", () => {
    test("Receive a number and return an array of n arrays, each filled with n items of fill", () => {
        const result = createMatrix(3, "foo");
        expect(result).toEqual(
            [["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]]
        );
        expect(createMatrix(1, "bar")).toEqual(
            [["bar"]]
        );

        expect(createMatrix(4, "foo")).toEqual(
            [["foo", "foo", "foo", "foo"],
            ["foo", "foo", "foo", "foo"], 
            ["foo", "foo", "foo", "foo"],
            ["foo", "foo", "foo", "foo"]]
        );
    });
});
describe("areWeCovered", () => {
    test("If we have no staff we cannot open", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
    });
    test("We cannot open if we have less than three staff", () => {
        const staff = [
            { name: "rebeca", rota: ["Monday", "Tuesday"] },
            { name: "steve", rota: ["Monday", "Tuesday", "Saturday"] },
            { name: "eva", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
            { name: "layla", rota: ["Monday", "Tuesday", "Wednesday", "Thursday"] }
        ];
        expect(areWeCovered(staff, "Sunday")).toBe(false);
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });

});