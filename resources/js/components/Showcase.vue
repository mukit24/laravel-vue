<template>
    <div class="container p-4">
        <h2 class="text-primary">{{ greeting }}</h2>
        <h5 class="text-success" v-if="status">Successfully Join</h5>
        <h5 class="text-danger" v-else>Not Joined yet</h5>
        <button class="btn btn-primary" @click="changeStatus">Join US</button>
    </div>
</template>

<script>
export default {
    name: 'Showcase',
    data() {
        return {
            greeting: 'Welcome to Laravel-vue',
            status: false,
        };
    },
    methods: {
        changeStatus() {
            this.status = true;
        }
    }
}
</script>