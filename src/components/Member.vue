<template>
    <div class="mb-20">
        <div id="member" class="m-5 relative z-10 lg:m-20">
            <h2 class="text-center font-bold text-xl lg:text-4xl mb-5 lg:mb-10">
                Member
            </h2>
            <div class="flex flex-col lg:flex-row lg:justify-between">
                <div v-for="item in members" :key="item.id" class="mx-auto lg:mx-5 mb-5 lg:mb-0">
                    <div class="bg-[#0096D1] rounded-md shadow">
                        <img :src="item.image" class="w-full h-48 lg:h-64 object-contain rounded-md" alt="Member" />
                    </div>
                    <p class="text-center m-2 text-base font-medium">
                        {{ item.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const members = [
    { id: 1, name: "Alam", image: "../../src/assets/img/person.png" },
    { id: 2, name: "Yadzka", image: "../../src/assets/img/person.png" },
    { id: 3, name: "Pandu", image: "../../src/assets/img/person.png" },
    { id: 4, name: "Lana", image: "../../src/assets/img/person.png" },
    { id: 5, name: "Faris", image: "../../src/assets/img/person.png" },
    { id: 6, name: "Nabeel", image: "../../src/assets/img/person.png" },
];
</script>