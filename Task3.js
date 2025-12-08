const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function validEmail(email){
    return pattern.test(email);
}

console.log(validEmail("ok@ok.com")); 
