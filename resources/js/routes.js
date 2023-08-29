const Showcase = () => import('./components/Showcase.vue')
const About = () => import('./components/About.vue')
const BlogList = () => import('./components/blogs/BlogList.vue')
const BlogDetails = () => import('./components/blogs/BlogDetails.vue')
const BlogCreate = () => import('./components/blogs/BlogCreate.vue')
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Showcase
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'blog-list',
        path: '/blogs',
        component: BlogList
    },
    {
        name: 'blog-create',
        path: '/blogs/create',
        component: BlogCreate
    },
    {
        name: 'blog-details',
        path: '/blogs/:id',
        component: BlogDetails
    },
    // {
    //     name: 'categoryList',
    //     path: '/category',
    //     component: CategoryList
    // },
    // {
    //     name: 'categoryEdit',
    //     path: '/category/:id/edit',
    //     component: CategoryEdit
    // },
    // {
    //     name: 'categoryAdd',
    //     path: '/category/add',
    //     component: CategoryCreate
    // }
]