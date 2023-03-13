<template>
  <div class="bg-bgGray">
    <div class="container h-12">
      <div class="grid grid-cols-12 h-12">
        <div class="col-span-9 flex justify-center items-center">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <i class="fa-regular fa-magnifying-glass text-[#697386]"></i>
            </span>
            <!-- <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white border rounded-3xl py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          /> -->
            <input
              placeholder="Type email, phone or customer name... [Tip: Hit/ to activate search]"
              type="text"
              name="search"
              class="focus:outline-none border w-[450px] border-[#dadcdf] rounded-3xl focus:shadow-2xl pl-8 placeholder:text-[#697386] placeholder:font-poppins placeholder:text-[12px]"
            />
          </label>
        </div>
        <div class="col-span-3 flex justify-center items-center">
          <div class="mr-4">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="border border-[#6257fc] px-4 rounded-3xl font-poppins text-[12px] py-1 text-left text-[#6257fc] font-medium"
                >
                  Create
                  <i
                    class="fa-sharp fa-solid fa-chevron-down text-[#6257fc] pl-2"
                  ></i>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active
                            ? 'bg-violet-500 text-[#6257fc]'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Edit
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active
                            ? 'bg-violet-500 text-[#6257fc]'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Duplicate
                      </button>
                    </MenuItem>
                  </div>
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active
                            ? 'bg-violet-500 text-[#6257fc]'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Archive
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active
                            ? 'bg-violet-500 text-[#6257fc]'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Move
                      </button>
                    </MenuItem>
                  </div>

                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active
                            ? 'bg-violet-500 text-[#6257fc]'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Delete
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="flex justify-center items-center mr-4 cursor-pointer">
            <i
              class="fa-solid fa-circle-question text-[#535868] text-[18px] mr-1"
            ></i>
            <p class="font-poppins text-[#535868] text-[14px] font-light">
              Help
            </p>
          </div>
          <div class="mr-5 cursor-pointer">
            <i
              class="fa-sharp fa-solid fa-gear text-[#535868] text-[18px] mr-1"
            ></i>
          </div>
          <div class="cursor-pointer">
            <i class="fa-solid fa-user text-[#535868] text-[18px] mr-1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="border-y-2 border-[#f4f5f7]">
    <div class="container h-12">
      <div class="grid grid-cols-12 h-12">
        <div class="col-span-9 flex items-center">
          <ul class="flex">
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Meetings</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Inbox</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Tasks</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                activeClass="bg-bgPurpal text-white"
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >customers</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Deals</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Tickets</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Order</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >Reports</NuxtLink
              >
            </li>
            <li class="mr-2">
              <NuxtLink
                class="text-blue-500 hover:bg-bgPurpal hover:text-white font-poppins py-1 px-4 duration-200 rounded-3xl"
                to="#"
                >More
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
