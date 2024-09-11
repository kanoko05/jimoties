new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
      return {
        headers: [
          { text: '商品画像', value: 'img' },
          { text: '商品名', value: 'calories' },
          { text: '自治体名', value: 'fat' },
          { text: '金額', value: 'carbs' },
          { text: '操作', value: 'actions', sortable: false },  // 操作列を追加
        ],
        desserts: [
          {
            img: 'https://i.gyazo.com/fbe77ce74a654dafbf1bbc1fd005d181.jpg',
            calories: 'ブドウ',
            fat: '栃木',
            carbs: 10000,
          },
          {
            img: 'https://i.gyazo.com/fbe77ce74a654dafbf1bbc1fd005d181.jpg',
            calories: 'ブドウ',
            fat: '栃木',
            carbs: 10000,
          },
        ],
      }
    },
    methods: {
      removeFromFavorites(item) {
        // お気に入りから外す処理
        console.log('お気に入りから外す:', item);
      },
      addToCart(item) {
        // カートに入れる処理
        console.log('カートに入れる:', item);
      },

      navigateToSign() {
        // ログイン画面に戻る処理
        window.location.href = 'EmployeeLogin.html';
        //window.location.href = 'https://codepen.io/minakichi552/pen/XWLZGrJ?editors=1010'; // ログイン画面のURLに変更
      }
    }

  });