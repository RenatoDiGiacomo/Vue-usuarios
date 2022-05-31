<template>
  <div>Novo Usuário</div>
  <button @click="getDataUser">Pgar</button>
  <p>{{ dataUser }}</p>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {
    getDataUser() {
      console.log(this.dataUser+'/1')
    },
  },
  props: ["dataUser"],
};
</script>
