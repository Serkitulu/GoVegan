function greeting (name,lastname){
    console.log ('hello' +' ' + name +' '+ lastname);
}
 greeting('Serki','Tulu');

 const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
