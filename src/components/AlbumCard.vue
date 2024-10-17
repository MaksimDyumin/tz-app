<!-- AlbumCard.vue -->
<template>
  <v-card class="mb-4 album-card">
    <v-card-title class="title">{{ album.title }}</v-card-title>
    <v-card-text>
      <v-carousel hide-delimiters height="200">
        <v-carousel-item v-for="(photo, index) in album.photos" :key="index" :src="photo.thumbnailUrl">
          <v-img aspect-ratio="16/9" :src="photo.thumbnailUrl" :alt="photo.title"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AlbumCard',
  props: {
    album: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.album-card {
  display: flex;
  flex-direction: column;

  .title {
    flex-grow: 2;
  }

  .v-card {
    transition: box-shadow 0.3s;
  }

  .v-card:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .v-carousel {
    max-height: 200px;
  }
}
</style>
