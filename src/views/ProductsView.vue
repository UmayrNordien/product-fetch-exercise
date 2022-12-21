<template>
    <div class="container">
        <div class="row">
            <div class="display-2">Products</div>
        </div>
    </div>
    <ProductsComponent/>
</template>


<script>
import ProductsComponent from '@/components/ProductsVue.vue';

export default {
    components: { 
        ProductsComponent,
    }
}
</script>


<style scope>
    
</style>