<template>
  <div id="app">
    <span class="test">ABCD</span>
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['test'])
  },
  mounted(){
    this.$store.dispatch('setTest',9).then(()=>{
      console.log(this.test)
    })
  }
}
//字体最大保持50px
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})

</script>
<style>
/* .test{
  font-family: 'Days One';
} */
</style>
