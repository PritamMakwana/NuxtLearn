<script setup>
const { sayHello } = useUtils();
sayHello();
</script>
<template>
    <div>
    <h1>Home</h1>
    <Layout />
    <LayoutHeader />
    <LayoutProfile/>
    <LayoutProfileAvatar />
    <Alert />
    </div>
</template>
