function sort(){
    const name = document.getElementById('name').value;
    let number = Math.floor(Math.random()*4)+1;
    let team;

    if (number === 1){
        team = 'Gryffindor';
    } else if (number === 2){
        team = 'Hufflepuff';
    } else if (number === 3 ){
        team = 'Slytherin';
    } else {
        team = 'Ravenclaw';
    }
    document.getElementById('result').textContent = `${name}, congradulations, you are in ${team}!`
}