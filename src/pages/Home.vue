<script setup>
import Navbar from '../components/Navbar.vue';
import { RouterLink} from 'vue-router';
</script>

<template>
    <Navbar />
    <section class="px-6 pt-8 pb-12 sm:pt-20 md:pb-16 lg:pb-0 2xl:pt-28" id="home">
        <div class="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:justify-between">
            <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:flex-1 lg:max-w-xl lg:text-left">
                <h1 class="text-5xl font-bold leading-none sm:text-7xl">
                    Kickstart your next Dating in minutes with <span class="text-pink-400">FINVER</span>
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12"> <span class="font-bold text-pink-400"> FINVER </span>is a DatingApp
                    Simulator project for INT203 Clientside Web programming II Subject This is our first group project build
                    by using Vuejs3 , tailwindcss and Daisy UI </p>
                <div
                    class="flex items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <RouterLink :to="{ name: 'Gender' }" class="px-8 py-3 text-lg font-semibold bg-pink-400 rounded button"> Get Started </RouterLink>
                </div>
            </div>
            <div
                class="flex items-center justify-center flex-shrink-0 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src="../assets/icons/Couple.svg" alt="couplepicture"
                    class="object-contain w-auto h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 aspect-square">
            </div>
        </div>

    </section>

    <section class="p-4 lg:p-8" id="features">
        <div class="container mx-auto space-y-20 lg:space-y-36">
            <div class="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:flex-row min-h-96">
                <div
                    class="flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 lg:justify-start sm:h-80 lg:h-96 lg:mb-0">
                    <!---->
                    <picture alt="" class="object-contain">
                        <source type="image/svg" srcset=""><img src="../assets/icons/Tinder.svg" alt="TinderReferences"
                            class="w-96 h-72 lg:h-96 aspect-video">
                    </picture><!---->
                </div>
                <div class="flex flex-col justify-center flex-1 px-6 lg:flex-2"><span
                        class="mb-2 text-base font-semibold tracking-widest uppercase text-rose-500"> A Dating App
                        Playground</span>
                    <h2 class="text-3xl font-bold"> Features base on Tinder App , But just <span
                            class="text-pink-400">Frontend</span></h2>
                    <h3 class="mt-3 text-lg font-bold">
                        The main features of my app are as follows:</h3>

                    <ul class="mx-4 my-3 list-disc">

                        <li>Users can select the gender they are interested in and view profiles of individuals they find
                            interesting. They have the option to either like or dislike profiles.</li>
                        <li>
                            The system keeps track of the number of likes received by a profile
                        </li>
                        <li>
                            Names and profile pictures of individuals who have been liked by the user are displayed.
                        </li>

                    </ul>
                </div>
            </div>

            <div
                class="flex flex-col max-w-xl mx-auto overflow-hidden rounded-md lg:max-w-full lg:mx-0 lg:flex-row-reverse min-h-96">
                <div
                    class="flex items-center justify-center flex-1 px-4 mb-8 lg:flex-3 h-72 lg:justify-end sm:h-80 lg:h-96 lg:mb-0">
                    <!---->
                    <picture alt="" class="object-contain">
                        <source type="image/svg" srcset=""><img src="../assets/icons/Subfeature.svg" alt="Sub Features"
                            class="object-contain w-80 h-72 lg:h-96 aspect-video">
                    </picture><!---->
                </div>
                <div class="flex flex-col justify-center flex-1 px-6 lg:flex-2"><span
                        class="mb-2 text-base font-semibold tracking-widest uppercase text-violet-400 "> Additional Features
                    </span>
                    <h2 class="text-3xl font-bold">More for additional features that we want to show</h2>
                    <ul class="mx-4 my-3 list-disc">
                        <li>Routing System: Utilizing vue-router version 4 to navigate to different pages seamlessly within
                            the app.</li>
                        <li>Basic Login System: A basic login system that displays the user's username while they are
                            actively using the app.</li>
                        <li>Dark Mode: An optional dark mode feature that users can toggle for a different visual
                            experience.</li>
                    </ul>
                </div>
            </div>




        </div>


    </section>

    <section class="p-10 lg:p-24" id="Team">
        <div
            class="relative pt-12 pb-24 text-center md:pt-24 after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-16 after:pointer-events-none dark:after:from-slate-900 dark:after:via-slate-900/95">
            <!-- Title -->
            <div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
                <h2 class="text-3xl font-bold lg:text-5xl lg:leading-tight dark:text-white">Our <span
                        class="text-rose-400 dark:text-rose-600">Team</span></h2>
                <p class="mt-5">Meet the dedicated team behind Finver, the dating app simulator</p>
            </div>
            <!-- End Title -->

            <!-- Grid -->
            <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <!-- Col -->
                <div class="space-y-4 xl:space-y-6">
                    <!-- Card -->
                    <div
                        class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                        <div class="p-4 md:p-6">
                            <div class="flex justify-between">
                                <div class="flex items-center mb-5 gap-x-3">
                                    <img class="inline-block rounded-full h-9 w-9"
                                        src="https://s3-alpha.figma.com/profile/6b687fac-8efb-43bc-95f0-2e7a2807ed30"
                                        alt="Image Description">
                                    <div class="grow">
                                        <p class="font-semibold text-gray-800 dark:text-white">Pheeraphat
                                            Dherachaisuphakij</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex text-xs flex-start badge badge-secondary badge-outline">Team Leader
                                </div>
                                <p class="pt-2 leading-7 text-gray-800 text-start dark:text-white">
                                    Beta Microsoft Learn Student Ambassadors , Frontend Developer Intern at Innovasive
                                    Co., Ltd. Student from SIT KMUTT IT#28
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div
                        class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                        <div class="p-4 md:p-6">
                            <div class="flex justify-between">
                                <div class="flex items-center mb-5 gap-x-3">
                                    <img class="inline-block rounded-full h-9 w-9"
                                        src="https://ph-avatars.imgix.net/5011220/9cb91dbe-4699-48fe-b4f5-9c70c69181f9"
                                        alt="Image Description">
                                    <div class="grow">
                                        <p class="font-semibold text-gray-800 dark:text-white">Taned Thanyapanich</p>
                                    </div>
                                </div>
                            </div>
                            <p class="leading-7 text-gray-800 text-start dark:text-white">
                                Student from SIT KMUTT IT#28
                            </p>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div
                        class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                        <div class="p-4 md:p-6">
                            <div class="flex justify-between">
                                <div class="flex items-center mb-5 gap-x-3">
                                    <img class="inline-block rounded-full h-9 w-9"
                                        src="https://s3-alpha.figma.com/profile/6b8a7cf2-08ac-4c50-b931-4c533a8a0731"
                                        alt="Image Description">
                                    <div class="grow">
                                        <p class="font-semibold text-gray-800 dark:text-white">Nateetarn Likitwiwatpong
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <p class="leading-7 text-gray-800 text-start dark:text-white">
                                Student from SIT KMUTT IT#28
                            </p>
                        </div>
                    </div>
                    <!-- End Card -->


                </div>
                <!-- End Col -->

                <!-- Col -->
                <div class="space-y-4 xl:space-y-6">
                    <!-- Card -->
                    <div
                        class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                        <div class="p-4 md:p-6">
                            <div class="flex justify-between">
                                <div class="flex items-center mb-5 gap-x-3">
                                    <img class="inline-block rounded-full h-9 w-9"
                                        src="https://pbs.twimg.com/profile_images/1738985748978876416/FMpE71i5_400x400.jpg"
                                        alt="Image Description">
                                    <div class="grow">
                                        <p class="font-semibold text-gray-800 dark:text-white">Nateetarn Likitwiwatpong
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p class="leading-7 text-gray-800 text-start dark:text-white">
                                Student from SIT KMUTT IT#28
                            </p>
                        </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div
                        class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                        <div class="p-4 md:p-6">
                            <div class="flex justify-between">
                                <div class="flex items-center mb-5 gap-x-3">
                                    <img class="inline-block rounded-full h-9 w-9"
                                        src="https://s3-alpha.figma.com/profile/52084af6-a7ab-4c70-ae99-9346239293cf"
                                        alt="Image Description">
                                    <div class="grow">
                                        <p class="font-semibold text-gray-800 dark:text-white">Jiraplus Chanpong</p>
                                    </div>
                                </div>

                            </div>
                            <p class="leading-7 text-gray-800 text-start dark:text-white">
                                Student from SIT KMUTT IT#28
                            </p>
                        </div>
                    </div>
                    <!-- End Card -->


                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
    </section>

    <section class="p-10 lg:p-24" id="FAQ">
         <!-- Title -->
         <div class="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
            <p class="p-2 text-sm font-semibold tracking-wider text-center uppercase text-rose-400"> How it works </p>
            <h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-4xl"> Frequently Asked Questions </h2>
            </div>
        <div class="w-full join join-vertical">
            <div class="border collapse collapse-arrow join-item border-base-300">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div class="text-xl font-medium collapse-title">
                    How can I Play?
                </div>
                <div class="collapse-content">
                    <p>Just click get started</p>
                </div>
            </div>
            <div class="border collapse collapse-arrow join-item border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div class="text-xl font-medium collapse-title">
                    Is your Project a Tinder Clone
                </div>
                <div class="collapse-content">
                    <p>It's Likely a tinder clone but we just build in frontend only</p>
                </div>
            </div>
            <div class="border collapse collapse-arrow join-item border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div class="text-xl font-medium collapse-title">
                    Who is the pillar of this group
                </div>
                <div class="collapse-content">
                    <p>Pheeraphat or you can called him P</p>
                </div>                
            </div>
        </div>
    </section>
</template>

<style scoped>

.button{
    transition: transform 0.25s ease-in-out;
}
.button:hover {
    transform: scale(1.1);    
}
</style>
