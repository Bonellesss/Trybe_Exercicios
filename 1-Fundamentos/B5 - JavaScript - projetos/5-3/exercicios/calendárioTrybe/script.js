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

// 1 - criar função que adiciona os dias do mes com suas devidas classes

function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    let monthDays = document.querySelector('#days')

    for (let index = 0; index < dezDaysList.length; index++) {
        let dayList = document.createElement('li');
        let monthDay = dezDaysList[index];
        
        dayList.innerHTML = monthDay
        
        
        monthDays.appendChild(dayList)
        
        if (dayList.innerText === 24 || dayList.innerText === 31) {
        dayList.className = "day feriado"
        } else if ( dayList.innerText === 25 ) {
            dayList.className = 'day feriado friday'
        } else if (dayList.innerHTML.match(4) || dayList.innerHTML === 11 || dayList.innerHTML === 18) {
            dayList.className = 'day friday'
        } else {   
            dayList.className = 'day'
        }
    }
}

createDaysOfMonth()