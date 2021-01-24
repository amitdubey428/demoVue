<template>
  <div class="home">
    <registration-form />
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/components/Registration.vue";

export default {
  name: "Home",
  components: {
    "registration-form": Registration
  }
};
</script>
