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
    

    mutations: {

        addItem(state, newTodo) {

            state.todoList.push(newTodo);

        },

        deleteItem(state, todoId) {
            state.todoList = state.todoList.filter(todo => todo.id !== todoId)
        },

        updateTodo(state, {id, newText}) {

            const todo = state.todoList.find(todo => todo.id === id); 
            if (todo) {
                todo.text = newText;
            }

        },

        toggleTodoCompletion(state, todoId) {
            const todo = state.todoList.find(todo => todo.id === todoId);
            if (todo) {
                todo.completed != todo.completed;
            }
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
        },

        deleteTodo ({commit}, todoId) {
            commit('deleteItem', todoId);
        },

        editTodo({commit}, payload) {
            commit('updateTodo', payload);
        },

        complatedTodo ({commit}, todoId) {
            commit('toggleTodoCompletion', todoId);
        }
    },

    getters: {
        getTodoById: (state) => (id) => {
            return state.todoList.find(todo => todo.id === id);
        }
    }
})


export default store