<template>
  <div class="col-md-4 mb-2">
    <div class="bg-light shadow rounded">
      <!-- NOTE make sure to supply the needed params for this route! -->
      <router-link :to="{ name: 'CarDetailsPage', params: { id: car.id } }">
        <img
          :src="car.imgUrl"
          :alt="`${car.year} ${car.make} ${car.model}`"
          class="img-fluid rounded"
        />
      </router-link>
    </div>
  </div>
</template>


<script>
import { Car } from "../models/Car";
export default {
  // NOTE this is telling the child component that it will be taking in data as a prop from the parent - 'parameter'
  props: {
    car: {
      type: Car,
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
