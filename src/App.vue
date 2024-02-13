<script setup>
import { ref } from "vue";


const isDropdownVisible = ref(false);

const toggleDropdown = () => {
	isDropdownVisible.value = !isDropdownVisible.value;
};

const closeDropdown = () => {
	isDropdownVisible.value = false;
};

const isLoginModalOpen = ref(false);
const username = ref("");
const password = ref("");

const openLoginModal = () => {
	isLoginModalOpen.value = false;
	console.log(username.value);
	console.log(password.value);
};

const closeLoginModal = () => {
	isLoginModalOpen.value = false;
	// Optionally, you may want to clear the form fields here
	username.value = "";
	password.value = "";
	console.log(username.value);
	console.log(password.value);
};


const isNavbarWhite = ref(true);

window.addEventListener("scroll", () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Change the background color based on the scroll position
    isNavbarWhite.value = scrollPosition < 50;
});

</script>

<template>

	<!-- Navbar-->
	<div class="sticky top-0 z-50 pt-3 navbar" :class="{ 'bg-pink-100': isNavbarWhite, 'bg-pink-300': !isNavbarWhite }">
		<div class="flex-1">
			<a class="text-3xl text-pink-900 btn btn-ghost">FINVER</a>
		</div>
		<div class="flex-none gap-5">
			<div>
				<ul class="flex gap-10 text-xl font-semibold text-pink-900">
					<li class="cursor-pointer "><a href="#home">Home</a></li>
					<li class="cursor-pointer"><a href="#features">Feature</a></li>
					<li class="cursor-pointer"><a href="#Team">OurTeam</a></li>
					<li class="cursor-pointer"><a href="#FAQ">FAQ</a></li>
				</ul>
			</div>
			<!-- toggle BG Change -->
			<div class="flex justify-end">
				<label class="swap swap-rotate">
					<input type="checkbox" class="theme-controller" value="dracula" />
					<!-- sun icon -->
					<svg class="w-10 h-10 text-orange-400 fill-current swap-off" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
					</svg>
					<!-- moon icon -->
					<svg class="w-10 h-10 fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
					</svg>
				</label>
			</div>

			<!-- Account Icon -->
			<div>
				<div @click="toggleDropdown" tabIndex="0" role="button" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img alt="Tailwind CSS Navbar component"
							src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<ul v-show="isDropdownVisible" @click.away="closeDropdown" tabIndex="0"
					class="absolute mt-3 right-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
					<li>
						<a class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a>Settings</a></li>
					<li><a @click="isLoginModalOpen = true">Login</a></li>
				</ul>
			</div>
			<div>
				<!-- Login Modal -->
				<div v-if="isLoginModalOpen"
					class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div class="z-0 p-6 bg-white rounded shadow-md w-96">
						<h2 class="flex justify-center mb-4 text-3xl font-bold">FINVER</h2>

						<!-- Your login form goes here -->
						<form @submit.prevent="login">
							<div class="mb-4">
								<label for="username" class="block text-sm font-semibold text-gray-600">Username:</label>
								<input type="text" id="username" v-model.trim="username"
									class="w-full p-2 bg-white border border-gray-300 rounded placeholder:italic placeholder:text-slate-400"
									placeholder="Enter Username" />
							</div>

							<div class="mb-4">
								<label for="password" class="block text-sm font-semibold text-gray-600">Password:</label>
								<input type="password" id="password" v-model.trim="password"
									class="w-full p-2 bg-white border border-gray-300 rounded placeholder:italic placeholder:text-slate-400"
									placeholder="Enter Password" />
							</div>

							<button @click="openLoginModal" type="button" class="p-2 text-white bg-blue-500 rounded">
								Login
							</button>
						</form>

						<button @click="closeLoginModal" class="mt-4 text-gray-600">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Section Landing Page -->
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
                <img src="./assets/icons/Couple.svg" alt="couplepicture"
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
                        <source type="image/svg" srcset=""><img src="./assets/icons/Tinder.svg" alt="TinderReferences"
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
                        <source type="image/svg" srcset=""><img src="./assets/icons/Subfeature.svg" alt="Sub Features"
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
	cursor: pointer;
}
.button:hover {
    transform: scale(1.1);    
}

</style>
