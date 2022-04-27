<template>
  <div class="house col-md-4">
    <div class="bg-light shadow rounded">
      <router-link :to="{ name: 'HouseDetailsPage', params: { id: house.id}}">
      <img :src="house.img" alt="A house" class="img-fluid rounded-top" />
      </router-link >
    </div>
  </div>
</template>


<script>
import { House } from "../models/House.js";
export default {
  props: {
    house: {
      type: House,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>