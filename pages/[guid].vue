<template>
  <navbar />
  <tabs-details />
</template>

<script>
const route = useRoute();
const mountain = route.params;
console.log(mountain);
</script>
