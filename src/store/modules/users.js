/* eslint quotes: ["warn", "single"] */

import { publickClient } from '@/axiosInstances/publickClient'


export const namespaced = true

export const state = {
  users: null,
  userOnCurrentPage: null
}

export const getters = {
  users(state) {
    return state.users
  },
  userOnCurrentPage(state) {
    return state.userCurrentPage
  }
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER_ON_CURRENT_PAGE(state, data) {
    state.data = data
  }
}

export const actions = {
  async getUsers({ commit }, userId) {
    try {
      const optionalString = userId || ''
      const response = await publickClient.get(`https://jsonplaceholder.typicode.com/users/${optionalString}`)
      commit('SET_USERS', response.data)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  }
}
