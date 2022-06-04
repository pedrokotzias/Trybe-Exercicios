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
  let holidayButton = document.querySelector('#btn-holiday');
  let allHolidays = document.querySelectorAll('.holiday')
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

// Exercicio 4
function highlightFridays(fridayButton) {
  let createFridayButton = document.createElement('button');
  let buttonsContainer = document.querySelector('.buttons-container');
  createFridayButton.id = 'btn-friday';
  createFridayButton.innerHTML = fridayButton;
  buttonsContainer.appendChild(createFridayButton);
}

highlightFridays('Sexta-feira');

// Exercicio 5
function hightlightFriday(fridaysArray) {
  let fridayButton = document.querySelector('#btn-friday');
  let allFridays = document.getElementsByClassName('friday')

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < allFridays.length; index += 1) {
      if (allFridays[index].innerHTML !== 'SEXTOU o/') {
        allFridays[index].innerHTML = 'SEXTOU o/';
      } else {
        allFridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [4, 11, 18, 25];
hightlightFriday(dezFridays);

// Exercicio 6
function dayMouseOver() {
  let daysOfTheMonth = document.querySelector("#days");
  
  daysOfTheMonth.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let daysOfTheMonth = document.querySelector("#days");
  
  daysOfTheMonth.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

dayMouseOver();
dayMouseOut();

// Exercicio 7
function personalTask(task) {
  let taskSpan = document.createElement('span');
  let taskFather = document.querySelector('.my-tasks');
  taskFather.appendChild(taskSpan);
  taskSpan.innerHTML = task;  
};

personalTask('Terminar Estudos');

// Exercicio 8
function personalTaskColoring(color) {
  let taskColoring = document.createElement('div');
  let taskFather = document.querySelector('.my-tasks');
  taskColoring.className = 'task';
  taskFather.appendChild(taskColoring);
  taskColoring.style.backgroundColor = color; 
};

personalTaskColoring('darkseagreen')

//Exercicio 9
function addSelectedTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let tasks = document.querySelector('.task');

  tasks.addEventListener('click', function(event) {
    if(selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }    
  });
};

addSelectedTaskClass();

// Exercicio 10
function attribuitTaskColorDay() {
  let pickColor = document.getElementsByClassName('task selected');
  let selectedDay = document.querySelector('#days');
  let taskBackground = document.querySelector('.task');
  let taskColor = taskBackground.style.backgroundColor;

  selectedDay.addEventListener('click', function(event) {
    let targetedColor = event.target.style.color;
    if(pickColor.length > 0 && targetedColor !== taskColor) {
      let color = pickColor[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (targetedColor === taskColor && pickColor.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

attribuitTaskColorDay();

// Exercicio Bonus
