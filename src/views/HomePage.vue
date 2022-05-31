<template>
  <div class="title">
    <h1>Usuários</h1>
    <button>Novo Usuário</button>
  </div>
  <div class="newUser">
    <NewUser :dataUser="url" />
  </div>
  <div id="home">
    <UserBlock :MeuTest="userApi" />
  </div>
</template>

<script>
import UserBlock from "../components/UserBlock.vue";
import NewUser from "../views/NewUser.vue";
export default {
  data() {
    return {
      url: "https://reqres.in/api/users",
      userApi: {},
    };
  },
  methods: {
    getAllData() {
      fetch(this.url)
        .then((r) => r.json())
        .then((r) => (this.userApi = r.data));
    },
  },
  created() {
    this.getAllData();
  },
  components: {
    UserBlock,
    NewUser,
  },
};
</script>
<style lang="scss">
#home {
  margin-top: 3rem;
}
</style>
