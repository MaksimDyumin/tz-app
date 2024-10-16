<template>
  <v-container class="d-flex flex-wrap user-card-container">
    <UserCard class="user-card" v-for="user in users" :key="user.id" :user="user" />
  </v-container>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserView',
  components: {
    UserCard
  },
  async mounted() {
    await this.getUsers()
  },
  computed: {
    ...mapGetters({
      users: 'users/users'
    })
  },
  methods: {
    ...mapActions({
      getUsers: 'users/getUsers'
    })
  }
}
</script>

<style lang="scss">
.user-card-container {
  gap: 20px;
  justify-content: flex-start!important;

  .user-card {
    flex: 0 1 31.33%;
    box-sizing: border-box;
  }
}

@media (max-width: 992px) {
  .user-card{
    flex: 0 1 48%!important;
  }
}

@media (max-width: 650px) {
  .user-card{
    flex: 0 1 100%!important;
  }
}
</style>
