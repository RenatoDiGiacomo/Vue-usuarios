<template>
  <form method="post" @submit.prevent="getFormData">
    <div v-show="createMsg">
      <p class="createMsg">Usuário Criado com sucesso</p>
    </div>
    <div v-show="error">
      <p class="error">Usuário Não Criado! Algo errado aconteceu</p>
    </div>
    <div class="userName">
      <label for="name">Nome do usuário</label>
      <input v-model="formData.name" type="text" id="nome" />
    </div>
    <div class="userJob">
      <label for="job">Função do usuário</label>
      <select name="" id="job" v-model="formData.job">
        <option value="" disabled>Selecione a função</option>
        <option value="desenvolvedor">Desenvolvedor</option>
        <option value="gerente de protejos">Gerente de Protejos</option>
        <option value="tech lead">Tech Lead</option>
        <option value="ui ux desinger">UI/UX Desinger</option>
      </select>
    </div>
    <button>Salvar dados do Usuário</button>
  </form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: { name: "", job: "" },
      createMsg: false,
      error: false,
    };
  },
  props: ["url", "newUserClick"],
  methods: {
    getFormData() {
      axios.post(this.url, this.formData).then((r) => {
        console.log(r);
        if (r.status === 201) {
          this.createMsg = true;
          setTimeout(() => {
            this.createMsg = false;
            this.$emit("newUserClick", false);
          }, 2500);
        } else{
            this.error = true
        }
      });
    },
  },
};
</script>
<style lang="scss">
form {
  width: 100%;
  margin: 1rem 0;
  label {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  input {
    width: 100%;
    padding: 1rem;
    font-size: 18px;
  }
  select {
    width: 100%;
    padding: 1rem;
    font-size: 18px;
  }
  button {
    width: 100%;
    text-align: center;
  }
  .userName {
    margin: 1.5rem 0;
  }
  .userJob {
    margin: 1.5rem 0;
  }
  .createMsg {
    padding: 1rem;
    font-size: 18px;
    color: white;
    background-color: green;
  }
  .error {
    padding: 1rem;
    font-size: 18px;
    color: white;
    background-color: red;
  }
}
</style>
