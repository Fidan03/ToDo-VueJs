<script>
import {store, updateTodo} from '../store/index.js'
    export default {
        name: 'Modal',
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        save() {
            this.$emit('save', this.store.editingText);
        }
    },
    data() {
        return {
            store
        }
    }
}


</script>



<template>
    <div class="modalContainer" v-if="isVisible">
        <div class="modal">

            <div class="header">
                <h1>EDIT NOTE</h1>
                <input type="text" v-model="store.editingText">
            </div>

            <div class="buttons">
                <button type="button" @click="closeModal" class="cancel">CANCEL</button>
                <button type="submit" class="modify" @click="updateTodo(store.editingIndex, store.editingText)">MODIFY</button>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.modalContainer {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 80px;

    .modal {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid darkolivegreen;
        border-radius: 15px;
        box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.5);
        width: 500px;
        height: 250px;
        position: relative;
        justify-content: space-around;

        .header {
            display: inline;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                color: darkolivegreen;
            }

            input {
                width: 100%;
                height: 30px;
                border-radius: 10px;
                border: 2px solid darkolivegreen;
            }
        }

        .buttons {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .cancel,
            .modify
            {
                width: 110px;
                height: 30px;
                border-radius: 10px;
                border: 1px solid darkolivegreen;
                font-size: 15px;
                cursor: pointer;
            }

            .cancel {
                background: none;
                color: darkolivegreen;
            }

            .modify {
                background-color: darkolivegreen;
                color: white;
            }
        }

    }
}
</style>