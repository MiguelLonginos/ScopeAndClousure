function greeting() {
    let userName='Miguel';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName();
}

const gree = greeting;
console.log(gree);
console.log(gree());
