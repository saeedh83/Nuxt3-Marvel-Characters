<script setup>
   const props = defineProps({
      series: Array,
   });

   const showAll = ref(props.series.length < 8);
</script>

<template>
   <div class="mt-10 p-[30px] bg-black rounded-2xl" v-if="series?.length">
      <h3 class="text-[28px] font-[700]">series ({{ series?.length }})</h3>
      <div
         class="mt-5 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 overflow-hidden relative"
         :class="[showAll ? 'max-h-auto' : 'max-h-[330px]']">
         <SingleCharacterSerie v-for="serie in series" :name="serie.name" />
         <!-- cover -->
         <span
            v-show="!showAll"
            class="character-cover absolute bottom-0 right-0 w-full h-[130px] bg-black flex items-center justify-center pt-8">
            <button
               @click="showAll = true"
               class="bg-white text-black px-[14px] py-[10px] rounded-[8px]">
               Show All Series
            </button>
         </span>
      </div>
   </div>
</template>

<style scope>
   .character-cover {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
   }
</style>
