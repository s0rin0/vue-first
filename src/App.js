
import ToDoItem from './components/toDoItem/ToDoItem.vue';
import ToDoForm from './components/toDoForm/ToDoForm.vue';
import PrimePage1 from './components/prime-page-1/PrimePage1.vue';

export default {
  name: 'app',
  components: {
    ToDoItem,
    ToDoForm,
    PrimePage1
  },
  data() {
    return {
      ToDoItems: [
        { id: makeid(5), label: 'Learn Vue', done: false },
        { id: makeid(5), label: 'Create a Vue project with the CLI', done: true },
        { id: makeid(5), label: 'Have fun', done: true },
        { id: makeid(5), label: 'Create a to-do list', done: false }
      ]
    };
  },
  methods: {
    addToDo(toDoLabel) {
      console.log('To-do added: ' + toDoLabel);
      this.ToDoItems.push({ id: makeid(5), label: toDoLabel, done: false });
    }
  }
}

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}