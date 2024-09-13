new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      userID: sessionStorage.getItem('user_ID'), // 表示したいUser_ID
      datalist: [],
      datalist2: [],
      datalist3: [],
      userInfo: [], // ユーザー情報
      totalAmount: 0 // 合計金額を保持する変数
    };
  },
  mounted() {
    this.fetchuserlist();
    this.fetchshoplist();  // 呼び出し
    this.fetchuserInfo();
  },
  methods: {
    async fetchuserlist() {
      const param3 = { User_ID: this.userID };

      try {
        const response = await axios.post('https://m3h-minaki-jimoties.azurewebsites.net/api/ListShoplist', param3);
        this.datalist3 = response.data.ShoplistList;
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    },

    async fetchshoplist() {
      const param = { User_ID: this.userID };

      try {
        const response = await axios.post('https://m3h-minaki-jimoties.azurewebsites.net/api/ListShoplist', param);
        this.datalist = response.data.ShoplistList;

        const itemIDs = this.datalist.map(item => item.Item_ID);

        this.datalist2 = [];

        for (let i = 0; i < itemIDs.length; i++) {
          const param2 = { Item_ID: itemIDs[i] };

          const itemResponse = await axios.post('https://m3h-minaki-jimoties.azurewebsites.net/api/SearchItemId', param2);

     console.log(itemResponse.data.ItemTableList[0]);
     this.datalist2.push(itemResponse.data.ItemTableList[0]);
 
        }

        // 合計金額の計算
        this.calculateTotalAmount();
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
      }
    },

    async fetchuserInfo() {
      const param4 = { User_ID: this.userID };

      try {
        const response = await axios.post(`https://m3h-minaki-jimoties.azurewebsites.net/api/ListUser`, param4);
        this.userInfo = response.data.List;
      } catch (error) {
        console.error('ユーザー情報の取得に失敗しました:', error);
      }
    },

    // 合計金額を計算するメソッド
    calculateTotalAmount() {
      let total = 0;
      for (let i = 0; i < this.datalist.length; i++) {
        const itemPrice = this.datalist2[i]?.Item_price || 0; // 価格がない場合は0
        const itemNum = this.datalist[i]?.Item_num || 0; // 個数がない場合は0
        total += itemPrice * itemNum;
      }
      this.totalAmount = total;
    },
    
   // ShoplistTableからアイテムを削除するメソッド
  
    async deleteItemFromShoplist() {
  console.log("配列の確認:", this.datalist2);
  
  for (const item of this.datalist2) {
    const params = {
      user_ID: this.userID,
      item_ID: item.Item_ID
    };
    console.log("削除用データの確認：", params);
    
    try {
      // アイテムをShoplistから削除
      const deleteResponse = await axios.post('https://m3h-nishizawa-jimotiesapi.azurewebsites.net/api/DeleteItemShopList', params);
      console.log("カート削除返答", deleteResponse);
      
      // アイテムを購入リストに追加
      const addResponse = await axios.post('https://m3h-nishizawa-jimotiesapi.azurewebsites.net/api/AddItemBuy', params);
      console.log("購入追加返答", addResponse);
      
      window.location.href = `BuyTankyou.html`;
      
    } catch (error) {
      console.error('削除または追加に失敗しました:', error);
    }
  }
    },

    
    
    goHome(){
      window.location.href = `index.html`
    },
    
    back(){
      window.location.href = `Shoplist..html`
    },
    
    adminLogin() {
          // 管理者ログインのロジックをここに追加
          window.location.href = `EmployeeLogin.html`
        },
  }
  });