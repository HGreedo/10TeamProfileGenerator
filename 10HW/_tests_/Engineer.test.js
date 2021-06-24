const Engineer = require("../directory/Engineeer");

test("Can set the Engineer's Github", () => { const testGit= "Github1"; const expecation = new Engineer("Foo", 1, testGit);
expect(expecation).toBe(testGit);
});
test("Using getRole() return \"Engineer\"", () => { const testEngineer= "Engineer"; const expecation = new Engineer("Foo", 1, testEngineer);
expect(expecation).toBe(testEngineer);
});
test("Using getGithub() return Engineer's Github name", () => { const testGitName= "GithubTom"; const expecation = new Engineer("Foo", 1, testGitName);
expect(expecation).toBe(testGitName);
});