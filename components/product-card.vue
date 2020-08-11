
<style scoped>
  .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s
  }

  .fade-enter, .fade-leave-to {
      opacity: 0
  }

  .text-left {
    position: relative;
  }

  .img-container {
    position: relative;
  }

  .img-underlay {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .disapear {
    opacity:0; 
  }
</style>

<template>
  <div>
    <div class="text-left">
      <!-- explanation in email -->
    <div class="img-container " @mouseover="isHovering=true" @mouseleave="isHovering=false">
      <transition name="fade">
        <!-- <lazy-image :src="product.images.main" v-show="!isHovering"/>  -->
        <lazy-image :src="product.images.main" v-bind:class="{disapear: isHovering}"/> 
      </transition>
      <div class="img-underlay">
        <lazy-image :src="product.images.secondary" />
      </div>      
    </div>
      <div class="flex flex-row justify-between items-end pt-1">
        <div class="flex-1">
          <p class="font-display text-lg xl:leading-xl md:leading-base md:pb-2">{{product.title}}</p>
          <p class="font-body1 text-xs xl:leading-base md:leading-sm">{{product.byline}}</p>
        </div>
        <div class="flex flex-1 flex-col items-end justify-center">
          <p class="font-body1 text-sm leading-lg text-right" v-if="product.isSale">{{product.salePrice + ' '}}<span class="line-through text-gray-400"> {{ product.price }} </span></p>
          <p class="font-body1 text-sm leading-lg" v-else>{{product.price}}</p>
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
  mounted() {
console.log(this.product.isSale, this.product.salePrice)
  },
  data() {
    return {
      isHovering: false,
    }
  }
}
</script>