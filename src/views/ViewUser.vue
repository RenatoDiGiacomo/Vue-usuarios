<template>
  <div class="sucess" v-show="sucess">
    <p>Cadastro atualizado</p>
  </div>
  <div class="error" v-show="error">
    <p>Erro para atualizar</p>
  </div>
  <div id="user">
    <div class="title">
      <h1>#{{ user.data.id }}</h1>
      <button class="active" @click="() => this.$router.push(`/`)">Voltar</button>
    </div>
    <div class="userInfo1">
      <div class="avatar">
        <img
          :src="user.data.avatar"
          :alt="user.data.first_name + user.data.last_name"
          :title="user.data.first_name + user.data.last_name"
        />
      </div>
      <div class="names">
        <div class="first misc">
          <span>Primeiro Nome</span>
          <p>{{ user.data.first_name }}</p>
        </div>
        <div class="last misc">
          <span>Útilmo Nome</span>
          <p>{{ user.data.last_name }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="usermisc">
    <div class="misc">
      <span>Endereço de e-mail</span>
      <p>{{ user.data.email }}</p>
    </div>
    <div class="misc">
      <span>Link do avatar</span>
      <p>{{ user.data.avatar }}</p>
    </div>
    <div class="misc">
      <span>Link de suporte</span>
      <p>{{ user.support.url }}</p>
    </div>
    <div class="misc">
      <span>Descrição do usuário</span>
      <p>{{ user.support.text }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
      userData: {},
      sucess: false,
      error: false,
    };
  },
  methods: {
    getAndPutUser() {
      axios.get(`https://reqres.in/api/users/${this.idGet}`).then((r) => {
        this.user = r.data;
        this.userData = {
          fname: this.user.data.first_name,
          lname: this.user.data.last_name,
          email: this.user.data.email,
        };
      });
    },
    changeData() {
      axios.put(`https://reqres.in/api/users/${this.idGet}`, this.userData).then((r) => {
        if (r.status === 200) {
          this.sucess = true;
          setTimeout(() => {
            this.sucess = false;
          }, 2500);
        } else {
          this.error = true;
        }
      });
    },
  },
  computed: {
    idGet() {
      return this.$route.params.user;
    },
  },
  created() {
    this.getAndPutUser();
  },
};
</script>

<style lang="scss">
.userInfo1 {
  display: flex;
  margin-top: 4rem;
  .avatar {
    margin-right: 1.5rem;
    img {
      border-radius: 5px;
    }
  }
  .names {
    display: flex;
    width: 100%;
    align-items: center;
    .first{
      margin-right: 4rem;
    }
    label {
      font-size: 14px;
      color: #797979;
      display: block;
      margin: 0.5rem 0;
    }
    input {
      padding: 0.5rem 0;
      color: #000;
      font-size: 16px;
      font-weight: 700;
    }
  }
}

.misc {
  margin: 1rem 0;
  span {
    font-size: 14px;
    color: #797979;
    display: block;
    margin-bottom: 0.3rem;
  }
  p {
    padding: 0;
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
  input {
    padding: 0.5rem 0;
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
}
.sucess {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 18px;
  color: white;
  background-color: green;
}
.error {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 18px;
  color: white;
  background-color: red;
}
</style>
