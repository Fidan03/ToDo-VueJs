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

        addItem:(state) => {
            // console.log(state);
            
            if (state.inputValue.trim() !== '') {
                state.todoList.push(state.inputValue.trim());
                state.inputValue = '';
            }
        },

        inputChange (state, payload) {
            // console.log('inputChange', payload);
            
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

    }
})

export default store