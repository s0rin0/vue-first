<template>
  <div id="app">
    <P-Card>
      <template #content>
        <P-TabMenu :model="items" />
        <router-view />
      </template>
    </P-Card>
  </div>
</template>

<script src="./App.js"></script>

<style >
</style>
