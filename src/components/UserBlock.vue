<template>
  <div class="deleted" v-show="deleted">apagado com sucesso</div>
  <div v-for="(item, key, index) in itemsData" :key="index" id="userBlock">
    <div class="avatar">
      <img
        :src="item.avatar"
        :alt="item.first_name + item.last_name"
        :title="item.first_name + item.last_name"
      />
    </div>
    <div class="userDesc">
      <div class="id">
        <p>#{{ item.id }}</p>
      </div>
      <div class="descUser">
        <p class="name">{{ item.first_name }} {{ item.last_name }}</p>
        <p class="email">{{ item.email }}</p>
      </div>
    </div>
    <div class="actions">
      <img @click="navagateToEdit" src="../assets/icons/edit.png" alt="" :data-id="item.id" />
      <img @click="deleteItem" src="../assets/icons/delete.png" alt="" :data-id="item.id" />
      <img @click="navagateToView" src="../assets/icons/view.png" alt="" :data-id="item.id" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userId: "",
      deleted: false,
    };
  },
  props: ["itemsData", "url"],
  methods: {
    navagateToEdit(e) {
      this.userId = e.target.dataset.id;
      this.$router.push(`/edit/${this.userId}`);
    },
    navagateToView(e) {
      this.userId = e.target.dataset.id;
      this.$router.push(`/view/${this.userId}`);
    },
    deleteItem(e) {
      this.userId = e.target.dataset.id;
      axios.delete(`https://reqres.in/api/users/${this.userId}`).then((r) => {
        if (r.status === 204) {
          this.deleted = true;
          setTimeout(() => {
            this.deleted = false;
          }, 2500);
        }
      });
    },
  },
};
</script>

<style lang="scss">
#userBlock {
  position: relative;
  background-color: #f7f7f7;
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 1.875rem;
  margin: 0 0 1rem;
  &:after {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: -3px;
    width: 4px;
    height: 20px;
    background-color: black;
  }
  .avatar {
    margin-right: 1.5625rem;
    width: 80px;
    height: 80px;
    img {
      object-fit: contain;
      width: 100%;
      min-width: 80px;
      height: auto;
      border-radius: 5px;
    }
  }
  .userDesc {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex-grow: 1;
    align-content: space-between;
    .id {
      margin: 0 0 10px;
      justify-self: flex-start;
      font-size: 16px;
      color: #797979;
    }
  }
  .descUser {
    justify-self: flex-end;
    .name {
      margin-bottom: 4px;
      font-size: 18px;
      font-weight: 900;
      color: black;
    }
    .email {
      font-size: 16px;
      color: #797979;
    }
  }
  .actions {
    display: flex;
    align-self: center;
    img {
      cursor: pointer;
      object-fit: contain;
      width: 17px;
      margin: 0 0.2rem;
    }
  }
}
.deleted {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 18px;
  color: white;
  background-color: green;
}
</style>
