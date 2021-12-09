<template>
  <div class="home">
    <p>add product</p>
    <input v-bind="productName" placeholder="product name" type="text">
    <input v-bind="productPrice" placeholder="product price" type="text">
    <br>
    <button @click="addProducts()">add product</button>
    <hr>
  {{allProducts}}
  <hr>
  <ul>
    <li v-for="(product,index) in allProducts" :key="index">{{ product.title }}</li>
  </ul>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex"

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return {
      productName:'',
      productPrice:''
    }
  },
  computed:{
    ...mapGetters([
      'allProducts'
    ])
  },
  methods: {
    ...mapActions([
      'getProducts','addProduct'
    ]),
    addProducts(){
        this.addProduct({
          title:this.productName,
          price:this.productPrice
        })
    }
  },
  mounted() {
    this.getProducts()
  },
}
</script>
