<template>
  <div class="text-center font-body2 px-4">
    <h1 class="font-normal font-display text-3xl max-w-md mx-auto mb-4">{{ $siteConfig.page.title }}</h1>
    <p class="px-4 max-w-xs font-body1 text-lg max-w-2xl mx-auto">{{ $siteConfig.page.description }}</p>
    <h6
      class="font-body1 text-sm mt-6 mb-12 md:mb-16"
    >{{ $siteConfig.page.products.length }} products</h6>
    <div>
      <div class="flex flex-wrap md:-mx-4">
        <product-card
          v-for="(product, i) in $siteConfig.page.products"
          :key="i"
          :product="product"
          class="md:w-1/4 md:px-4 pb-12"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '#components/product-card'

export const data = {
  layout: 'index'
}

export default {
  name: 'index',
  props: ['content'],
  components: {
    ProductCard
  }
}
</script>
