<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <label for="make" class="form-label">Make:</label>
      <select
        name="make"
        id="make"
        class="form-control"
        v-model="editable.make"
        required
      >
        <option disabled selected>Choose Your Make</option>
        <option>Honda</option>
        <option>Toyota</option>
        <option>Ford</option>
        <option>Chevy</option>
        <option>German</option>
        <option>Ferrari - lol</option>
        <option>Red Bull - ftw</option>
      </select>
    </div>
    <div class="form-group">
      <label for="year" class="form-label">Year:</label>
      <input
        type="text"
        class="form-control"
        id="year"
        v-model="editable.year"
      />
    </div>
    <div class="form-group">
      <label for="model" class="form-label">Model:</label>
      <input
        type="text"
        class="form-control"
        id="model"
        v-model="editable.model"
      />
    </div>
    <div class="form-group">
      <label for="price" class="form-label">Price:</label>
      <input
        type="number"
        class="form-control"
        id="price"
        v-model="editable.price"
      />
    </div>
    <div class="form-group">
      <label for="img" class="form-label">Img:</label>
      <input
        type="text"
        class="form-control"
        id="img"
        v-model="editable.imgUrl"
      />
    </div>
    <div class="form-group">
      <label for="color" class="form-label">Color:</label>
      <input
        type="color"
        class="form-control"
        id="color"
        v-model="editable.color"
      />
    </div>
    <div class="form-group">
      <label for="year" class="form-label">Description:</label>
      <textarea
        type="text"
        class="form-control"
        id="year"
        v-model="editable.description"
      />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { carsService } from "../services/CarsService";
import { Modal } from "bootstrap";
import { Car } from "../models/Car";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  props: {
    car: {
      type: Car,
      default: () => new Car(),
    },
  },
  setup(props) {
    const router = useRouter();
    const editable = ref({});
    // NOTE this is populating our editable ref with the props being sent in from the parent
    // Remember that v-models are two way data bound, so this will populate our input fields
    watchEffect(() => {
      editable.value = { ...props.car };
    });
    return {
      editable,
      async handleSubmit() {
        try {
          // NOTE when using refs, make sure that you use .value to gain access to the actual data in the ref
          if (editable.value.id) {
            // NOTE if the thing we are handling has an id, that means its already been created therefore its an edit request
            await carsService.editCar(editable.value);
            Pop.toast("Car Edited!", "success");
            Modal.getOrCreateInstance(
              document.getElementById("edit-car-modal")
            ).toggle();
          } else {
            const createdCar = await carsService.createCar(editable.value);
            // NOTE push the user to the car details page of the car that was just created
            router.push({
              name: "CarDetailsPage",
              params: { id: createdCar.id },
            });
            Pop.toast("Car created!", "success");
            Modal.getOrCreateInstance(
              document.getElementById("create-car-modal")
            ).toggle();
          }
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
