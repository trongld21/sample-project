<template>
    <div class="Wapper-Layout w-full h-screen">
        <!-- header -->
        <div
            class="flex gap-3 text-[#2C75E3] mt-20 mb-5 ml-6 lg:mt-7 lg:ml-10 lg:mb-12"
        >
            <img
                src="/assets/img/icons/homePage.png"
                alt=""
                class="object-contain"
            />
            <span>/</span>
            <span>Mốc thời gian</span>
        </div>

        <!-- main-body -->
        <div class="flex relative flex-col lg:flex-row lg:justify-around">
            <div class="flex flex-1 lg:justify-center lg:flex-[0.8]">
                <div
                    class="flex flex-col bg-white rounded-xl lg:rounded-3xl pt-0 lg:pt-6 pb-0 lg:pb-6 w-full"
                >
                    <div class="flex flex-col justify-center items-center">
                        <div
                            v-for="(item, index) in timelineData"
                            :key="index"
                            class="flex flex-col my-4 p-6 lg:p-0"
                        >
                            <!-- display -->
                            <div class="flex w-full">
                                <div class="flex">
                                    <h2
                                        class="text-lg font-bold text-black mr-3"
                                    >
                                        {{ item.date }}
                                    </h2>
                                    <div
                                        class="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center z-10"
                                    >
                                        {{ item.number }}
                                    </div>
                                </div>

                                <div class="ml-8 w-[230px]">
                                    <h2
                                        class="text-lg font-bold text-[#0055D3] max-w-[180px]"
                                    >
                                        {{ item.title }}
                                    </h2>

                                    <ul class="list-none relative">
                                        <li
                                            v-for="(
                                                item, itemIndex
                                            ) in item.aiServices"
                                            :key="itemIndex"
                                            class="text-gray-700 before:content-[''] before:absolute before:left-[-49px] b before:w-[2px] before:h-full before:bg-[#B1B1B1] before:top-1/2 before:-translate-y-1/2"
                                        >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col relative top-10 lg:top-[-36px]">
                <div class="flex mb-4 lg:mb-2">
                    <img
                        src="/assets/img/Vector.png"
                        alt=""
                        class="object-contain mr-2"
                    />
                    <h1 class="text-black text-xl font-semibold">Nổi bật</h1>
                </div>

                <div
                    class="content-right-items items-center justify-center flex flex-col gap-4"
                >
                    <div
                        v-for="(item, index) in asistants"
                        :key="item.id"
                        class="item rounded-3xl bg-white p-2 w-[70%] lg:w-auto"
                    >
                        <div class="card">
                            <div class="card-header flex p-2 justify-between">
                                <div class="flex">
                                    <div>
                                        <img
                                            :src="item.image"
                                            alt="Avatar"
                                            :style="{
                                                backgroundColor: item.hex,
                                            }"
                                            class="w-12 h-12 rounded-xl object-scale-down"
                                        />
                                    </div>
                                    <div class="flex flex-col pl-4">
                                        <h5
                                            class="text-sm font-semibold font-lexend text-black"
                                        >
                                            {{ item.name }}
                                        </h5>
                                        <h5
                                            class="text-sm font-semibold font-lexend text-black"
                                        >
                                            {{ item.des }}
                                        </h5>
                                        <div class="flex p-1">
                                            <div
                                                class="circle bg-blue-500 rounded-full w-5 h-5 mr-1"
                                            ></div>
                                            <span
                                                class="inline-block py-1 text-sm font-semibold text-black"
                                                >{{ item.course }}</span
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center flex-col gap-3">
                                    <div>
                                        <img
                                            src="/assets/img/VectorHeart.png"
                                            alt=""
                                            class="size-4 object-contain cursor-pointer"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/assets/img/VectorShare.png"
                                            alt=""
                                            class="size-4 object-contain cursor-pointer"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src="/assets/img/VectorSend.png"
                                            alt=""
                                            class="size-4 object-contain cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body"></div>
                            <div
                                class="card-footer bg-[#DBDBDB] p-1 pl-3 pr-3 rounded-2xl"
                            >
                                <span class="text-black font-bold"
                                    >Miễn phí</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Client/ClientLayout.vue";

const timelineData = [
    {
        number: 4,
        date: "Tháng 4 - 2014",
        title: "15 nghiệp vụ AI mới",
        aiServices: [
            "Phát triển phần mềm",
            "Quản lý nghiệp vụ tiếp thị",
            "Trang Wikipedia",
            "Quản lý email Outlook",
            "Hướng dẫn chơi cờ",
            "Cập nhật phát hành sản phẩm",
            "Phân tích bài đăng trên mạng xã hội",
            "Tìm kiếm nội dung giáo dục",
            "Kế hoạch ăn mừng",
            "Lưu đồ",
            "Nhập vai Anime",
            "Tự động hóa An ninh",
            "Tư vấn định cư",
            "Video Tiktok",
            "Quản lý thu chi",
        ],
    },
    {
        number: 3,
        date: "Tháng 3 - 2014",
        title: "5 nghiệp vụ AI mới",
        aiServices: [
            "Phát triển thời trang",
            "Dự đoán xu hướng bằng giọng nói",
            "Tư vấn thời trang",
            "Phân tích thị trường",
            "Đưa ra gợi ý cá nhân hóa",
        ],
    },
    {
        number: 2,
        date: "Tháng 2 - 2014",
        title: "5 nghiệp vụ AI mới",
        aiServices: [
            "Phát triển thời trang",
            "Dự đoán xu hướng bằng giọng nói",
            "Tư vấn thời trang",
            "Phân tích thị trường",
            "Đưa ra gợi ý cá nhân hóa",
        ],
    },
];

const asistants = [
    {
        id: 1,
        name: "Trợ lí nổi bật 1",
        des: "Tạo 10 ý tưởng...",
        course: "Giáo dục và...",
        price: "Miễn phí",
        image: "/assets/img/Capas/Capa_2.png",
        hex: "#FFD43B",
    },
    {
        id: 2,
        name: "Trợ lí nổi bật 1",
        des: "Tạo 10 ý tưởng...",
        course: "Giáo dục và...",
        price: "Miễn phí",
        image: "/assets/img/Capas/Capa_1.png",
        hex: "#2C75E3",
    },
    {
        id: 3,
        name: "Trợ lí nổi bật 1",
        des: "Tạo 10 ý tưởng...",
        course: "Giáo dục và...",
        price: "Miễn phí",
        image: "/assets/img/Capas/Capa_3.png",
        hex: "#FFEBA3",
    },
    {
        id: 4,
        name: "Trợ lí nổi bật 1",
        des: "Tạo 10 ý tưởng...",
        course: "Giáo dục và...",
        price: "Miễn phí",
        image: "/assets/img/Capas/Capa_2.png",
        hex: "#FFEBA3",
    },
    {
        id: 5,
        name: "Trợ lí nổi bật 1",
        des: "Tạo 10 ý tưởng...",
        course: "Giáo dục và...",
        price: "Miễn phí",
        image: "/assets/img/Capas/Capa_1.png",
        hex: "#2C75E3",
    },
];

defineOptions({ layout: Layout });
</script>

<style scoped>
/* add more custom style for sidebar */
.Wapper-Layout {
    background-image: url("/assets/img/layout.png");
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
