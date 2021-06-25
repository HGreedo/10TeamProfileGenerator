const genTeam = team => {

    const genManager = manager => {
        return ``;
        //html
    };
    const genEmployee = employee => {
        return ``;
        //html
    };

    const genEngineer = engineer => {
        return ``;
        //html
    };
    const genIntern = intern => {
        return ``;
        //html
    };

const html = [];

html.push(team 
    .filter(employee => employee.getRole() === "Employee")
    .map(employee => genEmployee(employee))
    );
    html.push(team 
        .filter(manager => manager.getRole() === "Manager")
        .map(manager => genEmployee(manager))
        );
        html.push(team 
            .filter(engineer => engineer.getRole() === "Engineer")
            .map(engineer => genEmployee(engineer))
            );
            html.push(team 
                .filter(intern => intern.getRole() === "Intern")
                .map(intern => genEmployee(intenr))
                );
                return html.join("");
}

module.exports = team => {
    return `<div>${genTeam(team)}</div>`;
};