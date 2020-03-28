<template>

  <section>
    <div class="container pt-5 pb-5">
      <mini-cart/>
    </div>

    <div class="container">
      <h2>Товары</h2>
      <products/>
    </div>
  </section>
</template>

<script>
import Products from '@/components/products.vue'
import MiniCart from '@/components/cart/mini.vue'
//import Axios from 'axios'
export default {
  name: 'Catalog',
  components: {
    Products, MiniCart
  }
}
</script>
