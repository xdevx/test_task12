<template>
  <div class="row">
    <div v-for="item in products" class="col-12 col-sm-4 col-xl-3 pb-4">
      <product v-bind:data="item"/>
    </div>
  </div>


</template>

<script>

import Product from '@/components/product.vue'
export default {
  name: 'Products',
  data() {
    return {
      products:[]
    };
  },
  async beforeMount() {

    await this.$http.get('/api/currencies')
    .then( r=> {
      if(!r.data.status || r.data.status == 'error') {
        alert('Произошла ошибка при получении данных от валютах.');
      } else {
        this.$store.commit('setCurrencyList', r.data.currencies);
      }
    }).catch(err => {
      alert("Ошибка соединения с сервером: " + String(err));
    });


    await this.$http.get('/api/products')
    .then(r => {
      this.products = r.data;
    }).catch( err => {
      alert("Ошибка соединения с сервером: " + String(err));
    });
  },
  components:{
    Product
  }
}
</script>
