<script setup lang="ts">
defineProps({
  head: String,
});

async function logout() {
  try {
    const res = await fetch("http://localhost:3000/api/auth/sign-out", {
      method: "POST",
      credentials: "include", // <-- Required for cookies
    });

    if (res.status === 200) {
      console.log("logout..");
    }
    localStorage.setItem("email", "");
    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <div class="navbar">
    <h1>To-Do-App</h1>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/todo">Todo</router-link>
      <img @click="logout" src="../assets/logout_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 126px;
  text-align: center;
  min-height: auto;
  /* background-color: rgb(30, 66, 210); */
}
h1 {
  margin-top: 8px;
  padding: auto;
  color: white;
}

.links {
  margin: 0;
}
.links a {
  text-decoration: none;
  color: rgb(252, 241, 77);
  margin: 0 15px;
}
.links img {
  margin: 0;
  color: white;
  transform: translate(13px, 6px);
  cursor: pointer;
}
</style>
