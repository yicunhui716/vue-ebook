<template>
  <div id="ebook">
    <EbookReader></EbookReader>
    <ebook-title></ebook-title>
    <ebook-menu></ebook-menu>
  </div>
</template>
<script>
import EbookReader from '../../components/ebook/EbookReader.vue'
import EbookTitle from '../../components/ebook/EbookTitle'
import EbookMenu from '../../components/ebook/EbookMenu'
export default {
  components:{
    EbookReader,
    EbookTitle,
    EbookMenu
  }
}

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global.scss";
</style>