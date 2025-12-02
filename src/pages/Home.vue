<script>
import List from '../components/list.vue';
import store from '../store/index.js'
import { mapState, mapActions } from 'vuex';

import { Dropdown, Menu, MenuItem } from 'ant-design-vue';
import { DownOutlined } from '@ant-design/icons-vue';

export default {
  name: 'Home',

  components: {
    List,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: MenuItem,
    DownOutlined
  },

  data () {
    return {
      newTodoText: ''
    }
  },

  computed: {
    ...mapState(['todoList']),
  },

  methods: {
    ...mapActions(['addTodo']),

    handleAddTodo() {
      if (this.newTodoText.trim()) {
        this.addTodo({ text: this.newTodoText });
        this.newTodoText = '';
      }
    }
  }
}
</script>


<template>
  <div class="container">
    <h1>TODO LIST</h1>

    <div class="inputField">

      <div class="input">
        <input type="text" placeholder="Search note ..." v-model="newTodoText"/>
        <p><i class="pi pi-search"></i></p>
      </div>

      <div class="buttons">

        <div class="filterBtn">
          <a-dropdown trigger="click">
            <a class="ant-dropdown-link">
              Filter <DownOutlined />
            </a>

            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a>All</a>
                </a-menu-item>

                <a-menu-item>
                  <a>Completed</a>
                </a-menu-item>

                <a-menu-item>
                  <a>Uncompleted</a>
                </a-menu-item>
              </a-menu>
            </template>

          </a-dropdown>
        </div>

        <button>
          <i class="pi pi-moon"></i>
        </button>

      </div>
    </div>

    <List/>

    <button class="add" @click="handleAddTodo()">+</button>

  </div>
</template>



<style scoped lang="scss">
.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 750px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: darkolivegreen;
  }

  .inputField {
    display: flex;
    gap: 15px;
    width: 100%;
    margin-bottom: 30px;

    .input {
      display: flex;
      align-items: center;
      border: 2px solid darkolivegreen;
      border-radius: 10px;
      padding: 0 15px;
      flex: 1;

      input {
        flex: 1;
        height: 40px;
        border: none;
        outline: none;
        font-size: 15px;
      }

      input::placeholder {
        color: rgba(211, 210, 210, 0.95);
      }

      p i {
        color: darkolivegreen;
        cursor: pointer;
      }
    }

    .buttons {
      display: flex;
      gap: 10px;

      .filterBtn {
        display: flex;
        align-items: center;
        background-color: darkolivegreen;
        color: white;
        padding: 0 10px;
        border-radius: 10px;
        gap: 10px;
        height: 54px;
        cursor: pointer;
      }

      button {
        background-color: darkolivegreen;
        border: none;
        color: white;
        height: 54px;
        width: 54px;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .add {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 30px;
    color: white;
    background-color: darkolivegreen;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: transform 0.2s, background-color 0.2s;

    &:hover {
      transform: scale(1.1);
      background-color: #556b2f;
    }
  }
}
</style>
