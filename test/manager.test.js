const Employee = require("../lib/employee")
const Manager = require("../lib/manager")

describe("Manager", () => {

    describe("Initialize New Manager", () => {
        it("should return new Manager", () => {
            const manager = new Manager();
            expect(manager).toEqual(new Manager())
        });
    })
    
    describe("Manager should extend employee",()=>{
        it("should have all of the properties of Employee plus office number", ()=>{
        let result = new Manager('John','123','email','33d');
        
        expect(result.name).toEqual('John');  
        expect(result.id).toEqual('123');
        expect(result.email).toEqual('email'); 
        expect(result.officeNumber).toEqual('33d');
        });
    });



});