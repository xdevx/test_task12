<template>
 <div class="float-right">
  <div class="cart-wrapper">
      <router-link to="/cart" class="btn btn-danger pr-2 pl-2">Корзина (<span v-text="this.$store.state.total_qty"></span>)</router-link>
  </div>
</div>
</template>
<script>
export default {
  name:'MiniCart',
  data(){
    return {
    };
  },
  beforeMount() {
    this.$http.get(
      '/api/cart/mini'
    ).then( r => {
      if(r.data.status && r.data.status == "error") {
        alert("Ошибка при получении сведений о корзине.");
        return false;
      }

      if(r.data.total_qty !== null) {

        this.$store.commit('setTotalQty',r.data.total_qty);
      }
    }).catch( err => {
      alert("Ошибка соединения с сервером: " + String(err));
    });
  }
}
</script>
