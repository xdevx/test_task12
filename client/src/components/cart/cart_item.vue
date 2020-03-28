<template>
  <div class="cart-item-inner row">
    <div class="col-3 text-left" v-text="item.name"></div>
    <div class="col-2" v-text="item.price"></div>
    <div class="col-2">
      <select class="form-control" @change="convertPrice()" v-model="seletcted_currency">
        <option v-for="currency in this.$store.state.currencies" @selected="convertPrice(currency.price)"  :value="currency.price">{{currency.name}}</option>
      </select>
    </div>
    <div class="col-2">{{data.qty}}</div>
    <div class="col-2" v-text="itemSum()"></div>

  </div>
</template>
<script>
  export default {
      name:'CartItem',
      props:['data'],
      data() {
        return {
          item:null,
          seletcted_currency:1
        };
      },
      beforeMount() {
        this.item = this.data;
      },
      methods:{
        itemSum() {
          return Number(this.item.qty * this.item.price).toFixed(2);
        },
        convertPrice() {
           this.item.price = Number(this.data.price * this.seletcted_currency).toFixed(2);
           this.itemSum();
        }
      }
    }
</script>
<style>
.cart-item-inner {
 padding:10px;
 border:1px solid #ccc;
}
</style>
