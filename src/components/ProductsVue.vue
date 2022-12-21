<template>
    <table class="table table- table-darker table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Make</th>
          <th scope="col">Spec</th>
          <th scope="col">Price ZAR</th>
          <th scope="col">Purchase</th>
          <!-- <th scope="col">Preview</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product) in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.make }}</td>
          <td>{{ product.spec }}</td>
          <td>{{ product.amount }}</td>
          <td><button class="btn btn-outline-success me-5" type="button">🛒</button></td>
          <!-- <td><img :src="product.image" class="image-fluid"></td> -->
        </tr>
      </tbody>
    </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["fetchAllProducts"]),
  },
  created() {
    this.fetchAllProducts();
  }
}
</script>
<style>

</style>