<template>
  <form>
    <label for="new-todo-input"> What needs to be done? </label>
    <P-InputText
      type="text"
      v-model.lazy.trim="label"
    />
    <P-Button label="Submit" @click="onSubmit"/>
  </form>
</template>
<script src="./ToDoForm.js"></script>
