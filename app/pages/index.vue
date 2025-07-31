<script setup lang="ts">

definePageMeta({
    middleware: ['separate'],
});

const { $sayHello } = useNuxtApp();
$sayHello("Pritam");


const { sayHello } = useUtils();
sayHello();

// server
const { data } = await useFetch('/api/hello')

</script>
<template>
    <div>
    <h1>Home</h1>
    <Layout />
    <LayoutHeader />
    <LayoutProfile/>
    <LayoutProfileAvatar />
    <Alert />
     <pre>{{ data }}</pre>
    </div>
</template>
