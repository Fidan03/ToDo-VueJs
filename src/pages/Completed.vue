<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Completed',

    computed: {
        ...mapGetters(['completedTodos'])
    }
}

</script>



<template>
    <div>
        <h1>COMPLETED</h1>

        <ol>
            <li v-for="todo in completedTodos" :key="todo.id">{{ todo.text }}</li>
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
        margin: 0;
        padding: 0;
        display: inline-flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;

        li {
            font-size: 20px;
        }

    }
}
</style>
