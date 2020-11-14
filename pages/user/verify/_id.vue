<template>
  <div>
    <div class="register-form">
      <h1 id="message">{{ message }}</h1>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { user } from "~/store";

@Component
export default class Forgot extends Vue {
  message = "";
  newPassword = "";

  async created() {
    let res = await user.verify({
        token: this.$route.params.id
    });
    if (res.error){
        document.getElementById("message").style.color = "red";
        this.message = res.error;
    } else {
        console.log(res);
        document.getElementById("message").style.color = "black";
        this.message = res.message;
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
