<script setup>
import {
  EnvelopeIcon,
  LockClosedIcon,
  PencilSquareIcon,
  ArrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
  AcademicCapIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";
import useAuth from "../../services/auth";
import Navbar from "@/components/Navbar.vue";
import NavSidebar from "@/components/NavSidebar.vue";
import { onMounted, reactive, watch } from "vue";

const { user, LoggedIn, Edit } = useAuth();

const payload = reactive({
  username: "",
  kelas: "",
  email: "",
  password: "",
});

watch(user, (item) => {
  payload.username = item.username;
  payload.kelas = item.kelas;
  payload.email = item.email;
  payload.password = item.password;
});

async function save() {
  await Edit(payload);
}
console.log(payload);

onMounted(() => {
  LoggedIn();
});
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden">
    <Navbar class="hidden lg:block" />
    <NavSidebar class="lg:hidden" />
    <div class="flex justify-between p-2 mx-6 mt-2">
      <router-link :to="{ name: 'user' }" class="flex items-center gap-1 font-semibold">
        <ArrowLeftIcon class="w-5" />
        Back
      </router-link>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <router-link :to="{ name: 'dashboard' }"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <HomeIcon class="text-gray-700 dark:text-gray-400 w-4 mr-1" />
              Home
            </router-link>
          </li>
          <li aria-current="page">
            <router-link :to="{ name: 'user' }" class="flex items-center">
              <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">user</span>
            </router-link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <ChevronRightIcon class="text-gray-700 dark:text-gray-400 w-[18px]" />
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">edit</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="flex-grow">
      <div class="flex flex-col justify-center items-center lg:my-5 my-20">
        <div class="flex flex-col items-center my-5">
          <div class="p-0.5 rounded-full">
            <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`" alt="profile"
              class="rounded-full w-20 items-center justify-center" />
          </div>
        </div>
        <form @submit.prevent="save" class="flex flex-col gap-3">
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <UserIcon class="w-5" />
              </div>
              <input v-model="payload.username" type="text" id="input-group-1"
                class="bg-gray-50 border border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset Username" />
            </span>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <AcademicCapIcon class="w-5" />
              </div>
              <input v-model="payload.kelas" type="text" id="input-group-1"
                class="bg-gray-50 border border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset Kelas" />
            </span>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <EnvelopeIcon class="w-5" />
              </div>
              <input v-model="payload.email" type="text" id="input-group-1"
                class="bg-gray-50 border border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset Email" />
            </span>
          </div>
          <div class="relative flex gap-2">
            <span>
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <LockClosedIcon class="w-5" />
              </div>
              <input v-model="payload.password" type="password" id="input-group-1"
                class="bg-gray-50 border border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ps-10 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reset Password" />
            </span>
          </div>
          <div class="flex justify-center gap-2">
            <!-- <router-link :to="{ name: 'user' }"
              class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2">
              <ChevronLeftIcon class="w-5" />
              Kembali
            </router-link> -->
            <button type="submit"
              class="inline-flex items-center gap-1 font-semibold rounded-md bg-transparent focus:border-gray-900 border border-gray-400 hover:border-gray-900 dark:bg-transparent dark:focus:border-gray-400 dark:border-gray-600 hover:dark:border-gray-400 shadow-sm p-2">
              <PencilSquareIcon class="w-5" />
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- <img src="@/assets/img/wave-profile.png" alt="Penyekat" class="w-full" /> -->
  </div>
</template>
