import {createStore} from 'vuex';

export default const store = createStore ({
    state() {
        return {
            inputValue: '',
            todoList: [],
            editingText: '',
            editingIndex: null
        };
    },

    mutations: {
        addItem(state) {
            if (state.inputValue.trim() !== '') {
                state.todoList.push(state.inputValue.trim());
                state.inputValue = '';
            }
        },
        deleteItem(state) {
            state.todoList.splice( index, 1);
        },
        modalValue(state) {
            state.editingIndex = index;
            state.editingText = state.todoList[index];
        },
        updateTodo(state) {
            state.todoList[state.editingIndex] = state.editingText;
        }
    }
})