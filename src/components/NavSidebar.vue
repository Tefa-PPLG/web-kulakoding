<template>
  <div class="w-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-transparent" />
        </TransitionChild>

        <div class="fixed justify-end inset-0 flex z-40">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative flex-1 flex flex-col max-w-64 w-full pb-4 shadow bg-primary dark:bg-secondary"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 mr-2 pt-4">
                  <button
                    type="button"
                    class="ml-1 flex items-center font-bold justify-center p-2 gap-1 rounded-md focus:outline-none ring-2 ring-inset ring-slate-900 dark:text-slate-900"
                    @click="sidebarOpen = false"
                  >
                    Back
                    <ArrowRightCircleIcon
                      class="h-6 w-6 text-slate-900"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-col">
                <div class="relative">
                  <div
                    @click="sidebarOpen = false"
                    class="flex-shrink-0 flex items-center px-4 py-3.5"
                  >
                    <div class="mt-1.5 ml-0.5 font-bold text-xl text-slate-900">
                      KulaKoding
                    </div>
                  </div>
                  <hr class="h-[2px] border-0 bg-slate-900" />
                  <nav
                    class="mt-2 flex-shrink-0 h-full divide-y divide-slate-900 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div class="px-2 space-y-1">
                      <a
                        v-for="item in navigation"
                        @click="sidebarOpen = false"
                        :key="item.name"
                        :href="item.href"
                        :class="[
                          item.current
                            ? 'bg-gray -800 text-slate-900'
                            : 'text-slate-900 hover:text-slate-900 hover:bg-[#0080b3]',
                          'group flex items-center px-2 py-2 text-xs font-medium rounded-md',
                        ]"
                        :aria-current="item.current ? 'page' : undefined"
                      >
                        <component
                          :is="item.icon"
                          class="mr-4 flex-shrink-0 h-4 w-4 text-slate-900"
                          aria-hidden="true"
                        />
                        {{ item.name }}
                      </a>
                    </div>
                  </nav>
                </div>
                <div
                  class="absolute w-full bg-white dark:bg-[#c1c1c1] bottom-0"
                >
                  <div class="flex justify-between m-2">
                    <button
                      class="inline-flex lg:mx-0 gap-1 font-semibold rounded-md dark:text-slate-900 bg-transparent focus:bg-slate-300 border border-white hover:border-gray-400 dark:bg-transparent dark:focus:bg-{#818181} dark:border-transparent hover:dark:border-gray-400 p-2"
                    >
                      <ArrowRightStartOnRectangleIcon class="w-5" />
                      Log Out
                    </button>
                    <div>
                      <!-- Toggle untuk dark mode -->
                      <button @click="toggleDark()" class="text-white mt-1">
                        <img
                          v-if="isDark"
                          src="@/assets/img/Darkmode.png"
                          alt="toggle"
                          class="w-12"
                        />
                        <img
                          v-else
                          src="@/assets/img/Lightmode.png"
                          alt="toggle"
                          class="w-12"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="lg:pl-60 flex flex-col flex-1">
      <div
        class="sticky top-0 z-10 flex-shrink-0 flex justify-end h-16 bg-primary dark:bg-secondary border-b border-gray-200 dark:border-slate-800 lg:border-none shadow-lg"
      >
        <div
          class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-auto lg:mx-auto lg:px-8"
        >
          <router-link :to="{ name: 'dashboard' }" class="flex-1 flex">
            <img src="../assets/img/iconkula.png" alt="logo_kulakoding" />
          </router-link>
        </div>
        <button
          type="button"
          class="px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars4Icon class="h-10 w-10" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ArrowRightCircleIcon,
  ArrowRightStartOnRectangleIcon,
  UserGroupIcon,
  UserCircleIcon,
  Bars4Icon,
  CodeBracketIcon,
} from "@heroicons/vue/24/solid";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark(false);
const toggleDark = useToggle(isDark);

const navigation = [
  {
    name: "About Us",
    href: "/about",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Profile",
    href: "/user",
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: "Project",
    href: "/project",
    icon: CodeBracketIcon,
    current: false,
  },
];

const sidebarOpen = ref(false);
</script>
