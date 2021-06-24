const Employee = require("../directory/Employee");
const Manager = require("../directory/Manager");

test("Can set Manager's office number", () => { const testOfficeNumber = 667; const expecation = new Manager("Foo", 1, testOfficeNumber);
    expect(expecation.officeNumber).toBe(testOfficeNumber);
});
test("Using getRole() method return \"Manager\"", () => { const testManager = "Manager"; const expecation = new Manager("Foo", 1, 667);
    expect(expecation.officeNumber).toBe(testManager);
});
test("Using getOffice() method return manager's office number", () => { const testOfficeNumber = 667; const expecation = new Manager("Foo", 1, testOfficeNumber);
    expect(expecation.getOfficeNumber()).toBe(testOfficeNumber);
});