<template>
  <div class="container h-12 mt-5">
    <TabGroup>
      <div class="grid grid-cols-12 h-12">
        <div class="col-span-2">
          <div class="mb-3">
            <h3 class="font-bold text-[20px] font-poppins text-[#30313D]">
              Customers
            </h3>
          </div>

          <div class="mt-8">
            <TabList
              class="[&>button]:block [&>button]:pl-4 [&>button]:border-l-2 [&>button]:border-[#f4f5f7] [&>button]:p-[6px] [&>button]:font-poppins [&>button]:font-normal [&>button]:text-[16px]"
            >
              <Tab
                class="ui-selected:text-bgPurpal duration-200 hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                >Overview</Tab
              >
              <Tab
                class="ui-selected:text-bgPurpal duration-200 hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                >Insights</Tab
              >
              <Tab
                class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                >Details</Tab
              >
              <!-- <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Quotes</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Order</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Tickets</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Tasks</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Mettings</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Notes</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Attachment</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Emails</Tab
                >
                <Tab
                  class="ui-selected:text-bgPurpal hover:text-bgPurpal hover:border-bgPurpal ui-selected:border-bgPurpal focus-visible:outline-none"
                  >Logs</Tab
                > -->
            </TabList>
          </div>
        </div>
        <div class="col-span-10">
          <TabPanels class="mt-2">
            <TabPanel><customer-details /></TabPanel>
            <TabPanel><P class="font-poppin">Complains</P> </TabPanel>
            <TabPanel><P class="font-poppin">Deals</P> </TabPanel>
            <!-- <TabPanel><P class="font-poppin">Quotes</P> </TabPanel>
              <TabPanel> <P class="font-poppin">Order</P></TabPanel>
              <TabPanel> <P class="font-poppin">Tickets</P></TabPanel>
              <TabPanel><P class="font-poppin">Tasks</P> </TabPanel>
              <TabPanel> <P class="font-poppin">Mettings</P></TabPanel>
              <TabPanel><P class="font-poppin">Notes</P> </TabPanel>
              <TabPanel><P class="font-poppin">Attachment</P> </TabPanel>
              <TabPanel><P class="font-poppin">Emails</P> </TabPanel>
              <TabPanel> <P class="font-poppin">Logs</P></TabPanel> -->
          </TabPanels>
        </div>
      </div>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>
