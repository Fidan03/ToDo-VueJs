import {createStore} from 'vuex';

const store = createStore ({
    state() {
        return {
            inputValue: '',
            todoList: [],
            editingText: '',
            editingIndex: null
        };
    },

    getters: {
        getInputValue: (state) => state.inputValue
    },

    mutations: {

        addItem(state, newTodo) {

            state.todoList.push(newTodo);

        },

        inputChange (state, payload) {
            
            state.inputValue = payload;
        },


        deleteItem(state, payload) {
            state.todoList.splice( payload, 1);
        },

        modalValue(state, payload) {
            state.editingIndex = payload;
            state.editingText = state.todoList[payload];
        },

        updateTodo(state) {
            state.todoList[state.editingIndex] = state.editingText;
        }

    },

    actions: {
        addTodo({commit}, todoPayload) {
            const newTodo = {
                id: Date.now(),
                text: todoPayload.text,
                completed: false,
            };

            commit('addItem', newTodo);
        }
    }
})

export default store