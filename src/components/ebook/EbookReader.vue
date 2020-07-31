<template>
  <div id="ebook-reader">
      <!-- {{$route.params.fileName}} -->
      <div id="read"></div>
  </div>
</template>
<script>
import { mapGetters} from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub
export default {
    computed:{
        ...mapGetters([
            'fileName',
            'menuVisible'])
    },
    methods:{
        prevPage(){
            if(this.rendition){
                this.rendition.prev()
                this.hideTitleAndMenu()
            }
        },
        nextPage(){
            if(this.rendition){
                this.rendition.next()
                this.hideTitleAndMenu()
            }
        },
        toggleTitleAndMenu(){
           this.$store.dispatch('setMenuVisible',!this.menuVisible)
        },
        hideTitleAndMenu(){
            this.$store.dispatch('setMenuVisible',false)
        },
        initEpub(fileName){
            const url = 'http://192.168.182.1:8081/epub/'+ this.fileName
            console.log(url)
            this.book = new Epub(url)
            this.rendition = this.book.renderTo('read',{
                width: innerWidth,
                height: innerHeight,
                // method: 'default'
            })
            this.rendition.display()
           console.log(this.book)
            this.rendition.on('touchstart',event=>{
                // console.log(event)
                this.touchStartX = event.changedTouches[0].clientX
                this.touchStartTime = event.timeStamp 
            })
            this.rendition.on('touchend',event=>{
                // console.log(event)
                const offsetX = event.changedTouches[0].clientX - this.touchStartX
                const time = event.timeStamp - this.touchStartTime
                // console.log(offsetX,time)
                if(time < 500 && offsetX > 40){
                    this.prevPage()
                }else if(time < 500 && offsetX < -40){
                    this.nextPage()
                }else{
                    this.toggleTitleAndMenu()
                }
                // event.preventDefault()用它报错查询后换下一条
                 { passive: false }
                event.stopPropagation()
            })
        }
    },
    mounted(){
        const fileName = this.$route.params.fileName.split('|').join('/')
        // const fileName = "123"
        // console.log(fileName)
        this.$store.dispatch('setFileName',fileName).then(()=>{
            this.initEpub()
        })

    }
}

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global.scss";
</style>