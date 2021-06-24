const Employee = require("../directory/Employee");

test("Can initialize Employee", () =>{ const expecation = new Employee();
    expecation(typeof(expecation)).toBe("object");
});
test("Can set employee's id", () => { const randNum = "666"; const expecation = new Employee("Foo", rendNum); 
    expect(expecation.id).toBe(randNum);
});
test("Can set employee's name", () => { const name = "Tom"; const expecation = new Employee(name);
    expect(expecation).toBe(name)
});
test("can set employee's email", () => { const testEmail= "tom@tom.com"; const expecation = new Employee ("Foo", testEmail);
    expect(expecation.email).toBe(testEmail);
});
test("Can return employee's name via getName()", () => { const testName = "Jerry"; const expectation = new Employee(testName);
    expect(expectation.getName()).toBe(testName);
});
test("Can return employee's id via getID()", () => { const testID= 303; const expecation = new Employee("Foo", testID);
    expect(expecation.getId()).toBe(testID);
});
test("Can return employee's email by getEmail()", () => { const testEmail= "jerry@jerry.com"; const expecation = new Employee("Foo", 1, testEmail);
    expect(expecation.getEmail()).toBe(testEmail);
});
test("Using getRole() method returns \"Employee\"", () => { const testEmployee = "Employee"; const expectation = new Employee("Tom", "tom@tom.com");
expect(expectation.getRole()).toBe(testEmployee);
});