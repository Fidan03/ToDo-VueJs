<template>
  <div class="todos">
    <ul v-for="todo in todoList">

      <li v-if="!todo.completed" :key="todo.id">
        <label class="custom-checkbox">
          <input type="checkbox" :checked="todo.completed" @change="toggleCompletion(todo.id)"/>
          <span class="checkmark"></span>
          <span class="todo-text" :class="{completed: todo.completed}">{{ todo.text }}</span>
        </label>

        <span class="icons">
          <i class="pi pi-pencil" @click="openEditModal(todo.id)"></i>
          <i class="pi pi-trash" @click="deleteTodo(todo.id)"></i>
        </span>
        
      </li>
    </ul>

    <Modal v-if="isModalOpen" :todoId="selectedTodoId" @close="closeEditModal"/>

  </div>
</template>



<script>
import { defineComponent } from 'vue';
import Modal from './modal.vue';
import store from '../store/index.js'
import { mapState, mapActions } from 'vuex';

export default defineComponent({
  name: 'List',

  props: {
    todo: {
      type: Object, 
      required: true,
    }
  },

  components: {
    Modal
  },

  data() {
    return {
      isModalOpen: false,
      store
    }
  },

  methods: {
    ...mapActions(['deleteTodo', 'complatedTodo']),

    openEditModal (id) {
      this.selectedTodoId = id;
      this.isModalOpen = true;
    },

    closeEditModal() {
      this.isModalOpen = false;
      this.selectedTodoId = null;
    },

    toggleCompletion(todoId) {
      this.complatedTodo(todoId);
    }

  },

  computed: {
    ...mapState(['todoList'])
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
