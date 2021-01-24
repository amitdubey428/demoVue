<template>
  <div class="container">
    <div class="card border-primary">
      <div class="card-body">
        <form action="">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-6">
                <h3 class="card-title">
                  Register Here!
                </h3>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label for="email"><b>Email</b></label>
                <input
                  v-model="email"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
                />
                <label for="psw"><b>Password</b></label>
                <input
                  v-model="password"
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  required
                />
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input
                  v-model.lazy="passwordRepeat"
                  type="password"
                  placeholder="Repeat Password"
                  name="psw-repeat"
                  id="psw-repeat"
                  required
                />
                <hr />
                <p>
                  By creating an account you agree to our
                  <router-link
                    :to="{
                      name: 'termsAndCond',
                      params: { user: email }
                    }"
                    exact-active
                    replace
                  >
                    Terms & Privacy
                  </router-link>
                  <router-view />
                </p>
                <button class="registerbtn" @click="submit">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: function() {
    return {
      email: "",
      password: "",
      passwordRepeat: ""
    };
  },
  methods: {
    formSubmit() {
      if (this.password !== this.passwordRepeat) {
        alert("Passwords don't match");
        return;
      } else {
        this.emitter.emit("addUser", {
          email: this.email,
          password: this.password
        });
        this.email = this.password = this.passwordRepeat = "";
      }
    }
  },
  watch: {
    passwordRepeat: function(value) {
      if (this.password !== value) {
        document.getElementById("psw-repeat").style.border = "1px solid red";
      } else {
        document.getElementById("psw-repeat").style.border = "1px solid green";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}
</style>
