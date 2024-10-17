import Vue from 'vue'
import Vuex from 'vuex'
import * as users from '@/store/modules/users.js'
import * as userPosts from '@/store/modules/userPosts'
import * as userAlbums from '@/store/modules/userAlbums'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    userPosts,
    userAlbums
  }
})
