<template>

  <div class="container">
    <h2>Корзина</h2>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3 text-left">Товар</div>
          <div class="col-2">Цена</div>
          <div class="col-2">Валюта</div>
          <div class="col-2">Кол-во</div>
          <div class="col-2">Сумма</div>
        </div>
      </div>
      <div v-for="item in this.$store.state.cart_items" class="col-12">
        <cart-item v-bind:data="item" />
      </div>
      <div class="pt-2 pb-2">
        <button class="btn btn-success" @click="summarizeOrder()">Посчитать</button>
      </div>

    </div>
    <div class="row">

      <div v-for="item in summarize_data" class="col-4">
        <div class="card">
          <div class="" v-text="item.name"></div>
          <div class="" v-text="item.total"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import CartItem from '@/components/cart/cart_item.vue'

export default {
  name:'FullCart',
  data(){
    return {
      summarize_data:null
    }
  },
  async beforeMount() {
    await this.$http.get('/api/cart/full')
    .then( r => {
      if(!r.data.status || r.data.status == 'error') {
        alert('Произошла ошибка при получении данных о корзине.');
      } else {
        this.$store.commit('setFullCart', r.data.items);
      }
    }).catch( err => {
      alert("Ошибка соединения с сервером: " + String(err));
    });
  },
  methods:{
    summarizeOrder() {
      this.$http
      .get('/api/cart/summarize')
      .then(r => {
        if(!r.data.status || r.data.status == 'error') {
            alert('Произошла ошибка при суммировании результата.');
        } else {
            this.summarize_data = r.data.data;
        }
      }).catch( err => {
        alert("Ошибка соединения с сервером: " + String(err));
      });
    }
  },
  components:{
    CartItem
  }
}
</script>
