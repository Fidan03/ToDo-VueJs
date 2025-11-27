import {reactive} from 'vue'

export const store = reactive ({
    inputValue: '',
    todoList: [],
    editingText: '',
    editingIndex: null
})

export const addItem = () => {
    // console.log("addItem");
    

    if (store.inputValue.trim() !== '') {
        store.todoList.push(store.inputValue.trim());
        store.inputValue = '';
    }
}

export const deleteItem = (index) => {

    store.todoList.splice( index, 1);
    
}


export const modalValue = (index) => {
    store.editingIndex = index;
    store.editingText = store.todoList[index];
}

export const updateTodo = (index, newText) => {
    store.todoList[index] = newText;
}
