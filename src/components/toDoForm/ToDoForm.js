export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }

      console.log('Label value: ', this.label);
      this.$emit("todo-added", this.label);
    }
  },
  data() {
    return {
      label: ""
    };
  }
}
