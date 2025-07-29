<script setup>
const counter = useCounter();
</script>
<template>
    <div>
    <div>
        <h1>State Mangment Page</h1>
        <p>Count: {{ counter }}</p>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
    <Counter />
    </div>
</template>