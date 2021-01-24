<template>
  <div v-if="userDetail == null">
    <form class="navbar-form navbar-right" @submit.prevent="signInSubmit()">
      <div class="form-group">
        <input
          v-model="email"
          type="text"
          placeholder="Email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-success">Sign in</button>
    </form>
  </div>
  <div v-else>
    <p class="greetings">Hi {{ userDetail }}</p>
    <button @click="logOut" class="btn btn-danger logOutBtn">Logout</button>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: ["userDetail"],
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signInSubmit() {
      this.emitter.emit("LogIn", {
        email: this.email,
        password: this.password
      });
      this.email = this.password = this.passwordRepeat = "";
    },
    logOut() {
      this.emitter.emit("LogOut");
    }
  }
};
</script>

<style scoped>
.greetings {
  height: 100%;
  display: inline-block;
  font-size: 20px;
  color: antiquewhite;
  padding-top: 10px;
  padding-left: 30%;
}

.logOutBtn {
  margin: 0 0 0 10px;
}
</style>
