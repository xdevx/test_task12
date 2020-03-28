<template>
  <div class="card">
    <div class="card-body">
      <div class="product-name font-weight-bold pt-2 pb-2">{{data.name}}</div>
      <div class="product-price pt-2 pb-2">Цена: {{data.price}}</div>
      <input type="number" class="form-control" v-model="value">
      <div class="pt-2">
        <button class="btn btn-primary pt-2 pb-2" @click="addToCart(data.id)">В корзину</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      name:'Product',
      props:['data'],
      data() {
          return {
            value:1
          };
      },
      beforeMount() {

      },
      methods:{
        addToCart(id) {
          if(this.value <= 0) {
            alert("Количество товара не может быть меньше 1");
            return false;
          }
          this.$http.post('/api/cart/add',{
            id:id,
            qty:this.value
          })
          .then(r => {
            if(!r.data.status || r.data.status == 'error') {
              alert('При добавлении товара произошла ошибка.');
            } else {
              this.value = 1;
              alert('Продукт добавлен в корзину');
              this.$store.commit('setTotalQty',r.data.total_qty);

            }
          }).catch( err => {
            alert("Ошибка соединения с сервером: " + String(err));
          });
        }
      }
    }
</script>
