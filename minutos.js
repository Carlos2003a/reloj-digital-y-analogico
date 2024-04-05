// función para actualizar el reloj digital
function updateDigitalClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digitalClock').innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  function updateAnalogClock() {
    const now = new Date();
    // calcula las horas, minutos y segundos
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.querySelector('.hora');
    const minuteHand = document.querySelector('.minuto');
    const secondHand = document.querySelector('.segundo');
  
    const hourAngle = (hour * 30) + (minute / 2);
    const minuteAngle = (minute * 6) + (second / 10);
    const secondAngle = second * 6; 
  // rotar las manecillas del reloj analogico
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  
    const hourMarkers = document.querySelector('.hour-markers');
    hourMarkers.innerHTML = '';
  
    for (let i = 0; i < 12; i++) {
      const hourMarker = document.createElement('div');
      hourMarker.classList.add('hour-marker');
      hourMarker.style.transform = `rotate(${i * 30}deg)`;
      hourMarkers.appendChild(hourMarker);
    }
  }
  setInterval(() => {
    updateDigitalClock();
    updateAnalogClock();
  }, 1000);
  // inicializa los relojes cuando se carga la página
  updateDigitalClock();
  updateAnalogClock(); 