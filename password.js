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

// this function collects and prints passwords the desired number of times
let collectAndPrintPasswords = (passwordLength, numberOfPasswordsNeeded) => {
    
    // If only one password is needed, make & print it.
    if (numberOfPasswordsNeeded === 1){
        console.log(makePassword(passwordLength))
    } 
    
    // if more than one password is needed, collect them in an array and print all.
    let passwords=[]
    let num = 1
    if (num <= numberOfPasswordsNeeded){
        num++
        passwords.push(makePassword(passwordLength))
    }
  passwords.forEach(password => console.log(password))
}

// this passes the node CLI arguments (which will be after the node.exe & path aka argv[0] & argv[1]) to & runs the function to create & print all desired passwords.
collectAndPrintPasswords(process.argv[2], process.argv[3])

// done
process.exit(0)