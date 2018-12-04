<template>
  <div class="card" :style="cardWidth">
    <div class="avatar">
      <div :style="imgStyle"></div>
    </div>
    <div class="title">
      <div>
        {{id}}号:
        <span class="name">{{name}}</span>
      </div>
      <div class="academy">
        {{academy}}
      </div>
      <div class="academy">
        ({{position}})
      </div>
    </div>
    <div class="info">
      {{introduce.slice(0,40)}}
      <span v-if="introduce.length > 40">...</span>
      <span 
        @click="toDetail(id)" 
        class="more"
      >[详细]</span>
    </div>
    <div class="vote-num">
      <div class="vote-num-profress">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="votePercentage"></el-progress>
      </div>
      <div>
        {{TotalVotes}}票
      </div>
    </div>
    <div class="choose-bt">
      <el-checkbox :label="id" border>选择</el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'voteCard',
  props: {
    isMb: {
      type: Boolean,
      default() {
        return false
      }
    },
    id: {
      type: Number,
      default() {
        return 1
      }
    },
    image: {
      type: String,
      default() {
        return 'https://ws1.sinaimg.cn/large/006GC8NZgy1fxulr8ycbsj306w09cjrj.jpg'
      }
    },
    name: {
      type: String,
      default() {
        return ''
      }
    },
    position: {
      type: String,
      default() {
        return ''
      }
    },
    academy: {
      type: String,
      default() {
        return ''
      }
    },
    introduce: {
      type: String,
      default() {
        return ''
      }
    },
    TotalVotes: {
      type: Number,
      default() {
        return 0
      }
    },
    AllVotes: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      imgStyle: {
        width: "100%",
        height: "100%",
        background: `url(${this.image}) no-repeat center / contain`
      },
      cardWidth: {
        width: this.isMb ? "300px" : "200px"
      },
      votePercentage: Math.floor(this.TotalVotes * 100 / this.AllVotes) * 8
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: `/tutor/${id}` })
    }
  },
  created() {
    // this.votePercentage = Math.floor(this.TotalVotes * 100 / this.AllVotes)
    // console.log(this.votePercentage)
  }
}
</script>

<style lang="stylus" scoped>
.card
  width: 200px
  min-height: 320px
  padding: 10px
  background: rgba(255,255,255,.4)
  border-radius: 4px
  display: flex
  display: -webkit-flex
  flex-direction: column
  justify-content: center
  box-shadow: 0 2px 22px 0 rgba(0,0,0,.1)
  box-sizing: border-box
  margin-bottom: 10px
  .title
    margin: 0 auto
    font-family: 'PingFang SC'
    font-size: 16px
  .title > div
    text-align: center
    .academy
      font-size: 14px
    .name
      font-weight: bold
      color: #004466
  .avatar
    margin-top: 10px
    width: 100%
    height: 194px
  .info
    margin-top: 10px
    height: 100px
    word-wrap: break-word
    color: rgb(102, 102, 102)
    .more
      color: #990000;
  .vote-num
    display: flex
    displau: -webkit-flex
    display-direction: row
    justify-content: space-around
    align-items: center
    .vote-num-profress
      width: 80%
  .choose-bt
    margin-top: 10px
    display: flex
    display: -webkit-flex
    justify-content: center
</style>

