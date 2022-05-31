<template>
  <div v-for="(item, key, index) in MeuTest" :key="index" id="userBlock">
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
      <img src="../assets/icons/edit.png" alt="" />
      <img src="../assets/icons/delete.png" alt="" />
      <img src="../assets/icons/view.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
      
  },
  props: ["MeuTest"],
};
</script>

<style lang="scss">
#userBlock {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 1.875rem;
  margin: 0 0 1rem;
  &:after {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 3px;
    height: 12px;
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
      margin: 0 0.2rem;
    }
  }
}
</style>
