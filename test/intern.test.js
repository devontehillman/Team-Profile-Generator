const Intern = require('../intern')

describe("Intern", () => {
    
    describe("Initialize New Intern", () => {
        it("should return new Intern", () => {
            const obj = new Intern();
            expect(obj).toEqual(new Intern())
        });
    });
    
    describe("When I create a new instance of Intern", () => {
        it('should take in a parameter store it in a new instance',()=>{
        let result = new Intern('John','123','email', 'gvsu') 
        // takes user input and stores it 
        // returns that input
        expect(result.name).toEqual('John');  
        expect(result.id).toEqual('123');
        expect(result.email).toEqual('email');
        expect(result.school).toEqual('gvsu');   
        });
    });

    describe("When I call the get___() function",()=>{
        it('should return the information of the given intern',()=>{
        let result = new Intern('John','123','email','gvsu') 
        
        expect(result.getSchool()).toEqual('gvsu');
        expect(result.getRole()).toEqual('Intern');
        });
    });


}) 
