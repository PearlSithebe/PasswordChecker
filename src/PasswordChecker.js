class PasswordChecker {
    constructor(){
    }

    PasswordLength(c) {
        if (c.length > 8) {
        return true
        }
        else {
        return "Password length is short"
        ;}
    }
    type(c){
        if (c == null || c.length == 0) {
        return "Password is null";}
        else {
        return true;
        ;}
        }
    
    upper_Case(c) {
        let rag = /[A-Z]/
        if (c.match(rag) == false ) { 
        return "Your password need at least one uppercase"}
        else {
        return true;
        }
    }
    lower_Case(c) {
        let rag1 = /[a-z]/
        if (c.match(rag1) == false ) { 
        return "Your password need at least one lower"}
        else {
        return true;
        }
    }
    digit(c){
        let num = /[0-9]/
        if (c.match(num) == false ) { 
            return "Your password need at least one number"}
            else {
            return true;
            }
    }
    password_is_ok(c) {
    let rag = /[A-Z]/
    if (c.length > 8 &&c == null || c.length == 0 && c.match(rag) == false ) { 
        
    return true;
    
}

    if (c.length > 8 &&c == null || c.length == 0 && c.match(rag1) == false ) { 
        
    return true;
}
    
    if (c.length > 8 &&c == null || c.length == 0 && c.match(num) == false  ) { 
        
    return true;
}
    else {
    return false;
    

}
}
}