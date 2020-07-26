<template>
  <div class="home">
   <!-- <div id="read"></div> -->
   <span class="icon-bookmark "></span>
  </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub
export default {
  name: 'Home'
  // mounted () {
  //   this.book = new Epub('/2016_Book_TheChallengeOfChance/')
  //   console.log(this.book)
  //   this.book.renderTo('read', {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   }).display()
  // }
}
</script>
