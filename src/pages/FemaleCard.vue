<script setup>

import { ref } from "vue";
import femaleProfilesData from "../../data/Female.json";

const femaleProfiles = femaleProfilesData.femaleProfiles;

const showDescriptions = ref(false);
const isFlipped = ref(false);

const toggleDescriptions = () => {
	showDescriptions.value = !showDescriptions.value;
};

const likedProfiles = ref([]);



// let count = ref(0);
const heartCount = ref(0);

const incrementHeartCount = (profileIndex) => {
	heartCount.value++;
	// เพิ่มโปรไฟล์ที่ถูก like เข้าไปใน likedProfiles
	likedProfiles.value.push(femaleProfiles[profileIndex]);
	// ลบโปรไฟล์ที่ถูก like ออกจาก femaleProfiles
	femaleProfiles.splice(profileIndex, 1);
	// Optionally, check if there are more profiles remaining
	if (femaleProfiles.length === 0) {
		// Handle the case when there are no more profiles
		// You might want to show a message or fetch more profiles
		console.log("No more profiles");
		return;
	}
};


const dislikeProfile = () => {
	heartCount.value++;
	heartCount.value--;
	// Remove the current profile from the array
	femaleProfiles.splice(0, 1);
	// Optionally, check if there are more profiles remaining
	if (femaleProfiles.length === 0) {
		// Handle the case when there are no more profiles
		// You might want to show a message or fetch more profiles
		console.log("No more profiles");
		return;
	}
	// Toggle the descriptions and update the flipped state
	showDescriptions.value = false;
};

</script>

