import {createStore} from 'vuex';

const store = createStore ({
    state() {
        return {
            todoList: JSON.parse(localStorage.getItem('todoList')) || [],
            completedTodos: JSON.parse(localStorage.getItem('completedTodos')) || []
        };
    },
    

    mutations: {

        addItem(state, newTodo) {

            state.todoList.push(newTodo);
            localStorage.setItem('todoList', JSON.stringify(state.todoList));

        },

        deleteItem(state, todoId) {
            state.todoList = state.todoList.filter(todo => todo.id !== todoId);
            localStorage.setItem('todoList', JSON.stringify(state.todoList));
        },

        updateTodo(state, {id, newText}) {

            const todo = state.todoList.find(todo => todo.id === id); 
            if (todo) {
                todo.text = newText;
                localStorage.setItem('todoList', JSON.stringify(state.todoList));
            }

        },

        toggleTodoCompletion(state, todoId) {
            const todo = state.todoList.find(todo => todo.id === todoId);
            if (todo) {
                todo.completed = !todo.completed;

                console.log('Todo toggled:', todo);


                if (todo.completed) {
                    state.completedTodos.push(todoId);
                } else {
                    state.completedTodos = state.completedTodos.filter(id => id !== todoId);
                }

                localStorage.setItem('todoList', JSON.stringify(state.todoList));
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
        },

        completedTodos (state) {
            return state.todoList.filter (todo => todo.completed);
        },

        getCompletedTodoIds(state) {
            return state.completedTodos;
        }
    }
})


export default store