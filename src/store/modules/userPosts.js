/* eslint quotes: ["warn", "single"] */

import { publickClient } from '@/axiosInstances/publickClient'


export const namespaced = true

export const state = {
  userPosts: null,
  postComments: null
}

export const getters = {
  userPosts(state) {
    return state.userPosts
  },
  postComments(state) {
    return state.postComments
  }
}

export const mutations = {
  SET_USER_POSTS(state, userPosts) {
    state.userPosts = userPosts
  },
  SET_POST_COMMENTS(state, postComments) {
    state.postComments = postComments
  }
}

export const actions = {
  async getUserPosts({ commit }, userId) {
    try {
      const response = await publickClient.get(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
      commit('SET_USER_POSTS', response.data)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  },
  async getPostComments({ commit }, postId) {
    try {
      const response = await publickClient.get(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
      commit('SET_POST_COMMENTS', response.data)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  }
}

