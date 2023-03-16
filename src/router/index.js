import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import RepoRight from "../components/RepoRight"
import RepoDetails from "../components/RepoDetails"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: '/repoList',
            component: RepoRight
        },
        {
            path: '/repoLists/:name',
            name: 'RepoDetails',
            component: RepoDetails
        },
        {
            path: "/:catchALL(.*)*",
            name: "404Page",
            component: NotFoundView
        }
    ]
})

export default router