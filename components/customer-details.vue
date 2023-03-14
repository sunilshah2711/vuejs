<template>
  <div class="flex justify-between">
    <div class="">
      <h3 class="font-roboto font-semibold text-[20px] text-[#1A1B25]">
        Sunil Shah
      </h3>
    </div>
    <div class="flex">
      <div class="mr-2">
        <button
          @click="awesome = !awesome"
          class="bg-bgPurpal text-white p-1 px-2 rounded-md hover:text-bgPurpal hover:bg-white border border-bgPurpal duration-200"
        >
          <i v-if="awesome" class="fa-light fa-pen"></i>
          <i v-else class="fa-sharp fa-regular fa-check"></i>
        </button>
      </div>
      <NuxtLink
        to="/"
        class="border border-bgPurpal p-1 px-2 rounded-md text-bgPurpal"
      >
        <i class="fa-regular fa-arrow-left mr-1"></i> Back</NuxtLink
      >
    </div>
  </div>
  <div class="mt-5">
    <div class="grid grid-cols-12">
      <div class="col-span-1">
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          ID
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          Name
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          Email
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          Status
        </p>
      </div>
      <div class="col-span-4" v-if="awesome">
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          D3B63772-6EC5-5EEF-AD35-AC5235AE22B5
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          Kaseem Peterson
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          (229) 677-1071
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385] mb-1">
          Working
        </p>
      </div>

      <div class="col-span-4" v-else>
        <div class="pb-2 font-roboto font-normal text-[16px] text-[#687385]">
          <input
            type="text"
            class="bg-gray-50 border w-full border-[#b0b2b4] text-gray-900 text-sm rounded-lg focus:ring-bgPurpal focus:border-bgPurpal block focus-visible:outline-none p-1"
            placeholder="ID"
            value="D3B63772-6EC5-5EEF-AD35-AC5235AE22B5"
            name="id"
          />
        </div>
        <div class="pb-2 font-roboto font-normal text-[16px] text-[#687385]">
          <input
            type="text"
            class="bg-gray-50 border w-full border-[#b0b2b4] text-gray-900 text-sm rounded-lg focus:ring-bgPurpal focus:border-bgPurpal block focus-visible:outline-none p-1"
            placeholder="Name"
            value="Kaseem Petersons"
            name="name"
          />
        </div>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385]">
          <input
            type="text"
            class="bg-gray-50 border w-full border-[#b0b2b4] text-gray-900 text-sm rounded-lg focus:ring-bgPurpal focus:border-bgPurpal block focus-visible:outline-none p-1"
            placeholder="Phone"
            value="(229) 677-1071"
            name="phone"
          />
        </p>
        <p class="pb-2 font-roboto font-normal text-[16px] text-[#687385]">
          <input
            type="text"
            class="bg-gray-50 border w-full border-[#b0b2b4] text-gray-900 text-sm rounded-lg focus:ring-bgPurpal focus:border-bgPurpal block focus-visible:outline-none p-1"
            placeholder="Status"
            value="Working"
            name="status"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
    };
  },
};
</script>
