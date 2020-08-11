<template>
  <div
    class="flex flex-row review-stars"
    :style="{ width: `60px`, height: `9px`, marginBottom: '2px' }"
  >
    <icon type="starFull" v-for="n in stars" :key="`Full${n}`" />
    <icon type="starEmpty" v-for="n in numEmptyStars" :key="`Empty${n}`" />
  </div>
</template>

<script>
import Icon from '#components/icon'

const maxStarRating = 5

export default {
  name: 'review-stars',
  props: ['stars'],
  components: {
    Icon
  },
  computed: {
    numEmptyStars: function() {
      return maxStarRating - this.stars
    }
  }
}
</script>
