<script setup lang="ts">
import { ref } from "vue";
import Head2 from "@/components/Head2.vue";
const email = ref("");
const password = ref("");
const banner = ref(false);

async function login() {
  try {
    const res = await fetch("http://localhost:3000/api/auth/sign-in/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      credentials: "include", // 👈 critical
    });
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(`login with ${email.value}`);
      localStorage.setItem("email", data.user.email);
      window.location.href = "/todo";
    } else {
      banner.value = true;
      console.log(banner);
      localStorage.setItem("email", "");
    }
  } catch (error) {
    localStorage.setItem("email", "");

    console.log(error);
  }
}
function signup() {
  console.log(`signup with ${email.value} - ${password.value}`);
}
</script>

<template>
  <Head2 head="Home" />
  <div class="home-container">
    <h1>Login</h1>

    <form action="">
      <div class="input">
        <p>Enter Email</p>
        <input type="text" v-model="email" />
      </div>
      <div class="input">
        <p>Enter Password</p>
        <input type="password" v-model="password" />
      </div>
      <div class="btn-container">
        <button @click.prevent="login()">Login</button>
        <button @click.prevent="signup()">Signup</button>
      </div>
      <div class="banner" :class="{ show: banner }">
        <p>wrong credencials !</p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.home-container {
  margin-top: 60px;
  text-align: center;
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background-color: blue;
  color: white;
  padding: 8px;
}
a {
  text-decoration: none;
  color: white;
}

form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-family: inherit;
  margin: 10px;
}
.input {
  margin: 5px auto;
}
.input p {
  margin: 5px 0px;

  text-align: left;
}
.btn-container {
  margin-top: 14px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
form .banner {
  position: absolute;
  bottom: -39px;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: rgb(255, 0, 0);
  visibility: hidden;
}
form .banner.show {
  visibility: visible;
}
</style>
