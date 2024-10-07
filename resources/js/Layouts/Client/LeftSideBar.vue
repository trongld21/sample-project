<template>
    <!-- Wrapper Sidebar -->
    <div
        :class="[
            'bg-white pb-4 flex flex-col lg:p-6 transition-all duration-300',
            isSidebarCollapsed ? 'lg:w-32' : 'lg:w-80',
        ]"
    >
        <!-- Logo -->
        <div
            class="bg-white flex p-6 h-20 fixed z-50 w-full lg:w-auto lg:relative lg:h-auto lg:p-0"
        >
            <img
                src="/assets/img/Menu.png"
                class="cursor-pointer object-contain"
                alt=""
                @click="handleClickMenu"
            />
            <img
                src="/assets/img/logoAiwow.png"
                alt=""
                class="ml-6 mr-6"
                :class="{ 'lg:hidden': isSidebarCollapsed }"
            />
        </div>

        <!-- Navbar -->
        <ul
            class="bg-white flex flex-col fixed top-20 z-50 p-6 w-full h-screen text-2xl gap-4 lg:relative lg:gap-3 lg:mt-7 lg:text-black lg:text-sm lg:top-0 lg:p-0 overflow-y-auto max-h-[90%]"
            :class="{ 'hidden lg:flex': !isSideBerVisible }"
        >
            <!-- Section 1 -->
            <li
                v-for="(item, index) in navItemsUp"
                :key="index"
                class="nav-items flex"
            >
                <img
                    :src="item.icon"
                    alt="nav-icon"
                    class="nav-icons object-contain mr-5 cursor-pointer"
                />
                <div
                    class="nav-content text-black cursor-pointer"
                    :class="{ 'lg:hidden': isSidebarCollapsed }"
                >
                    {{ item.name }}
                </div>
            </li>
            <!-- Active Items -->
            <li class="nav-items flex active">
                <img
                    src="/assets/img/icons/times.png"
                    alt="times-icons"
                    class="object-contain mr-5 cursor-pointer"
                />
                <div
                    class="nav-content text-black cursor-pointer"
                    :class="{ 'lg:hidden': isSidebarCollapsed }"
                >
                    Mốc thời gian
                </div>
            </li>

            <li
                v-for="(item, index) in navItemsDown"
                :key="index"
                class="nav-items flex"
                key="{item.name}"
            >
                <img
                    :src="item.icon"
                    alt="nav-icon"
                    class="nav-icons cursor-pointer object-contain mr-5"
                />
                <div
                    class="nav-content text-black cursor-pointer"
                    :class="{ 'lg:hidden': isSidebarCollapsed }"
                >
                    {{ item.name }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Head } from "@inertiajs/vue3";

const isSidebarCollapsed = ref(false);

const toggleSidebarCollapsed = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

// Trạng thái hiển thị của logo
const isSideBerVisible = ref(true);

// Hàm toggle sider - mobile
const toggleSidebar = () => {
    isSideBerVisible.value = !isSideBerVisible.value; // Đảo ngược trạng thái
};

// Data - 1
const navItemsUp = ref([
    {
        name: "Trang Chủ",
        icon: "/assets/img/icons/homePage.png",
    },
    {
        name: "Chát",
        icon: "/assets/img/icons/chat.png",
    },
    {
        name: "Hình ảnh",
        icon: "/assets/img/icons/image.png",
    },
    {
        name: "Ngành nghề",
        icon: "/assets/img/icons/job.png",
    },
    {
        name: "Nghiệp vụ",
        icon: "/assets/img/icons/career.png",
    },
    {
        name: "AI mới",
        icon: "/assets/img/icons/ai.png",
    },
    {
        name: "Yêu thích",
        icon: "/assets/img/icons/favorite.png",
    },
    {
        name: "Nhiều người yêu thích",
        icon: "/assets/img/icons/favorites.png",
    },
]);

// Data - 2
const navItemsDown = ref([
    {
        name: "Nổi bật",
        icon: "/assets/img/icons/prominent.png",
    },
    {
        name: "Người ảnh hưởng",
        icon: "/assets/img/icons/loa.png",
    },
    {
        name: "Bản tin",
        icon: "/assets/img/icons/news.png",
    },
    {
        name: "Diễn đàn",
        icon: "/assets/img/icons/forum.png",
    },
    {
        name: "Yêu cầu",
        icon: "/assets/img/icons/request.png",
    },
    {
        name: "kết nối với công chúng",
        icon: "/assets/img/icons/connect.png",
    },
    {
        name: "Tài khoảng",
        icon: "/assets/img/icons/setting.png",
    },
]);

const handleResize = () => {
    if (window.innerWidth >= 1024) {
        isSideBerVisible.value = true;
    } else {
        isSideBerVisible.value = false;
    }
};

const handleClickMenu = () => {
    toggleSidebar();
    toggleSidebarCollapsed();
};

onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
});
</script>

<style scoped>
/* add more custom style for sidebar */
.nav-items {
    transition: all 0.4s ease;
}

.nav-items.active {
    position: relative;
    left: -14px;
    max-width: 75%;
    padding: 6px 16px;
    border-radius: 12px;
    background: #2c75e3;
}

.nav-items.active > div {
    color: white;
}
</style>
