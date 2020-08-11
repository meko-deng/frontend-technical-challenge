<template>
  <div>
    <div class="text-left" @mouseover="isHovering=true" @mouseleave="isHovering=false">
      <transition name="fade" mode="out-in">
        <lazy-image key=1 :src="product.images.secondary" v-if="isHovering" />
        <lazy-image key=2 :src="product.images.main" v-else />
      </transition>
      <div class="flex flex-row justify-between items-end pt-1">
        <div class="flex-1">
          <p class="font-display text-lg leading-xl">{{product.title}}</p>
          <p class="font-body1 text-xs leading-base">{{product.byline}}</p>
        </div>
        <div class="flex flex-1 flex-col items-end justify-center">
          <p class="font-body1 text-sm leading-lg ">{{product.price}}</p>
          <ReviewStars :stars="product.reviews.average"/>
          <p class="font-body1 text-xs leading-base">{{`(${product.reviews.count} Reviews)`}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import LazyImage from '#components/lazy-image'
import ReviewStars from '#components/review-stars'

export default {
  name: 'product-card',
  props: ['product'],
  components: {
    LazyImage,
    ReviewStars
  },
  data() {
    return {
      isHovering: false,
    }
  }
}
</script>