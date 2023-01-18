let exercise1 = +prompt('Введите число', '')
if (typeof +exercise1 !== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(exercise1 % 2)) {
  alert('Упс, кажется, вы ошиблись')
} else if (exercise1 % 2 === 0) {
  alert('Число четное')
} else {
  alert('число нечетное')
}