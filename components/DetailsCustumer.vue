<template>
  <input
    v-model="searchValue"
    type="text"
    class="bg-gray-50 border border-[#b0b2b4] text-gray-900 text-sm rounded-lg focus:ring-bgPurpal focus:border-bgPurpal block p-1.5 focus-visible:outline-none mb-4"
    placeholder="Serach here..."
  />

  <Vue3EasyDataTable
    buttons-pagination
    :headers="headers"
    :items="items"
    :search-value="searchValue"
    :hide-rows-per-page="true"
    :rows-per-page="15"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Header, Item, FilterOption } from "vue3-easy-data-table";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

// const searchField = ref("player");
const searchValue = ref("");

const headers: Header[] = [
  { text: "Name", value: "name", sortable: true },
  { text: "Email", value: "email", sortable: true },
  { text: "Phone", value: "phone", sortable: true },
  { text: "Status", value: "status", sortable: true },
];

const items: Item[] = [
  {
    name: "Courtney Morin",
    email: "mi.aliquam@hotmail.ca",
    phone: "(155) 300-8123",
    status: "Close",
  },
  {
    name: "John Sampson",
    email: "elit@google.couk",
    phone: "1-942-451-0660",
    status: "Working",
  },
  {
    name: "Jocelyn Hewitt",
    email: "nullam.nisl@protonmail.com",
    phone: "(571) 522-4199",
    status: "Close",
  },
  {
    name: "Blake Lang",
    email: "urna.ut@hotmail.edu",
    phone: "(957) 403-6615",
    status: "Close",
  },
  {
    name: "Althea Baxter",
    email: "metus@aol.couk",
    phone: "(234) 574-1743",
    status: "Working",
  },
  {
    name: "Ramona Flynn",
    email: "dis.parturient@google.net",
    phone: "1-744-442-8387",
    status: "Working",
  },
  {
    name: "Stone Mcmahon",
    email: "magna@aol.couk",
    phone: "1-681-625-5263",
    status: "Close",
  },
  {
    name: "Sandra Barron",
    email: "in.consectetuer@outlook.net",
    phone: "(986) 646-8519",
    status: "Working",
  },
  {
    name: "Ira Johnston",
    email: "vulputate.ullamcorper@protonmail.org",
    phone: "1-616-364-4311",
    status: "Working",
  },
  {
    name: "Oren Fisher",
    email: "sociis@icloud.com",
    phone: "(344) 206-1313",
    status: "Close",
  },
  {
    name: "Malcolm Castro",
    email: "Workingn.enim@yahoo.edu",
    phone: "1-927-561-8516",
    status: "Working",
  },
  {
    name: "Renee Rollins",
    email: "cras@icloud.edu",
    phone: "(950) 752-5591",
    status: "Working",
  },
  {
    name: "Silas Fox",
    email: "ultrices@hotmail.com",
    phone: "(589) 255-4725",
    status: "Working",
  },
  {
    name: "Erin Hawkins",
    email: "Workingn@hotmail.ca",
    phone: "1-768-553-6536",
    status: "Working",
  },
  {
    name: "Keefe Sanders",
    email: "volutpat.nunc@icloud.ca",
    phone: "(823) 762-1267",
    status: "Close",
  },
  {
    name: "Kessie Spears",
    email: "quis.turpis@yahoo.edu",
    phone: "(328) 562-2755",
    status: "Close",
  },
  {
    name: "Rajah Sargent",
    email: "at@google.net",
    phone: "(857) 851-9894",
    status: "Working",
  },
  {
    name: "Amal Morris",
    email: "ante.maecenas@aol.org",
    phone: "(377) 306-4764",
    status: "Working",
  },
  {
    name: "Patience Swanson",
    email: "velit.dui@hotmail.com",
    phone: "1-385-416-5122",
    status: "Close",
  },
  {
    name: "Basil Daugherty",
    email: "aliquet.proin.velit@aol.org",
    phone: "(702) 505-7546",
    status: "Working",
  },
  {
    name: "Xander Morton",
    email: "et.malesuada@google.edu",
    phone: "(468) 256-7089",
    status: "Working",
  },
  {
    name: "Maxine Armstrong",
    email: "egestas.hendrerit@yahoo.org",
    phone: "(536) 211-8502",
    status: "Working",
  },
  {
    name: "Janna Guerra",
    email: "erat@hotmail.com",
    phone: "(317) 444-0843",
    status: "Working",
  },
  {
    name: "Whoopi Olsen",
    email: "et.libero@yahoo.ca",
    phone: "(965) 713-8067",
    status: "Working",
  },
  {
    name: "Kyle Rose",
    email: "ac.mattis@hotmail.ca",
    phone: "1-568-330-1635",
    status: "Close",
  },
  {
    name: "Yoshi Holmes",
    email: "felis.donec@protonmail.couk",
    phone: "(503) 327-9464",
    status: "Close",
  },
  {
    name: "Marny Peck",
    email: "libero.at.auctor@google.ca",
    phone: "(215) 322-3916",
    status: "Working",
  },
  {
    name: "Kyla Buck",
    email: "mauris.quis@icloud.net",
    phone: "(287) 650-2736",
    status: "Close",
  },
  {
    name: "Jelani Emerson",
    email: "et.ipsum@google.edu",
    phone: "1-813-327-6101",
    status: "Close",
  },
  {
    name: "Emily Solis",
    email: "Workingstra.per.inceptos@yahoo.couk",
    phone: "1-876-442-4176",
    status: "Close",
  },
  {
    name: "Victor Barton",
    email: "vitae.semper@aol.edu",
    phone: "(681) 372-1126",
    status: "Close",
  },
  {
    name: "Ursula Mckay",
    email: "adipiscing@icloud.ca",
    phone: "1-922-950-7969",
    status: "Working",
  },
  {
    name: "Mia Kirkland",
    email: "quis.diam.luctus@protonmail.net",
    phone: "(352) 284-3792",
    status: "Close",
  },
  {
    name: "Hu Vaughan",
    email: "felis@google.couk",
    phone: "(862) 365-5426",
    status: "Working",
  },
  {
    name: "Lana Weeks",
    email: "erat@yahoo.org",
    phone: "(564) 474-5181",
    status: "Working",
  },
  {
    name: "Cade Hopper",
    email: "diam.sed.diam@icloud.org",
    phone: "1-642-471-7538",
    status: "Working",
  },
  {
    name: "Kirk Odom",
    email: "interdum.ligula@icloud.couk",
    phone: "(706) 637-3699",
    status: "Working",
  },
  {
    name: "Preston Sparks",
    email: "morbi.tristique.senectus@aol.com",
    phone: "1-503-646-3210",
    status: "Close",
  },
  {
    name: "Griffin Barker",
    email: "lacinia.at.iaculis@google.org",
    phone: "(720) 276-8746",
    status: "Working",
  },
  {
    name: "Nicole Farley",
    email: "eu.dui@yahoo.ca",
    phone: "(487) 782-7477",
    status: "Close",
  },
  {
    name: "Basil Harper",
    email: "dapibus@aol.couk",
    phone: "1-497-222-9548",
    status: "Working",
  },
  {
    name: "Lester Estes",
    email: "ultrices@icloud.com",
    phone: "1-719-955-3558",
    status: "Close",
  },
  {
    name: "Ainsley Wiley",
    email: "ut@yahoo.ca",
    phone: "1-743-248-5128",
    status: "Working",
  },
  {
    name: "Fletcher Stevenson",
    email: "dis.parturient@yahoo.net",
    phone: "1-573-830-6638",
    status: "Close",
  },
  {
    name: "Camden Mcneil",
    email: "eget.nisi@google.com",
    phone: "1-411-542-4061",
    status: "Working",
  },
  {
    name: "Hakeem Albert",
    email: "nisi.cum.sociis@aol.org",
    phone: "1-848-769-2776",
    status: "Close",
  },
  {
    name: "Summer Blevins",
    email: "magna@yahoo.edu",
    phone: "(721) 735-1852",
    status: "Close",
  },
  {
    name: "Dale Kane",
    email: "amet.lorem@protonmail.edu",
    phone: "(786) 362-5587",
    status: "Working",
  },
  {
    name: "Vivien Hahn",
    email: "libero.lacus@google.edu",
    phone: "1-267-846-7343",
    status: "Close",
  },
  {
    name: "Scarlet Blair",
    email: "commodo.ipsum@icloud.edu",
    phone: "(807) 337-6612",
    status: "Close",
  },
  {
    name: "Oscar Barrett",
    email: "lorem.ipsum@aol.org",
    phone: "(790) 155-8309",
    status: "Close",
  },
  {
    name: "Keiko Coffey",
    email: "elit.fermentum@hotmail.net",
    phone: "(392) 451-3406",
    status: "Close",
  },
  {
    name: "Branden Kirk",
    email: "aliquam.auctor@yahoo.couk",
    phone: "1-804-644-7824",
    status: "Working",
  },
  {
    name: "Slade Nunez",
    email: "nulla@outlook.net",
    phone: "(256) 669-6149",
    status: "Close",
  },
  {
    name: "Uriel Sherman",
    email: "faucibus.ut@yahoo.net",
    phone: "(411) 661-7352",
    status: "Close",
  },
  {
    name: "Emery Ayers",
    email: "mauris.ipsum.porta@protonmail.com",
    phone: "1-814-609-6102",
    status: "Working",
  },
  {
    name: "Hanna Terry",
    email: "mus.proin@icloud.com",
    phone: "1-667-671-9322",
    status: "Close",
  },
  {
    name: "Hoyt Conrad",
    email: "mauris.sit@google.edu",
    phone: "(550) 366-2438",
    status: "Close",
  },
  {
    name: "Jordan Howe",
    email: "ac.mattis@yahoo.com",
    phone: "1-742-859-7356",
    status: "Close",
  },
  {
    name: "Aspen Vang",
    email: "Workingn.justo.proin@protonmail.org",
    phone: "(326) 228-1892",
    status: "Close",
  },
  {
    name: "Wayne Sykes",
    email: "volutpat@hotmail.couk",
    phone: "(421) 501-1486",
    status: "Working",
  },
  {
    name: "Zeph Dawson",
    email: "lorem@yahoo.com",
    phone: "(525) 728-1413",
    status: "Working",
  },
  {
    name: "Karen Christensen",
    email: "turpis.nulla@google.net",
    phone: "1-337-885-7431",
    status: "Working",
  },
  {
    name: "Lila Wells",
    email: "sed.nec@icloud.net",
    phone: "(487) 450-1928",
    status: "Working",
  },
  {
    name: "Hop Butler",
    email: "fringilla.mi.lacinia@hotmail.ca",
    phone: "1-428-450-8127",
    status: "Close",
  },
  {
    name: "Gil Bradshaw",
    email: "vel.mauris@hotmail.com",
    phone: "(444) 516-1225",
    status: "Close",
  },
  {
    name: "ShanWorkingn Fischer",
    email: "tincidunt@protonmail.couk",
    phone: "(957) 346-9487",
    status: "Working",
  },
  {
    name: "Lyle Vang",
    email: "ut.quam@hotmail.ca",
    phone: "1-263-579-8623",
    status: "Working",
  },
  {
    name: "Quinlan Owens",
    email: "gravida.molestie.arcu@aol.org",
    phone: "(846) 265-9721",
    status: "Close",
  },
  {
    name: "Tashya Riddle",
    email: "nulla.tincidunt@aol.org",
    phone: "1-731-757-1755",
    status: "Working",
  },
  {
    name: "Iliana Hunt",
    email: "et.commodo@hotmail.couk",
    phone: "1-337-435-3435",
    status: "Working",
  },
  {
    name: "Keiko Carrillo",
    email: "etiam.gravida.molestie@hotmail.edu",
    phone: "(943) 626-5074",
    status: "Close",
  },
  {
    name: "Cade Forbes",
    email: "dui.nec@yahoo.org",
    phone: "(649) 837-1996",
    status: "Close",
  },
  {
    name: "Madeson Bishop",
    email: "gravida.sit@google.couk",
    phone: "(666) 785-5748",
    status: "Close",
  },
  {
    name: "Garth Hale",
    email: "nec@aol.com",
    phone: "1-532-198-6782",
    status: "Working",
  },
  {
    name: "Petra Smith",
    email: "sodales.at.velit@icloud.ca",
    phone: "1-304-581-8588",
    status: "Working",
  },
  {
    name: "Craig Flores",
    email: "mattis@protonmail.com",
    phone: "1-779-946-8976",
    status: "Close",
  },
  {
    name: "Berk Jackson",
    email: "vivamus@aol.net",
    phone: "(285) 390-5186",
    status: "Close",
  },
  {
    name: "Thane Gibson",
    email: "at.arcu@aol.com",
    phone: "(661) 610-0396",
    status: "Working",
  },
  {
    name: "Griffin Bryan",
    email: "a.malesuada@protonmail.edu",
    phone: "1-437-761-2514",
    status: "Close",
  },
  {
    name: "Jolene Ross",
    email: "euismod.mauris@google.com",
    phone: "1-743-678-2222",
    status: "Working",
  },
  {
    name: "Colby Dominguez",
    email: "in.faucibus@yahoo.org",
    phone: "1-738-315-5425",
    status: "Working",
  },
  {
    name: "Daquan Barnett",
    email: "sed.nunc.est@protonmail.org",
    phone: "(867) 784-5823",
    status: "Close",
  },
  {
    name: "Richard Mcknight",
    email: "scelerisque.mollis.phasellus@google.com",
    phone: "(290) 981-1422",
    status: "Working",
  },
  {
    name: "Maryam Ingram",
    email: "scelerisque@aol.edu",
    phone: "(843) 587-3786",
    status: "Working",
  },
  {
    name: "Akeem Elliott",
    email: "dictum.proin@hotmail.edu",
    phone: "(755) 467-6446",
    status: "Close",
  },
  {
    name: "Kirsten Alvarado",
    email: "cras@google.net",
    phone: "(214) 198-5117",
    status: "Close",
  },
  {
    name: "Deborah Mcmahon",
    email: "risus.duis@google.net",
    phone: "(888) 972-9191",
    status: "Close",
  },
  {
    name: "Derek Hughes",
    email: "aliquet@yahoo.couk",
    phone: "(973) 851-8119",
    status: "Close",
  },
  {
    name: "Dennis George",
    email: "amet.ornare.lectus@yahoo.com",
    phone: "1-148-575-1441",
    status: "Working",
  },
  {
    name: "Avram Cote",
    email: "dictum.phasellus.in@protonmail.com",
    phone: "(325) 413-4252",
    status: "Working",
  },
  {
    name: "Lucian Levine",
    email: "semper.erat@aol.com",
    phone: "(517) 877-3019",
    status: "Working",
  },
  {
    name: "Burton Herring",
    email: "proin@icloud.net",
    phone: "(433) 549-1671",
    status: "Working",
  },
  {
    name: "Adrian Hooper",
    email: "nulla.semper@icloud.net",
    phone: "1-458-462-7164",
    status: "Working",
  },
  {
    name: "Jada Reese",
    email: "dolor.dolor@hotmail.couk",
    phone: "(895) 471-5898",
    status: "Close",
  },
  {
    name: "Porter Perez",
    email: "vel@icloud.edu",
    phone: "1-275-764-4522",
    status: "Working",
  },
  {
    name: "Hilel Andrews",
    email: "et.nunc.quisque@aol.com",
    phone: "(463) 810-1870",
    status: "Working",
  },
  {
    name: "Zorita Daugherty",
    email: "convallis@aol.ca",
    phone: "1-945-843-8145",
    status: "Close",
  },
  {
    name: "ConWorkingr SerraWorking",
    email: "odio.auctor@icloud.org",
    phone: "(582) 418-4591",
    status: "Working",
  },
  {
    name: "Mufutau CanWorkingn",
    email: "consequat.nec.mollis@aol.org",
    phone: "1-360-823-9161",
    status: "Working",
  },
];
</script>
