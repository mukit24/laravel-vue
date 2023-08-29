<template>
    <div class="bg-light">
        <Navbar />
        <!-- <Showcase /> -->
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';
    import Showcase from './Showcase.vue';
    export default {
        name: 'App',
        components: {
            Navbar
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
