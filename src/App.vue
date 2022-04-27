<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row p-2">
      <div class="col-2">
        <button
          class="btn btn-info square-right"
          data-bs-target="#nav"
          data-bs-toggle="offcanvas"
        >
          Nav
        </button>
        <button
          class="btn btn-success square-left"
          data-bs-target="#create-car-modal"
          data-bs-toggle="modal"
          v-if="user.isAuthenticated"
        >
          Create
        </button>
        <button
          class="btn btn-success square-left"
          data-bs-target="#create-house-modal"
          data-bs-toggle="modal"
          v-if="user.isAuthenticated"
        >
          Create HOUSE
        </button>
      </div>
      <!-- NOTE user.isAuthenticated is making sure the user is logged in - hiding the button if they are not logged in -->
    </div>
    <router-view />

    <Modal id="create-house-modal" />
    <Modal id="create-car-modal" />
  </main>

  <NavOffCanvas id="nav" />
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      user: computed(() => AppState.user),
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
