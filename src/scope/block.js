function fruits () {
    if(true) {
        var fruit1 ='Apple'; // Alcance de function Scope
        let fruit2 ='Kiwi'; // Alcance de block scope
        const fruit3 ='Banana'; // Alcance de block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();

