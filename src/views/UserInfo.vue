s<template>
  <div>
    <h1>This is User-Info Page</h1>
    <div class="container">
      <div class="row">
        <div class="col statusDisplay">
          <h2>User Logged-in Status: {{ $route.params.userStatus }}</h2>
          <div v-if="$route.params.userStatus == 'true'">
            <h2>Logged in User-Details: {{ $route.params.userDetail }}</h2>
          </div>
          <div v-else>
            <h2>You need to Login First to see User Details</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  watch: {
    "$route.params.userStatus": function(newValue) {
      this.$route.params.userStatus = newValue;
    }
  },

  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$route.params.userStatus == "true") {
        return true;
      } else {
        alert("You Need to Login First!");
        vm.$router.replace("Home");
      }
    });
  },
  updated() {
    if (this.$route.params.userStatus !== "true") {
      this.$router.replace("Home");
    }
  }
};
</script>
<style scoped>
.statusDisplay {
  font: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
