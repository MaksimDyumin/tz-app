<template>
  <v-card @click="routeToUserPage" class="user-card" width="400" outlined>
    <v-card-title>
      <div>
        <h3 class="headline mb-1">{{ user.name }} ({{ user.username }})</h3>
        <v-chip color="primary" dark small>{{ user.company.name }}</v-chip>
      </div>
    </v-card-title>
    <v-card-subtitle class="text--secondary">
      <v-icon small color="grey">mdi-map-marker</v-icon>
      Address: {{ user.address.city }}, {{ user.address.street }}, {{ user.address.suite }}
    </v-card-subtitle>
    <v-card-text>
      <div class="card-text-container">
        <p class="text--primary mb-1">Business direction: <strong>{{ user.company.bs }}</strong></p>
        <v-divider class="my-2"></v-divider>
        <p>Email: <a :href="`mailto:${user.email}`">{{ user.email }}</a></p>
        <p>Website: <a :href="user.website" target="_blank">{{ user.website }}</a></p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    routeToUserPage() {
      this.$router.push({ name: 'user', params: { userId: this.user.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .headline {
    font-size: 20px;
    font-weight: bold;
  }

  .card-text-container {
    display: flex;
    flex-direction: column;

    .text--primary {
      font-size: 15px;
    }

    a {
      text-decoration: none;
      color: #1e88e5;
    }
  }

  .v-chip {
    margin-left: 10px;
  }
}
</style>
