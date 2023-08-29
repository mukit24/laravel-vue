<template>
    <div class="container p-3">
        <h3 class="text-center text-success">All Blogs</h3>
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <router-link to="/blogs/create"><button class="btn btn-dark mb-4"> Create Blog</button></router-link>
                <ul class="list-group" v-if="blogs.length > 0">
                    <div v-for="blog in blogs">
                        <li class="list-group-item"><router-link :to="{ name: 'blog-details', params: { id: blog.id } }">{{ blog.title }}</router-link></li>
                    </div>
                </ul>
                <h5 class="text-danger" v-else>No data found</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "blog-list",
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.getBlogs()
    },
    methods: {
        async getBlogs() {
            await this.axios.get('/api/blogs').then(response => {
                console.log(response);
                this.blogs = response.data
            }).catch(error => {
                console.log(error)
                this.blogs = []
            })
        },
    }
}
</script>