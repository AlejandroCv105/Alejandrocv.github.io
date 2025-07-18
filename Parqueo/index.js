// Posiciones absolutas de los parqueos
const slots = [
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3")
];

const car = document.getElementById("car");
let currentSlot = 0; // empieza en el primer parqueo

// Colocar el auto inicialmente
window.onload = () => {
  positionCar(currentSlot);
};

function positionCar(index) {
  const slot = slots[index];
  const rect = slot.getBoundingClientRect();
  const lotRect = document.querySelector(".parking-lot").getBoundingClientRect();

  const offsetLeft = rect.left - lotRect.left + (slot.clientWidth - car.clientWidth) / 2;
  car.style.left = `${offsetLeft}px`;
}

function moveCar(direction) {
  if (direction === 'left' && currentSlot > 0) {
    currentSlot--;
    positionCar(currentSlot);
  } else if (direction === 'right' && currentSlot < 2) {
    currentSlot++;
    positionCar(currentSlot);
  }
}

