<template>
  <div>
    <div class="register-form">
      <h1>Register</h1>
      <div>
        <p>Username (6-50)</p>
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <p>Email (Hotmail, Outlook, Gmail, Yahoo Mail)</p>
        <input type="text" name="email" v-model="email" />
      </div>
      <div>
        <p>Password (6-14)</p>
        <input type="password" name="password" v-model="password" />
      </div>

      <button @click="register">
        Submit
      </button>
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { user } from "~/store";
import Cookie from "js-cookie";

@Component
export default class Register extends Vue {
  error = "";
  username: string = "";
  email: string = "";
  password: string = "";

  created(){
    if (user.userInfo.username) {
      this.$router.push("/");
    }
  }

  async register() {
    let res = await user.registerUser({
      username: this.username,
      email: this.email,
      password: this.password
    });
    // console.log(res)
    if (res.error) this.error = res.error;
    else {
      Cookie.set("token", res.token);
      this.$router.push("/user/settings");
    }
  }
}
</script>

<style scoped>
.register-form {
  /* align-self: center; */
  justify-self: center;
  text-align: center;
  background-color: #c7eef6;
  /* margin-top: 10%; */
  margin: 10% auto;
  border-radius: 10px;
  border: 2px solid #8bc9da;
  height: 400px;
  width: 400px;
}

body {
  text-align: center;
  justify-items: center;
}

input,
button {
  margin-top: 10px;
}

h1 {
  font-size: 24px;
  padding-top: 10px;
}

p {
  padding-top: 10px;
}
</style>
