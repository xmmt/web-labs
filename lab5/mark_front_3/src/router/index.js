import Vue from 'vue'
import Router from 'vue-router'
import MarkdownList from '../components/MarkdownList.vue'
import MarkdownNew from '../components/MarkdownNew.vue'
import MarkdownEdit from '../components/MarkdownEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MarkdownList',
      component: MarkdownList
    },
    {
      path: '/mark/new',
      name: 'MarkdownNew',
      component: MarkdownNew
    },
    {
      path: '/mark/:id',
      name: 'MarkdownEdit',
      component: MarkdownEdit
    }
  ]
})
