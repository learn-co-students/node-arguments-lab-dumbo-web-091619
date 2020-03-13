if (process.argv.length !== 4){
    console.log("Please enter 2 integers separated by whitespace to indicate the desired length and number of of passwords")
}

// this function makes passwords
let makePassword = (passwordLength) => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
    let password=""
    // add random character to password string until desired length is achieved
    for (let i=1; i <= passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      return password
}

// make & print a password until the desired number passed in by the user has been met
for (let i = 1; i<= process.argv[3]; i++){
    console.log(makePassword(process.argv[2]))
}

// done
process.exit(0)