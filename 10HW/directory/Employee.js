class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    };
    getRole(){
        return "Employee";
    };
    getId() {
        return this.idl
    };
    getName() {
        return this.id;
    };
    getEmail(){
        return this.email;
    };
};
module.exports = Employee;