
export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
        id: { required: true, type: String }
    },
    data() {
        return {
            isDone: this.done,
        }
    },
    methods: {
        onChange(value) {
            console.log("Changed id " + this.label + " to " + this.isDone);
        }
    }
}
