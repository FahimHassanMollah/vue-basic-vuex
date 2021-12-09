import axios from 'axios'
const state ={
    products:[]
};
const getters ={
    allProducts(state){
      return state.products;
    }
    
};
const actions ={
   async getProducts({commit}){
        const response = await axios.get('http://localhost:3000/products')
        commit("GET_PRODUCTS",response.data);
    },
   async addProduct({commit},data){
       console.log(data);
        const res = await axios.post('http://localhost:3000/products',data)
        console.log(res);
        commit("ADD_PRODUCT",res.data);
    }

};
const mutations ={
    GET_PRODUCTS(state,data){
        state.products = data;
    },
    ADD_PRODUCT(sate,data){
        state.products.unshift(data)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}