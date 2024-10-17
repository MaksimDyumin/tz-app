<template>
  <v-container fluid class="user-page-container">

    <v-col cols="12" sm="3" class="sidebar">
      <v-list dense>
        <v-list-item-group>
          <v-list-item @click="scrollToSection('posts')">
            <v-list-item-content>
              <v-list-item-title>Posts</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="scrollToSection('albums')">
            <v-list-item-content>
              <v-list-item-title>Albums</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>

    <v-col>
      <h2 class="mb-3" id="posts">Posts</h2>
      <v-row>
        <v-col v-for="post in userPosts" :key="post.id" cols="12" sm="6" md="4" lg="4" xl="3">
          <v-card class="mb-4 card-equal-height">
            <v-card-title>{{ post.title }}</v-card-title>
            <v-card-text>{{ post.body }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="mb-3" id="albums">Albums</h2>
      <v-row>
        <v-col v-for="album in userAlbums" :key="album.id" cols="12" sm="6" md="4" lg="4" xl="3">
          <AlbumCard class="card-equal-height" :album="album" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AlbumCard from '@/components/AlbumCard.vue'

export default {
  name: 'UserPage',
  components: {
    AlbumCard
  },
  computed: {
    ...mapGetters({
      userPosts: 'userPosts/userPosts',
      userAlbums: 'userAlbums/userAlbums'
    }),
    userId() {
      return this.$route.params.userId
    }
  },
  methods: {
    ...mapActions({
      getUserPosts: 'userPosts/getUserPosts',
      getUserAlbums: 'userAlbums/getUserAlbums'
    }),
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      section.scrollIntoView({ behavior: 'smooth' })
    }
  },
  async created() {
    await this.getUserPosts(this.userId)
    await this.getUserAlbums(this.userId)
  }
}
</script>

<style lang="scss" scoped>
.user-page-container {
  display: flex;

  @media (max-width: 600px) {
    display: grid;
  }
}

h2 {
  font-weight: bold;
  margin-bottom: 16px;
}

.card-equal-height {
  height: 100%;
}

.v-card {
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
}

.sidebar {
  position: sticky;
  top: 70px;
  height: 100%;
  background-color: #f5f5f5;
  padding: 15px;
  z-index: 2;
}
</style>
