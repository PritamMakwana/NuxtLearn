<script setup>
const counter = useCounter();
</script>
<template>
    <div>
        <h1>Counter Component</h1>
        <p>Count: {{ counter}}</p>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>