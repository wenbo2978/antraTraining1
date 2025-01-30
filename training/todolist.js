// MVC pattern
// Model View Controller => whole application
// View ==> something that users can see => User Interface
// Controller => Trigger by user events, when user interact with the View, it triggers controller
// Model ==> database, data. Data will be updated when Controller has been triggered
// The browser will rerender the page based on the updated data

//MVC - Model View Controller
//    --state

const Api = (() => {

    const getTodoList = () => {
        return fetch("https://jsonplaceholder.typicode.com/todos").then((res)=> res.json())
    }

    return { getTodoList }
})()


const View = (() => {

    const domSelector = {
        task_container: document.querySelector("#task_container"),
        addBtn: document.querySelector("#add"),
        inputForm: document.querySelector("#input"),
    }


    const createTemp = (dataArr) => {
        let temp = ""
        for (let item of dataArr) {
            temp += `<li>${item.title}
                <span>
                    <button id="todoBtn_${item.id}">x</button>
                </span>
            </li>`
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


const Model = ((api, view) => {


    const { getTodoList } = api
    const { createTemp, render } = view
    const task_container = document.querySelector("#task_container")

    class State {


        constructor() {
            this._dataList = []
        }

        get dataList() {
            return this._dataList
        }

        set dataList(newList) {
            this._dataList = newList
            const temp = createTemp(this._dataList)
            render(task_container, temp)
        }

    }

    return {
        State,
        createTemp,
        render,
        getTodoList
    }


})(Api, View)

const Controller = ((view, model) => {



    const { domSelector, createTemp, render } = view
    const { State,getTodoList } = model

    const state = new State()
    //    state.dataList = api



    domSelector.addBtn.addEventListener('click', () => {

        // domSelector.inputForm.value
        const newList = [...state.dataList, { title: domSelector.inputForm.value }]
        state.dataList = newList
        // console.log(domSelector.inputForm.value)
    })

    domSelector.task_container.addEventListener('click',(event)=>{


        console.log(event)
        const id = event.target.id

        const newList = [...state.dataList.filter((item)=> 'todoBtn_'+item.id !== id)]
        state.dataList = newList


    })

    const bootstrap = () => {

        getTodoList().then(

            (res) => {
                state.dataList= res.slice(0,5)
            }
        )
    }
    return {bootstrap}

})(View, Model)

Controller.bootstrap()



