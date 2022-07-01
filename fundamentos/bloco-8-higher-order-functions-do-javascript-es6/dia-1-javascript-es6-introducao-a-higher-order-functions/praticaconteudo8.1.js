
const wakingUp = () => 'Acordando!!';


const coffeTime = () => 'Bora tomar café!!'

const sleepTime = () => 'Partiu dormir!!'


const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(wakingUp);

doingThings(coffeTime);

doingThings(sleepTime);