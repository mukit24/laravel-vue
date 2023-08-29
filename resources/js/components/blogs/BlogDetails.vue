<template>
    <div class="container p-3">
        <h3 class="text-success">{{ blog.title }}</h3>
        <h6>Description: <span class="text-muted"> {{ blog.description }}</span></h6>
    </div>
</template>

<script>
export default {
    name: "blog-list",
    data() {
        return {
            blog:{
                title:"",
                description:""
            }
        }
    },
    mounted() {
        this.getBlogDetails()
    },
    methods: {
        async getBlogDetails() {
            await this.axios.get(`/api/blogs/${this.$route.params.id}`).then(response => {
                console.log(response);
                const { title, description } = response.data.blog;
                this.blog.title = title;
                this.blog.description = description;
            }).catch(error => {
                console.log(error)
            })
        },
    }
}
</script>