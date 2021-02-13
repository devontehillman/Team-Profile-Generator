const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    
    describe("Initialize New Engineer", () => {
        it("should return new Engineer", () => {
            const obj = new Engineer();
            expect(obj).toEqual(new Engineer())
        });
    });
    
    describe("When I create a new instance of Engineer", () => {
        it('should take in a parameter store it in a new instance',()=>{
        let result = new Engineer('John','123','email', 'username') 
        // takes user input and stores it 
        // returns that input
        expect(result.name).toEqual('John');  
        expect(result.id).toEqual('123');
        expect(result.email).toEqual('email');
        expect(result.gitHub).toEqual('username');   
        });
    });

    describe("When I call the get___() function",()=>{
        it('should return the information of the given Engineer',()=>{
        let result = new Engineer('John','123','email','username') 
        
        expect(result.getGithub()).toEqual('username');
        expect(result.getRole()).toEqual('Engineer');
        });
    });

}) 