<template>
	<!-- Heart modal-->
	<div class="mt-5 ml-6">
		<button class="duration-300 bg-pink-500 hover:bg-pink-700 btn btn-circle btn-lg hover:scale-125"
			onclick="modal.showModal()">
			<svg class="text-pink-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="m11 19.654l-1.156-1.042q-2.28-2.087-3.799-3.593q-1.518-1.506-2.413-2.679q-.895-1.173-1.264-2.146Q2 9.221 2 8.225q0-1.908 1.296-3.201Q4.592 3.731 6.5 3.731q1.32 0 2.475.672q1.156.672 2.025 1.96q.87-1.288 2.025-1.96q1.156-.672 2.475-.672q1.817 0 3.063 1.172q1.245 1.172 1.402 2.878q-.442-.143-.896-.202q-.454-.06-.913-.06q-2.183.02-3.794 1.52q-1.612 1.501-1.612 3.923q0 .988.362 1.976q.361.987 1.1 1.781q-.533.483-1.17 1.069q-.638.585-1.284 1.181zm6.95-4.19l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.545l.713.708z" />
			</svg>
		</button>
	</div>
	<dialog id="modal" class="modal">
		<div class="modal-box">
			<h3 class="text-lg font-bold text-center">Liked {{ heartCount }}</h3>

			<div class="flex justify-center">
				<p>
					<svg class="mt-1 text-pink-500" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em"
						viewBox="0 0 24 24">
						<path fill="currentColor"
							d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83z" />
					</svg>
				</p>
			</div>

			<!-- แสดงรายชื่อและรูปโปรไฟล์ของคนที่ได้รับการไลค์ไปแล้ว -->
			<div class="flex flex-col items-center justify-center gap-5 mt-5 cursor-pointer">
				<div v-for="(profile, index) in likedProfiles" :key="index" class="chat-bubble">
					<img v-if="profile.profilePicture && profile.profilePicture.length > 0" :src="profile.profilePicture[0]"
						:alt="profile.name" class="profile-pic">
					<div class="chat-text">{{ profile.name }}</div>
				</div>
			</div>

		</div>
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>

	<!-- Main Content -->
	<div class="flex items-center justify-center h-screen">
		<div class="max-w-md p-4 space-x-4 carousel carousel-center rounded-box">
			<div v-for="(profile, index) in femaleProfiles" :key="profile.id" class="carousel-item">
				<div class="flex justify-center transition-all duration-500 ease-in-out">
					<div class="flex justify-center p-5 pt-[5em]">
						<!-- Card  -->
						<div class="shadow-xl bg-rose-100 card w-96">
							<div class="h-96 carousel carousel-vertical rounded-t-xl">
								<div v-for="(picture, pictureIndex) in profile.profilePicture" :key="pictureIndex"
									class="h-full carousel-item">
									<img :src="picture" :alt="`${profile.name} Image ${pictureIndex + 1}`"
										class="rounded-t-xl" width="385px" />
								</div>
							</div>

							<!-- Name -->
							<div class="grid grid-cols-3 card-body">
								<h2 class="col-span-2 card-title">
									{{ profile.name }} &nbsp;{{ profile.age }}
								</h2>
								<!-- Dropdown -->
								<button class="flex items-end justify-end col-span-1 dropdown dropdown-end"
									@click="toggleDescriptions">
									<svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"
										:class="{ 'rotate-180': isFlipped }">
										<path fill="currentColor"
											d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0" />
									</svg>
								</button>
								<!-- Desc -->
								<p class="col-span-3">
									<span class="font-bold">Bio:</span> {{ profile.bio }}
								</p>
								<!-- Hidden Desc -->
								<div class="col-span-3 max-h-[200px] overflow-y-auto transition-all duration-500 ease-in-out"
									:style="{ maxHeight: showDescriptions ? '200px' : '0' }">

									<p>
										<span class="font-bold">Dating Goal:</span>
										{{ profile.datingGoal }}
									</p>
									<p>
										<span class="font-bold">Lifestyle:</span>
										{{ profile.lifestyle }}
									</p>
									<p>
										<span class="font-bold">Location:</span>
										{{ profile.location }}
									</p>
									<p>
										<span class="font-bold">Height:</span>
										{{ profile.height }}
									</p>
									<p>
										<span class="font-bold">Language:</span>
										{{ profile.language }}
									</p>
									<p>
										<span class="font-bold">Education:</span>
										{{ profile.education }}
									</p>
									<p>
										<span class="font-bold">MBTI:</span> {{ profile.mbti }}
									</p>
									<p>
										<span class="font-bold">Hobby:</span>
										{{ profile.loveStyle }}
									</p>
									<p>
										<span class="font-bold">Interested:</span>
										{{ profile.interested }}
									</p>
								</div>
								<!-- Dislike Icon -->
								<div class="col-span-3 gap-[3em] pt-4 card-actions flex justify-center">
									<button @click="dislikeProfile"
										class="duration-300 bg-red-300 border-red-300 cursor-pointer hover:bg-red-600 hover:border-red-600 btn btn-circle btn-lg hover:scale-125">
										<svg class="mt-1 text-red-800" xmlns="http://www.w3.org/2000/svg" width="2.9em"
											height="2.9em" viewBox="0 0 24 24">
											<path fill="currentColor"
												d="M12.025 20.675q-2.696-2.702-4.443-4.546q-1.747-1.844-2.766-3.19q-1.018-1.347-1.417-2.37Q3 9.546 3 8.5q0-2.088 1.456-3.544T8 3.5q.952 0 1.848.326q.896.326 1.625.947L9.827 10.5h3.058l-.754 8.067L15.192 8.5h-3.038l1.486-4.454q.53-.273 1.12-.41q.592-.136 1.202-.136q2.088 0 3.544 1.456T20.962 8.5q0 1.065-.431 2.123T19.06 13.06q-1.04 1.378-2.756 3.2q-1.716 1.822-4.279 4.416" />
										</svg>
									</button>
									<!-- Heart Icon -->
									<button @click="incrementHeartCount(index)"
										class="duration-300 bg-green-300 border-green-300 hover:bg-green-400 hover:border-green-400 btn btn-circle btn-lg hover:scale-125">
										<svg class="mt-1 text-green-600" xmlns="http://www.w3.org/2000/svg" width="3em"
											height="3em" viewBox="0 0 24 24">
											<path fill="currentColor"
												d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.829q-1.602-1.592-2.529-2.808q-.926-1.217-1.295-2.201Q3 9.146 3 8.15q0-1.908 1.296-3.204Q5.592 3.65 7.5 3.65q1.32 0 2.475.675T12 6.288Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296Q21 6.242 21 8.15q0 .996-.368 1.98q-.369.985-1.295 2.202q-.927 1.216-2.52 2.808q-1.592 1.593-4.06 3.83z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Main Content-->
</template>

<style scoped>
.content {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.5s ease;
}

.show {
	max-height: 200px;
	/* ปรับค่าตามความต้องการ */
}

/* CSS สำหรับแสดงผลเหมือนกล่องแชทในแอป Messenger */
.flex {
	width: 100%;
}

.chat-bubble {
	display: flex;
	align-items: center;
	width: 100%;
}

.profile-pic {
	border-radius: 50%;
	width: 3em;
}

.chat-text {
	padding: 10px;
	border-radius: 10px;
}
</style>