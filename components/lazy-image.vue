<template>
  <transition name="fade" mode="out-in">
    <img src="../static/placeholder.jpg" :data-src="src" alt="product image" />
  </transition>
</template>

<script>
export default {
  name: 'lazy-image',
  props: ['src']
}
</script>
