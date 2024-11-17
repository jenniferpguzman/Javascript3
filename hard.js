function personInfo(){
    let PII = {
        name: "Jennifer Guzman",
        SSN: "123-45-6789"
    };

    return{
        getName: function(){
            return PII.name;
        },
        getSSN: function(){
            return PII.SSN;
        }
    };
}

const patient2 = personInfo();