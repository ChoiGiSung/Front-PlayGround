import Vuex from 'vuex'

const storeItems = {
    fetch(){
        const arr = []
        if (localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++){
                let item = localStorage.getItem(localStorage.key(i))
                arr.push(JSON.parse(item))
            }
          }

          return arr
    }
}

export const store = new Vuex.Store({
    state:{
        todoItems: storeItems.fetch()
    },
    mutations : {

    },
    getters: {
        getTodoItems (state) {
            return state.todoItems;
        }
    }
})