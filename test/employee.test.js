const Employee = require('../employee')

describe("Employee", () => {
    
    describe("Initialize New Employee", () => {
        it("should return new Employee", () => {
            const obj = new Employee();
            expect(obj).toEqual(new Employee())
        });
    })
    
    describe("When I create a new instance of Employee", () => {
        it('should take in a parameter store it in a new instance',()=>{
        const result = new Employee('Jhon','123', 'email') 
        // takes user input and stores it 
        // returns that input
        expect(result.name).toEqual('Jhon');  
        expect(result.id).toEqual('123');
        expect(result.email).toEqual('email');   
        });
    });
}) 
