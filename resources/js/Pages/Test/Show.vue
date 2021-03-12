<template>
    <div>
        <h1>Hello world!</h1>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    if (Vue === undefined) 
        throw new Error("Vue is null!");

    export default class Test extends Vue {

    };
</script>
