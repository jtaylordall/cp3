var app = new Vue({
  el: '#app',

  data: {
    todos: [],
    addedName: '',
    addedPhone: '',
    addedEmail: '',
    addedAddress: '',
    show: 'all',
    drag: {},
  },

  computed: {
    activeTodos() {
      return this.todos.filter(item => {
        return !item.completed;
      });
    },
    filteredTodos() {
      if (this.show === 'active')
      return this.todos.filter(item => {
        return !item.completed;
      });
      if (this.show === 'completed')
      return this.todos.filter(item => {
        return item.completed;
      });
      return this.todos;
    },
  },

  methods: {
    addItem() {
      this.todos.push({
        name: this.addedName,
        phone: this.addedPhone,
        email: this.addedEmail,
        address: this.addedAddress,
        completed:false
      });
      this.addedName = '';
      this.addedPhone = '';
      this.addedEmail = '';
      this.addedAddress = '';
    },

    sortContacts() {
      function compare(a,b) {
        if (a.name < b.name)
        return -1;
        if (a.name > b.name)
        return 1;
        return 0;
      }
      this.todos.sort(compare);
    },

    deleteItem(item) {
      var index = this.todos.indexOf(item);
      if (index > -1)
      this.todos.splice(index,1);
    },
    showAll() {
      this.show = 'all';
    },
    showActive() {
      this.show = 'active';
    },
    showCompleted() {
      this.show = 'completed';
    },
    deleteCompleted() {
      this.todos = this.todos.filter(item => {
        return !item.completed;
      });
    },
    dragItem(item) {
      this.drag = item;
    },
    dropItem(item) {
      const indexItem = this.todos.indexOf(this.drag);
      const indexTarget = this.todos.indexOf(item);
      this.todos.splice(indexItem,1);
      this.todos.splice(indexTarget,0,this.drag);
    },
  }

});
