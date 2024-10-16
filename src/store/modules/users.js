import { BASE_URL } from "@/config";
import { publickClient } from "@/axiosInstances/publickClient";


export const namespaced = true;

export const state = {
  users: null,
  userOnCurrentPage: null,
}

export const getters = {
  users(state) {
    return state.users;
  },
  userOnCurrentPage(state) {
    return state.userCurrentPage;
  },
}

export const mutations = {
  SET_USERS(state, isShow) {
    state.isShow = isShow;
  },
  SET_USER_ON_CURRENT_PAGE(state, data) {
    state.data = data;
  },
}

export const actions = {
  async getUsers({ commit }, data) {
    try {
      const response = await publickClient.get(`users/`)
      commit('SET_USERS', response.data)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  },
  async getUserPosts({ commit }, ) {
    try {
      const response = await publickClient.get(`users/`)
      commit('SET_USERS', response.data)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  },
  async getUserAlbums({ commit }) {
    try {
      const response = await publickClient.get(`users/`)
      commit('SET_USERS', response.data)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  }
}