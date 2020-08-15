const btnStart = document.getElementById('btnStart');
const lightBlue = document.getElementById('lightBlue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const lastLevel = 10;

class Game {
  constructor() {
    this.start();
    setTimeout(() => {
      this.generateSequence();
      this.nextLevel();
    }, 700);
  }

  start () {
    this.chooseColor = this.chooseColor.bind(this);
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
    this.subLevel = 0;
    this.iliminateSequence();
    this.addClickEvents();
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

  colorToNumber(color){
    switch(color) {
      case 'lightBlue': 
        return 0;
      case 'violet': 
        return 1;
      case 'orange':
        return 2;
      case 'green': 
        return 3;
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

  addClickEvents(){
    this.colors.lightBlue.addEventListener('click', this.chooseColor);
    this.colors.violet.addEventListener('click', this.chooseColor);
    this.colors.orange.addEventListener('click', this.chooseColor);
    this.colors.green.addEventListener('click', this.chooseColor);
  }

  removeClickEvents(){
    this.colors.lightBlue.removeEventListener('click', this.chooseColor);
    this.colors.violet.removeEventListener('click', this.chooseColor);
    this.colors.orange.removeEventListener('click', this.chooseColor);
    this.colors.green.removeEventListener('click', this.chooseColor);
  }

  chooseColor (ev) {
    let colorName = ev.target.dataset.color;
    const numberColor = this.colorToNumber(colorName);
    this.iliminateColor(colorName);
    
    if(numberColor === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        //this.removeClickEvents();
        if(this.level === (lastLevel + 1)){
          //Win
        } else {
          setTimeout(() => this.nextLevel(), 1700) ;
        }

      }
    } else {
      //defeat

    }

  }
}

function startGame() {
  let game = new Game();
}