const View = (() => {

  const domSelector = {
      task_container: document.querySelector("#task_container"),
      start_button: document.querySelector("#start_button"),
      score: document.querySelector("#score"),
      time_left: document.querySelector('#time_left')
  }


  const createTemp = (length) => {
      let temp = ""
      for (let i = 0; i < length; i ++) {
          temp += `
            <div class="div_cell" id="div_${i}">
              <img id="icon_${i}" class="icon icon_hidden" src="./mole.jpeg" />
            </div>`
      }
      return temp
  }

  const render = (ele, template) => {
      ele.innerHTML = template
  }



  return {
      domSelector,
      createTemp,
      render
  }

})()



const Model = ((view) => {

  const {
    domSelector,
    createTemp,
    render
  } = view

  class State {


      constructor() {
          this._score = 0
          this._game = "off"
          this._arr = new Array(12)
          this._count = 0
          this._timer = {
            id: -1,
            timeLeft: 30
          }
          for(let i = 0; i < 12; i ++){
            this._arr[i] = {
              display: 0,
              timeId: -1
            }
          }
      }

      get score() {
          return this._score
      }

      get gameState(){
        return this._game
      }

      getMoleByIndex(index){
        return this._arr[index]
      }

      setMoleByIndex(index, obj){
        this._arr[index] = obj
      }

      addScore(){
        this._score += 1
        this.reduceCount()
        render(domSelector.score, this._score)
      }

      reset(){
        this._game = "off"
        this._score = 0
        this._timer = {
          id: -1,
          timeLeft: 30
        }
        this._count = 0
        for(let i = 0; i < 12; i ++){
          const obj = this._arr[i]
          if(obj.display === 1){
            clearTimeout(obj.timeId)
            obj.display = 0
            obj.timeId = -1
            document.getElementById("icon_" + i).classList.add('icon_hidden')
          }
        }
        render(domSelector.score, this._score)
        render(domSelector.time_left, this._timer.timeLeft)
      }

      startGame(){
        this._game = "on"
        this._score = 0
        render(domSelector.score, this._score)
        render(domSelector.time_left, this._timer.timeLeft)
      }

      printTime(){
        this._timer.timeLeft --;
        render(domSelector.time_left, this._timer.timeLeft)
        return this._timer;
      }

      setTimer(obj){
        this._timer = obj
      }

      getTimer(){
        return this._timer
      }

      get count(){
        return this._count;
      }

      addCount(){
        this._count ++;
      }

      reduceCount(){
        this._count --;
      }

      

  }

  return {State}


})(View)

const Controller = ((view, model) => {
  const {domSelector,
    createTemp,
    render} = view

  const {State} = model

  const state = new State()

  let gameIntervalId;

  const gameStart = () => {
    const myGameId = setInterval(() => {
      if(state.count < 3){
        //console.log('more than 3 moles')
      
        const targetId = Math.floor(Math.random() * 12)
        //console.log(targetId)
        const obj = state.getMoleByIndex(targetId)
        //console.log(obj)
        if(obj.display === 0){
          //new
          state.addCount();
          const doc = document.getElementById("icon_" + targetId);
          doc.classList.remove('icon_hidden');
          obj.timeId = setTimeout(() => {
            doc.classList.add('icon_hidden')
            obj.display = 0
            state.reduceCount()
          }, 2000)
          obj.display = 1;
          //state.setMoleByIndex(targetId, )
        }else{
          //extension
          clearTimeout(obj.timeId);
          const doc = document.getElementById("icon_" + targetId);
          //doc.classList.remove('icon_hidden');
          obj.timeId = setTimeout(() => {
            doc.classList.add('icon_hidden')
            obj.display = 0
            state.reduceCount()
          }, 2000)
        }
      }
    }, 1000)

    return myGameId
  }

  const GameReset = (id) => {
    clearInterval(id)

  }

  const bootstrap = () => {
    render(domSelector.task_container, createTemp(12))
  }

  //add eventListener

  domSelector.start_button.addEventListener('click', (event) => {
    if(state.gameState === 'off'){
      gameIntervalId = gameStart();
      state.startGame();
      domSelector.start_button.innerHTML = "Reset"
      const timeId = setInterval(() => {
        const timer = state.printTime();
        if(timer.timeLeft < 0){
          alert("Time is over")
          GameReset(gameIntervalId)
          clearInterval(timer.id)
          state.reset()
          domSelector.start_button.innerHTML = "Click me to start!"
        }
      }, 1000)
      state.setTimer({id: timeId, timeLeft: 30})
    }else{
      const timer = state.getTimer();
      clearInterval(timer.id)
      state.reset()
      domSelector.start_button.innerHTML = "Click me to start!"
      GameReset(gameIntervalId)
      
      
    }
  })

  domSelector.task_container.addEventListener('click', (event) => {
    //console.log(event.target.id.split('')[0]);
    if(state.gameState === 'on'){
      
      const list = event.target.id.split('')
      //console.log(list)
      if(list[0] === 'i'){
        state.addScore()
        let clickId;
        if(list.length === 6){
          clickId = Number(list[5])
        }else{
          clickId = Number(list[5]) * 10 + Number(list[6])
        }
        //console.log(clickId)
        const obj = state.getMoleByIndex(clickId);
        clearTimeout(obj.timeId)
        obj.display = 0
        obj.timeId = -1
        document.getElementById("icon_" + clickId).classList.add('icon_hidden')
      }
    }
  })
  
  return {bootstrap}

})(View, Model)


Controller.bootstrap()
