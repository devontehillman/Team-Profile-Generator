const Employee = require('../employee')

describe("Employee", () => {
    
    describe("Initialize New Employee", () => {
        it("should return new Employee", () => {
            const obj = new Employee();
            expect(obj).toEqual(new Employee())
        });
    });
    
    describe("When I create a new instance of Employee", () => {
        it('should take in a parameter store it in a new instance',()=>{
        let result = new Employee('John','123', 'email') 
        // takes user input and stores it 
        // returns that input
        expect(result.name).toEqual('John');  
        expect(result.id).toEqual('123');
        expect(result.email).toEqual('email');   
        });
    });

    describe("When I call the get___() function",()=>{
        it('should return the information of the given employee',()=>{
        // create new instance of employee and set its properties
        let result = new Employee('John','123', 'email') 
        
        expect(result.getName()).toEqual('John');
        expect(result.getId()).toEqual('123');
        expect(result.getEmail()).toEqual('email');
        expect(result.getRole()).toEqual('Employee');
        });
    });


}) 
