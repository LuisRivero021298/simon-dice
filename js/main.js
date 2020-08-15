const btnStart = document.getElementById('btnStart');
const lightBlue = document.getElementById('lightBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');

class Game {
  constructor() {
    this.start();
    this.generateSequence();
    this.nextLevel();
  }

  start () {
    btnStart.classList.add('hide');
    this.level = 1;
    this.colors = {
      lightBlue,
      violet,
      orange,
      green
    }
  }

  generateSequence() {
    this.sequence = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.iliminateSequence();
  }

  numberToColor(num){
    switch(num) {
      case 0: 
        return 'lightBlue';
      case 1: 
        return 'violet';
      case 2:
        return 'orange';
      case 3: 
        return 'green';
    }
  }

  iliminateSequence() {
    for (let i = 0; i < this.level; i++) {
      let color = this.numberToColor(this.sequence[i]);
      setTimeout(() => this.iliminateColor(color), 1000 * i);
    }
  }

  iliminateColor(color) {
    this.colors[color].classList.add('light');
    setTimeout(() => this.colors[color].classList.remove('light'), 500);
  }
}

function startGame() {
  let game = new Game();
}