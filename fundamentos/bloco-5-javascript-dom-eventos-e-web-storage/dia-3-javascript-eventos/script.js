function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let daysList = document.querySelector('#days');

  for (index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let creatingDays = document.createElement('li');
    creatingDays.className = 'day';
    creatingDays.innerHTML = day;
    daysList.appendChild(creatingDays);

    if (day === 24 | day === 31) {
      creatingDays.classList.add('holiday');
    } else if (day === 4 | day === 11 | day === 18) {
      creatingDays.classList.add('friday');
    } else if (day === 25) {
      creatingDays.classList.add('holiday', 'friday');
    }
  }
}

createDaysOfTheMonth();

// Exercicio 2
function holidayButton(buttonName) {
  let createHolidayButton = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  createHolidayButton.id = 'btn-holiday';
  createHolidayButton.innerHTML = buttonName;
  buttonsContainer.appendChild(createHolidayButton);
}

holidayButton('Feriados');

// Exercicio 3
function highlightHolidays () {
  const holidayButton = document.querySelector('#btn-holiday');
  const allHolidays = document.querySelectorAll('.holiday')
  holidayButton.addEventListener('click', function() {
    for (let index = 0; index < allHolidays.length; index += 1) {
      if (allHolidays[index].style.backgroundColor === 'lightgreen') {
        allHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        allHolidays[index].style.backgroundColor = 'lightgreen';
      }
    }
  })
};

highlightHolidays();

//myWebpage.addEventListener('mouseover', function() {
 // myWebpage.style.color = 'pink';
//});