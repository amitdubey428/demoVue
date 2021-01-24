<template>
  <div class="container">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Demo Vue-Route Project</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact-active replace>
                <span class="fa fa-lg fa-user"></span> Register
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{
                  name: 'UserInfo',
                  params: {
                    userDetail: currentUser,
                    userStatus: isUserLoggedIn
                  }
                }"
                class="nav-link"
                exact-active
                replace
              >
                <span class="fa fa-lg fa-address-card-o"></span> User-Info
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contactUs"
                class="nav-link"
                exact-active
                replace
              >
                <span class="fa fa-lg fa-child"></span> Contact Us
              </router-link>
            </li>
          </ul>
          <my-sign-in :userDetail="currentUser" />
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import SignIn from "./components/Signin.vue";

export default {
  components: {
    "my-sign-in": SignIn
  },
  data: function() {
    return {
      currentUser: null,
      emails: [],
      passwords: [],
      isUserLoggedIn: false
    };
  },
  methods: {},
  created() {
    this.emitter.on("addUser", userData => {
      let email = userData["email"];
      let password = userData["password"];
      if (this.emails.includes(email)) {
        alert("Email already taken!");
        return;
      } else {
        this.emails.push(email);
        this.passwords.push(password);
        alert("User Registered Successfully!");
      }
    });
    this.emitter.on("LogIn", userData => {
      let email = userData["email"];
      let password = userData["password"];
      for (var i = 0; i < this.emails.length; i++) {
        if (email == this.emails[i] && password == this.passwords[i]) {
          this.isUserLoggedIn = true;
          this.currentUser = this.emails[i];
          alert("User Loggedd In Successfully!");
          return;
        } else {
          alert("Incorrect Credentials");
        }
      }
    });
    this.emitter.on("LogOut", () => {
      this.currentUser = null;
      this.isUserLoggedIn = false;
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding-top: 70px;
}

#navbar a.router-link-exact-active {
  background-color: rgb(37, 5, 5);
}
</style>
