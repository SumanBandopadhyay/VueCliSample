import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Description from '@/components/Description'
import Search from '@/components/Search'
import Student from '@/components/Student'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/description',
      name: 'Description',
      component: Description
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    }
  ]
})
