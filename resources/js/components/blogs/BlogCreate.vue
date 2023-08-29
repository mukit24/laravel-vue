<template>
    <div class="row p-4 justify-content-center">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4>Create Blog</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" required v-model="blog.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" required v-model="blog.description">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "add-blog",
    data() {
        return {
            blog: {
                title: "",
                description: ""
            }
        }
    },
    methods: {
        async create() {
            await this.axios.post('/api/blogs', this.blog).then(response => {
                this.$router.push({ name: "blog-list" })
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>