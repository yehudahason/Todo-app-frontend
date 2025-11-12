<script setup lang="ts">
import Head2 from "@/components/Head2.vue";
import { onMounted, ref } from "vue";
const todoArray = ref();
const title = ref("");
const banner = ref("");
const done = ref(false);
const fading = ref(false);
const task = ref({});
onMounted(() => {
  const user = localStorage.getItem("email");
  console.log(user);
  if (!user) {
    window.location.href = "/";
  }
  fetchTasks();
});

async function fetchTasks() {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "GET",
      credentials: "include", // <-- Required for cookies
    });

    todoArray.value = await res.json();
    if (res.status === 401) {
      localStorage.setItem("email", "");
      window.location.href = "/";
    }
  } catch (err) {
    console.log(err);
  }
}
async function addTask() {
  banner.value = "";
  const t = title.value.trim();

  task.value = {
    title: t,
  };
  console.log(task.value);
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      credentials: "include", // <-- Required for cookies

      headers: {
        "Content-Type": "application/json", // tell server we're sending JSON
      },
      body: JSON.stringify(task.value),
    });
    if (res.status === 400) {
      banner.value = "task should be atleast 3 character";
    }
  } catch (err) {
    console.log(err);
    banner.value = "500 server error";
  }
  fetchTasks();
}

async function setDone(id: string, completed: boolean) {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      credentials: "include", // <-- Required for cookies

      headers: {
        "Content-Type": "application/json", // tell server we're sending JSON
      },
      body: JSON.stringify({ completed }),
    });
  } catch (err) {
    console.log(err);
  }
  fetchTasks();
  if (completed) {
    setTimeout(async () => {
      await deleteEl(id);
    }, 450);
  }
}

async function deleteEl(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    fetchTasks();
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <Head2 head="Todo" />
  <div class="container2">
    <div class="addTask">
      <p>ADD TASK</p>
      <p>{{ banner }}</p>
      <form action=" ">
        <input type="text" placeholder="title" v-model="title" />

        <button @click.prevent="addTask()">add</button>
      </form>
    </div>

    <div class="list-container">
      <div class="list-container">
        <div v-for="el in todoArray" :key="el.id" class="task" :class="{ fade: el.completed }">
          <span>*</span>

          <p>
            <b>{{ el.title }}</b>
          </p>

          <div class="btn">
            <button @click="setDone(el.id, true)">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: white;
}
.container2 {
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.list-container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 400px;
  padding: 20px;
  min-height: auto;
}
.task.fade {
  animation: scale2 0.5s;
}

@keyframes scale2 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.3);
    opacity: 0;
  }
}
.task {
  min-width: 400px;
  margin: 10px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: brown;
  border-radius: 10px;
}

.task button {
  margin: 6px;
}
.task p {
  justify-self: flex-start;
  min-width: 250px;
  text-align: left;
}

.addTask p {
  margin: 10px 20px;
}
input[type="text"] {
  margin: 0px 5px;
}
</style>
