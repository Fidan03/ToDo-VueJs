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
    
    if (index !== -1) {
        store.todoList.splice( index, 1);
    } else {
        alert('Item not exist!');
    }
}


export const modalValue = (index) => {
    store.editingIndex = index;
    store.editingText = store.todoList[index];
}

export const saveChanges = () => {
    store.editingText = 
}
