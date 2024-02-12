<script setup>
import maleIcon from "../components/MaleIcon.vue";
import femaleIcon from "../components/FemaleIcon.vue";

import { RouterLink} from 'vue-router';



</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-5xl font-bold text-center mt-14">Which do You Prefer?</h1>
        <div class="flex items-center justify-center h-screen">
            <div class="grid flex-grow h-20 card rounded-box place-items-center">
                <RouterLink :to="{ name: 'MaleCard' }">
                    <div class="transition-transform duration-300 transform-growth">
                        <h1 class="mb-16 text-4xl font-bold mb-15">Male</h1>
                        <maleIcon />
                    </div>
                </RouterLink>

            </div>
            <div class="py-32 text-3xl divider divider-horizontal">OR</div>
            <div class="grid flex-grow h-20 card rounded-box place-items-center">
                <RouterLink :to="{ name: 'FemaleCard' }">
                    <div class="transition-transform duration-300 transform-growth">
                        <h1 class="mb-16 text-4xl font-bold">Female</h1>
                        <femaleIcon />
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
   
</template>

<style scoped>
.transition-transform {
    transition-property: transform;
    transition-timing-function: ease;
}

.transform-growth:hover {
    transform: scale(1.25);
    cursor: pointer;
}
</style>
