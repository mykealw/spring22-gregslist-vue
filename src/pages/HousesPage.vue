<template>
  <div class="house container-fluid">
    <div class="row">
      <House v-for="h in houses" :key="h.id" :house="h" />
      <!-- house inject -->
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { housesService } from "../services/HousesService.js";
import { AppState } from "../AppState.js";
export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.obtainHouses();
      } catch (error) {
        logger.error("[error prefix]", error.message);
        Pop.toast(error.message, "error");
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>