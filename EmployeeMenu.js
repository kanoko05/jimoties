new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  methods: {
    stockCheck() {
      
      window.location.href = 'EmployeeStock.html';
      //window.location.href = 'https://codepen.io/minakichi552/pen/XWLZGrJ?editors=1010'; // ログイン画面のURLに変更
    },

    itemRegister() {
      
      window.location.href = 'EmployeeRegister.html';
      //window.location.href = 'https://codepen.io/minakichi552/pen/XWLZGrJ?editors=1010'; // ログイン画面のURLに変更
    },

    orderCheck() {
      
      window.location.href = 'EmployeeOrder.html';
      //window.location.href = 'https://codepen.io/minakichi552/pen/XWLZGrJ?editors=1010'; // ログイン画面のURLに変更
    }
  }
});