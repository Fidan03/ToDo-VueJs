<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import store from '../store/index.js'

export default {
    name: 'Completed',

    computed: {
        ...mapGetters(['completedTodos']),
        ...mapState(['todoList'])
    },

    methods: {
        ...mapActions(['deleteTodo'])
    }
}

</script>



<template>
    <div>
        <h1>COMPLETED</h1>

        <ol v-for="todo in todoList" :key="todo.id">
            <li v-for="todo in completedTodos" :key="todo.id">
                {{ todo.text }}

                <span>
                    <i class="pi pi-trash" @click="deleteTodo(todo.id)"></i>
                </span>
            </li>
        </ol>
    </div>
</template>


<style scoped lang="scss">
div{

    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        color: darkolivegreen;
        font-size: 36px;
        margin-bottom: 20px;
    }

    ol{        
        
        display: inline-flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
        margin: 0;
        padding: 0;

        li {
            font-size: 20px;

            span {
                i {
                    font-size: 17px;
                    margin-left: 50px;
                    cursor: pointer;
                }
            }
        }

    }
}
</style>
