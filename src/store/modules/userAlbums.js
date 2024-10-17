/* eslint quotes: ["warn", "single"] */

import { publickClient } from '@/axiosInstances/publickClient'


export const namespaced = true

export const state = {
  userAlbums: null,
  albumPhotos: null
}

export const getters = {
  userAlbums(state) {
    return state.userAlbums
  },
  albumPhotos(state) {
    return state.albumPhotos
  }
}

export const mutations = {
  SET_ALBUMS(state, userAlbums) {
    state.userAlbums = userAlbums
  },
  SET_ALBUM_PHOTOS(state, albumPhotos) {
    state.albumPhotos = albumPhotos
  }
}

export const actions = {
  async getUserAlbums({ commit }, userId) {
    try {
      // Запрос для получения альбомов пользователя
      const albumsResponse = await publickClient.get(`albums/?userId=${userId}`)
      const albums = albumsResponse.data

      // Запрашиваем фото для каждого альбома
      const albumsWithPhotos = await Promise.all(
        albums.map(async (album) => {
          const photosResponse = await publickClient.get(`photos/?albumId=${album.id}&_limit=5`)
          return { ...album, photos: photosResponse.data }
        })
      )

      // Коммитим альбомы с фото в мутацию
      commit('SET_ALBUMS', albumsWithPhotos)
    } catch (error) {
      console.error(error)
      // this._vm.$toast.error(error?.response?.data?.detail);
    }
  }
}
