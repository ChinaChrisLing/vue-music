<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song, index)" class="item" v-for="(song, index) in songs">
        <div class="rank" v-show="rank">
          <span :class="getRankCls(index)" v-text="getRankText(index)"></span>
        </div>
        <div class="content">
          <h2 :class="h2class" @mouseover="enter" @mouseout="leave">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      },
      rank: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        h2class: 'name'
      }
    },
    methods: {
      selectItem(item, index) {
        this.$emit('select', item, index)
      },
      getDesc(song) {
        return `${song.singer}.${song.album}`
      },
      getRankCls(index) {
        if (index <= 2) {
          return 'ran'
        } else {
          return 'text'
        }
      },
      getRankText(index) {
//        if (index > 2) {
        return index + 1
//        }
      },
      enter() {
        this.h2class = 'name-enter'
      },
      leave() {
        this.h2class = 'name'
      }

    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"

  .song-list
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .rank
        flex: 0 0 25px
        width: 25px
        margin-right: 30px
        text-align: center
        .icon
          display: inline-block
          width: 25px
          height: 24px
          background-size: 25px 24px
          &.icon0
            bg-image2('first')
          &.icon1
            bg-image2('second')
          &.icon2
            bg-image2('third')
        .text
          color: #999
          font-size: $font-size-large
        .ran
          color: #ff4222
          font-size: $font-size-large
      .content
        flex: 1
        line-height: 20px
        overflow: hidden
        .name
          no-wrap()
          color: #333
        .name-enter
          no-wrap()
          color: #31c27c
        .desc
          no-wrap()
          margin-top: 4px
          color: #9e9e9e
</style>
