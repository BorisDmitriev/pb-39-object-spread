const rewire = require("rewire");
const fs = require("fs");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Combining Arrays", () => {
    it("Array items of `asianCountries` are added to `euroCountries` which is printed to console", () => {
        const solution = require("../index");
        const euroCountries = rewire("../index").__get__("euroCountries");
        expect(euroCountries).toEqual(expect.arrayContaining(['Germany', 'France', 'Japan', 'Korea']))
        expect(consoleSpy).toHaveBeenCalledWith(expect.arrayContaining(['Germany', 'France', 'Japan', 'Korea']));
    })
    it("`euroCities` and `asiaCities` are combined into new array `worldCities` which is printed to console", () => {
        const solution = require("../index");
        const worldCities = rewire("../index").__get__("worldCities");
        expect(worldCities).toEqual(expect.arrayContaining(['Berlin', 'Paris', 'Tokyo', 'Seoul']))
        expect(consoleSpy).toHaveBeenCalledWith(expect.arrayContaining(['Berlin', 'Paris', 'Tokyo', 'Seoul']));
    })
})

describe("2. Copying Arrays", () => {
    it("`asiaCities` is copied into new array using spread operator and printed to console", () => {
        const solution = require("../index");
        const content = fs.readFileSync("index.js", "utf8").replace(/\s/g, "");
        expect(content).toMatch(/\[\.\.\.asiaCities\]/i)
        expect(consoleSpy).toHaveBeenCalledWith(expect.arrayContaining(['Tokyo', 'Seoul']));
    })
})
describe("3. Find The Largest..", () => {
    it("`findLargestNumber` function returns largest number from passed array", () => {
        const findLargestNumber = rewire("../index").__get__("findLargestNumber");
        expect(findLargestNumber([1, 2, 3, 15])).toBe(15);
    })
})

describe("4.Find The Smallest..", () => {
    it("`findSmallestNumber` function returns smallest number from passed array", () => {
        const findSmallestNumber = rewire("../index").__get__("findSmallestNumber");
        expect(findSmallestNumber([0, 1, 2, 3, 15])).toBe(0);
    })
})
describe("5. Clone and Merge", () => {
    it("`person` object is cloned into new variable and printed to the console", () => {
        const solution = require("../index");
        const content = fs.readFileSync("index.js", "utf8").replace(/\s/g, "");
        expect(content).toMatch(/\{\.\.\.person\}/i)
        expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({name: "John"}));
    })
    it("`person` and `job` are merged into variable `employee` which is printed to the console", () => {
        const solution = require("../index");
        const employee = rewire("../index").__get__("employee");
        expect(employee).toEqual(expect.objectContaining({ name: "John", role: "Teacher" }));
        expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ name: "John", role: "Teacher" }));
    });
    it("Value of `role` propperty of `job` object is changed and object is printed to console", () => {
        const solution = require("../index");
        const job = rewire("../index").__get__("job");
        expect(job).toEqual(expect.objectContaining({ role: 'Plumber' }));
        expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({ role: 'Plumber' }));
    });
})

describe("6. Is average a whole Number?", () => {
    it("`isWhole` function should take 4 numbers as parameters and return `false` if their average is not a whole number", () => {
        const isWhole = rewire("../index").__get__("isWhole");
        expect(isWhole(9, 2, 2, 5)).toBeFalsy();
    })
})