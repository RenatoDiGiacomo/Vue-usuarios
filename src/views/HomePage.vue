<template>
  <div class="title">
    <h1>Usuários</h1>
    <button :class="newUser ? 'active' : ''" @click="newUserClick">
      {{ !newUser ? "Novo Usuário" : "Cancelar" }}
    </button>
  </div>
  <div class="newUser">
    <transition name="fade">
      <NewUserForm v-show="newUser" :url="url" @newUserClick="newUserClick" />
    </transition>
  </div>
  <div id="home">
    <UserBlock :itemsData="userApi" :url="url" />
  </div>
</template>

<script>
import axios from "axios";

import UserBlock from "../components/UserBlock.vue";
import NewUserForm from "../components/NewUserForm.vue";

export default {
  data() {
    return {
      url: "https://reqres.in/api/users",
      userApi: {},
      newUser: false,
    };
  },

  methods: {
    getAllData() {
      axios.get(this.url).then((r) => {
        if (r.status === 200) {
          this.userApi = r.data.data;
        }
      });
    },
    newUserClick() {
      this.newUser = !this.newUser;
    },
  },

  created() {
    this.getAllData();
  },

  components: {
    UserBlock,
    NewUserForm,
  },
};
</script>
<style lang="scss">
#home {
  margin-top: 3rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
