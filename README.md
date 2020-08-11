# Half Helix Technical Challenge

### Notes

My lazy loader will take all images and preload them as triggered by the `IntersectionObserver`.

**Problem**

For any given image block, there are two images that need to be lazy loaded (front and back), both `<img>` need to be loaded onto the DOM for the lazy loader to work. The `v-if` and `v-else` directives only allow a single element to be loaded at a time. This messes with the lazy loader as preloading is only triggered through the intersection observer.

**Solution 1**

Using `v-show` instead, and having both images lazy load with the secondary image underbeath the main image (CSS) will allow preloading of both assets through the `IntersectionObserver`

But another problem occurs - `v-show` toggles the css class display to `display: none` and because the secondary image is loaded underneath the main image (`position: absolute & z-index: -1`), the product information will end up displaying on top of the secondary image. I would need to code a custom directive called `v-visible` to toggle the opacity rather than the display property for this to work

**Solution 2**

In my final solution, I decided to opt for a class toggle in order to toggle the opacity property instead of the display property. One caveat is that the vue transitions won’t work because it is only triggered through conditional rendering (v-if) or conditional display (v-show)
