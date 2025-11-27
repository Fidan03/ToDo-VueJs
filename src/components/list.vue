<template>
  <div class="todos">
    <ul>
      <li v-for="(item, index) in store.todoList" :key="index">
        <label class="custom-checkbox">
          <input type="checkbox" @change="deleteItem(index)"/>
          <span class="checkmark"></span>
          <span class="todo-text" >{{item}}</span>
        </label>

        <span class="icons">
          <i class="pi pi-pencil" @click="showModal = true; modalValue(index)"></i>
          <i class="pi pi-trash" @click="deleteItem(index)"></i>
        </span>
      </li>
    </ul>

    <Modal :isVisible="showModal" @close="showModal = false" @save="saveChanges"/>

  </div>
</template>



<script>
import { defineComponent } from 'vue';
import {store, deleteItem, modalValue, updateTodo} from '../store/index.js'
import Modal from './modal.vue';

export default defineComponent({
  name: 'List',
  components: {
    Modal
  },
  data() {
    return {
      store,
      showModal: false
    }
  },
  methods: {
    deleteItem,
    modalValue,
    updateTodo,
    saveChanges(newText) {
      store.updateTodo(store.editingIndex, newText);
      this.showModal = false;
    }
  }
});
</script>




<style lang="scss" scoped>
.todos {
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;

      .custom-checkbox {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        user-select: none;

        input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }

        .checkmark {
          width: 20px;
          height: 20px;
          background-color: white;
          border: 2px solid darkolivegreen;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;

          &::after {
            content: "✔";
            color: white;
            font-size: 16px;
            display: none;
          }
        }

        input:checked + .checkmark {
          background-color: darkolivegreen;
          border-color: darkolivegreen;
        }

        input:checked + .checkmark::after {
          display: block;
        }

        .todo-text {
          font-size: 20px;
        }
      }

      .icons {
        display: flex;
        gap: 10px;
        color: rgba(134, 134, 134, 0.95);

        i {
          font-size: 16px;
          cursor: pointer;
          transition: color 0.2s;

          &:hover {
            color: darkolivegreen;
          }
        }
      }
    }
  }
}
</style>
