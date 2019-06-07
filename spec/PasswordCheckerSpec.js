describe (PasswordChecker, function(){
    let password;
    beforeEach(function() {
        password = new PasswordChecker();
    })

    it ("should be larger than 8 characters", function(){
        expect(password.PasswordLength("buhlebendalo")).toBe(true)
    
})
    it ("should not be null", function(){
        expect(password.type("")).toBe("Password is null")
    })

    it ("should have at least one uppercase letter", function(){
        expect(password.upper_Case("lihleNgwenya")).toBe(true)
    })
    it ("should have at least one lowercase letter", function(){
        expect(password.lower_Case("THANKYoU")).toBe(true)
    })
    it ("should have at least one number", function(){
        expect(password.digit("Palesasit1")).toBe(true)
    })
    it (" should return true if the password passes three of the five tests", function(){
        expect(password.PasswordLength("buhlebend9Lo")).toBe(true)
        expect(password.type("Ntombimko3")).toBe(true)
        expect(password.upper_Case("l1hleNgwenya")).toBe(true)
    })
})
