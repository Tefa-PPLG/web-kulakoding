<template>
  <div class="flex flex-col">
    <header class="">
      <Navbar></Navbar>
      <div class="mx-5">
        <TopBar :toolbar="'Blog'"></TopBar>
      </div>
    </header>
    <main class="mx-14 mt-5">
      <div class="flex gap-12 flex-col">
        <div v-for="item in blog" class="flex lg:flex-row flex-col-reverse items-center justify-between">
          <div class="flex gap-5 flex-col">
            <div class="flex items-center gap-5">
              <img :src="`https://api.dicebear.com/7.x/initials/svg?seed=${item.user?.username}`" alt="profile"
                class="rounded-full cursor-pointer w-10 items-center justify-center" />
              <h3 class="">{{ item.user?.username }}</h3>
            </div>
            <RouterLink :to="{ name: 'blog.detail', params: { slug: item.slug } }">
              <div class="font-bold">
                {{ item.judul }}
              </div>
              <h3 class="line-clamp-4 w-[35rem] dark:text-[#B1B1B1]">
                {{ item.konten }}
              </h3>
              <div class="flex gap-1 dark:text-[#B1B1B1]">
                <p class="">
                  {{
                  new Date(item.created_at).toLocaleString("id-ID", {
                  weekday: "long",
                  })
                  }}
                </p>
                <p class="">
                  {{
                  new Date(item.created_at).toLocaleString("id-ID", {
                  month: "short",
                  })
                  }}
                </p>
                <p class="">
                  {{ new Date(item.created_at).getDate() }}
                </p>
                <p class="">
                  {{ new Date(item.created_at).getFullYear() }}
                </p>
              </div>
            </RouterLink>
          </div>
          <RouterLink :to="{ name: 'blog.detail', params: { slug: item.slug } }">
            <img :src="route + '/' + item.thumbnail" class="w-full h-48 lg:h-64 object-contain rounded-md" alt="" />
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import Navbar from "../../components/Navbar.vue";
  import TopBar from "../../components/TopBar.vue";
  import useBlog from "../../services/blog/index";

  const route = import.meta.env.VITE_API_URL;

  const { IndexBlog, blog } = useBlog();

  onMounted(() => {
    IndexBlog();
  });
</script>