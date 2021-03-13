<template>
  <P-Card style="width: 25rem; margin-bottom: 2em">
    <template #title> To-Do List </template>
    <template #content>
      <to-do-form @todo-added="addToDo"></to-do-form>
      <div v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
        ></to-do-item>
      </div>
    </template>
  </P-Card>
</template>

<script src="./Todo.js"></script>

<style >
</style>
