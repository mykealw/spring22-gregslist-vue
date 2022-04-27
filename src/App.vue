<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="p-2">
      <button
        class="btn btn-info"
        data-bs-target="#nav"
        data-bs-toggle="offcanvas"
      >
        Nav
      </button>
    </div>
    <router-view />
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
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
