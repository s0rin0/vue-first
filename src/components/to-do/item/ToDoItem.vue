<template>
  <div>
    <P-Checkbox :id="id" v-model="isDone" :binary="true" @change="onChange" />
    <!-- <input type="checkbox" :id="id" :checked="isDone" /> -->
    <label :for="id">{{ label }}</label>
  </div>
</template>
<script src="./ToDoItem.js"></script>
