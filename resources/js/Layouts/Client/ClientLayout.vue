<script setup>
import { ref } from "vue";

import LeftSideBar from "./LeftSideBar.vue";

const routeName = route().current();
const activeClass = ref("bg-blue-700 v");
</script>

<template>
    <div class="custom-bg text-white font-lexend">
        <div class="flex flex-col lg:flex-row relative">
            <!-- Sidebar (Responsive) -->
            <LeftSideBar class="w-full h-auto lg:h-screen" />
            <!-- Main Content (Responsive) -->
            <div class="h-screen overflow-y-auto w-full">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-bg {
    background: linear-gradient(180deg, #bfe8ff 13%, #ffffff 100%);
}
.multicolor-text {
    background: linear-gradient(
        to left,
        violet,
        indigo,
        blue,
        green,
        orange,
        red
    );
    -webkit-background-clip: text;
    color: transparent;
}

.custom-background {
    background-image: url("../../../../public/assets/img/admin/bg_dashboard_default.png"); /* Update with your actual path */
    background-size: cover;
    background-position: center top;
}

.custom-info_1 {
    border: 2px solid #5ce2ffb2;
    background: #0085ff75;
    box-shadow: 0 0 15px rgba(0, 209, 255, 0.8); /* Shadow with glow effect */
}
</style>
