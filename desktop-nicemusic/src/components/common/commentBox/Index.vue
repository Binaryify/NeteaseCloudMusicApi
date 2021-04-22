<template>
  <div class="comment-box">
    <p class="flex-row">
      <span>
        <i class="iconfont niceuser"></i>
        &nbsp;&nbsp;{{ userInfo.nickname }}，你好
      </span>
      <button
        class="cancel-comment"
        @click="cancelComment"
        v-if="currentCommentId != ''"
      >
        取消回复
      </button>
    </p>
    <div class="comment-form">
      <div class="avatar">
        <img :src="userInfo.avatarUrl" :title="userInfo.nickname" />
      </div>
      <div class="comarea">
        <textarea
          name="comment"
          v-model="commentContent"
          placeholder="你看什么看！"
          tabindex="4"
          cols="50"
          rows="5"
        ></textarea>
      </div>
    </div>
    <div class="comment-foot flex-between">
      <div class="smile"></div>
      <button
        type="button"
        class="comment-btn transition"
        @click="commentSubmit"
      >
        评论
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // 评论内容
      commentContent: ''
    }
  },
  props: {
    currentCommentId: {
      type: [String, Number]
    },
    clearContent: {
      type: Boolean
    }
  },
  components: {},
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(['userInfo', 'loginStatu'])
  },
  //监控data中的数据变化
  watch: {
    clearContent(val) {
      if (val) {
        this.commentContent = ''
      }
    }
  },
  //方法集合
  methods: {
    // 提交评论
    commentSubmit() {
      this.$emit('commentSubmit', this.commentContent)
    },
    // 取消评论
    cancelComment() {
      this.$emit('cancelComment')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
}
</script>
<style lang="stylus" scoped>
.comment-box {
  margin-top: 20px;
  p {
    i {
      margin-right: 10px;
    }
    span {
      flex: 1;
    }
    .cancel-comment {
      color: #d9dfff;
      font-size: 12px;
      background: none;
      padding: 6px 10px;
      border-radius: 2px;
      border: 1px solid #dee3ff;
      cursor: pointer;
    }
  }
  .comment-form {
    display: flex;
    margin-top: 1.5em;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 3px;
      margin-right: 20px;
      position: relative;
      flex-shrink: 0;
      img {
        width: 100%;
        border-radius: 3px;
      }
    }
    .comarea {
      flex: 1;
      textarea {
        width: 100%;
        outline: none;
        background: #f8f9ff;
        resize: none;
        padding: 6px 12px;
        color: #666;
        border: 1px solid #eaebff;
        border-radius: 3px;
        font-size: 13px;
        height: 80px;
      }
    }
  }
}
.comment-foot {
  margin-top: 15px;
  .comment-btn {
    color: #fff;
    padding: 10px 30px;
    font-size: 0.75rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    outline: none;
    background: #FF416C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}
</style>
