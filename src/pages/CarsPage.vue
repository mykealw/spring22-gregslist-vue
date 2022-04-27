<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <button
          class="btn btn-info"
          data-bs-target="#create-car-modal"
          data-bs-toggle="modal"
        >
          Create
        </button>
      </div>
    </div>
    <div class="row p-2">
      <Car v-for="c in cars" :key="c.id" :car="c" />
      <!-- Inject car component -->
    </div>
  </div>

  <!-- Create Car Modal -->
  <Modal id="create-car-modal">
    <template #modal-title-slot>
      <h3>Create a Car!</h3>
    </template>
    <template #modal-body-slot>
      <CarForm />
    </template>
  </Modal>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { carsService } from "../services/CarsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  setup() {
    onMounted(async () => {
      try {
        // NOTE this will run when this page is "mounted" - think of this as similar to how the constructor worked in vanilla js
        await carsService.getCars();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      // NOTE remember that this is retrieving the data from appstate
      cars: computed(() => AppState.cars),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
