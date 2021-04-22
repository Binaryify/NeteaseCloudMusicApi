<template>
  <kinesis-container>
    <div class="login-wrap">
      <kinesis-element :parallaxStrength="4" :type="parallax">
        <div class="login-box">
          <img src="../../assets/images/logo-a.png" class="nice-logo" />
          <p>NICEMUSIC</p>
          <div class="login-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <div class="login-input">
                <el-form-item prop="phone">
                  <el-input
                    class="login-text"
                    type="text"
                    placeholder="请输入网易云音乐手机号"
                    v-model="ruleForm.phone"
                  ></el-input>
                  <span class="login-focus"></span>
                  <span class="login-symbol">
                    <i class="iconfont nicephone2"></i>
                  </span>
                </el-form-item>
              </div>
              <div class="login-input">
                <el-form-item prop="password">
                  <el-input
                    class="login-text"
                    type="password"
                    placeholder="请输入密码"
                    v-model="ruleForm.password"
                    @keyup.enter.native="login('ruleForm')"
                  ></el-input>
                  <span class="login-focus"></span>
                  <span class="login-symbol">
                    <i class="iconfont nicemima"></i>
                  </span>
                </el-form-item>
              </div>
              <div class="login-footer">
                <div class="login-btn-wrap">
                  <el-button
                    class="login-btn"
                    type="primary"
                    :loading="loginLoading"
                    @click="login('ruleForm')"
                    >登录</el-button
                  >
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </kinesis-element>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [{ required: true, message: '手机号都没有！', trigger: 'blur' }],
        password: [{ required: true, message: '密码呢！', trigger: 'blur' }]
      },
      loginLoading: false,
      parallax: 'depth'
    }
  },
  components: {
    KinesisContainer,
    KinesisElement
  },
  methods: {
    // 登录操作
    login(formName) {
      this.loginLoading = false
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loginLoading = true
          let { phone, password } = this.ruleForm
          this.loginAsync(phone, password)
        } else {
          this.loading = false
        }
      })
    },
    // 登录接口调用
    loginAsync(phone, password) {
      this.loginLoading = false
      this.$api
        .login(phone, password)
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.getUserDetail(res.profile.userId)
            window.localStorage.setItem('cookie', res.cookie)
            window.localStorage.setItem('token', res.token)
            window.localStorage.setItem('loginStatu', true)
            this.setLoginStatu(true)
          } else {
            this.$message.error(res.msg)
          }
        })
        .catch(() => {
          this.$message.error('似乎出了什么问题啊，啧啧啧!!!')
        })
    },
    // 获取个人信息
    async getUserDetail(uid) {
      try {
        let res = await this.$api.getUserDetail(uid)
        if (res.code === 200) {
          let userInfo = res.profile
          userInfo.level = res.level
          userInfo.listenSongs = res.listenSongs
          userInfo.createTime = res.createTime
          userInfo.createDays = res.createDays
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
          this.setUserInfo(res.profile)
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          setTimeout(() => {
            this.loginLoading = false
            this.$router.push({ path: '/' })
          }, 1500)
        }
      } catch (error) {
        console.log(error)
      }
    },
    isEmpty(val) {
      return (
        val === undefined ||
        val === null ||
        (typeof val === 'object' && Object.keys(val).length === 0) ||
        (typeof val === 'string' && val.trim().length === 0)
      )
    },
    ...mapMutations({
      setUserInfo: 'SET_USERINFO',
      setLoginStatu: 'SET_LOGINSTATU'
    })
  }
}
</script>

<style lang="stylus">
  .login-wrap {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #5dd5c8 url(../../assets/images/newbg1.png) center bottom no-repeat;
  .login-box {
    overflow: hidden;
    height: 486px;
    position: relative;
    width: 350px;
    max-width: 350px;
    margin: 4em auto;
    background: #FFF;
    background-image: url(../../assets/images/logbg.jpg);
    border-radius: 8px;
    box-shadow: 1px 2px 15px rgba(0,0,0,.3);
    background-repeat: no-repeat;
    background-position: bottom;
    text-align: center;
    -webkit-backface-visibility: hidden;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    transition-duration: 0.3s;
    z-index: 80;
    .switch {
      font-size: 13px;
      position: absolute;
      right: 0px;
      bottom: 5px;
      width: 100%;
      text-align: center;
      color: #0ef3da;
      cursor: pointer;
      b {
        color: #0ef3da;
        font-weight: 600;
      }
    }
    .nice-logo {
      width: 55px;
      margin: 40px 0 0px;
    }
    p {
      margin-bottom: 45px;
    }
    .login-form {
      width: 296px;
      margin: 0 auto;
      .login-title {
        font-size: 24px;
        color: #333333;
        line-height: 1.2;
        text-align: center;
        width: 100%;
        display: block;
        padding-bottom: 54px;
      }
      .login-input {
        position: relative;
        width: 100%;
        z-index: 1;
        margin-bottom: 10px;
        .login-text {
          font-size: 14px;
          line-height: 1.5;
          color: #666666;
          display: block;
          width: 100%;
          border: 1px solid #e3e7ed;
          height: 42px;
          border-radius: 3px;
          padding: 0 30px 0 45px;
          .el-input__inner {
            font-size: 14px;
            line-height: 1.5;
            color: #666666;
            display: block;
            width: 100%;
            border: 0;
            height: 40px;
            padding: 0;
            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus {
              box-shadow:0 0 0 60px #fff inset;
              color: #666666;
            }
          }
        }
        .login-focus {
          display: block;
          position: absolute;
          border-radius: 3px;
          bottom: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          box-shadow: 0px 0px 0px 0px;
          color: rgba(230, 230, 230, 0.8);
        }
        .login-symbol {
          font-size: 15px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          position: absolute;
          border-radius: 3px;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding-left: 15px;
          pointer-events: none;
          color: #666666;
          -webkit-transition: all 0.4s;
          -o-transition: all 0.4s;
          -moz-transition: all 0.4s;
          transition: all 0.4s;
        }
        .login-text {
          .el-input__inner:focus + .el-input__inner {
            -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
            animation: anim-shadow 0.5s ease-in-out forwards;
          }
        }
      }
      .login-footer {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 10px;
        .login-btn-wrap {
          width: 100%;
          display: block;
          position: relative;
          z-index: 1;
          border-radius: 3px;
          overflow: hidden;
          margin: 0 auto;
          .login-btn-bg {
            position: absolute;
            z-index: -1;
            width: 300%;
            height: 100%;
            background: #a64bf4;
            background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
            top: 0;
            left: -100%;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
          }
          .login-btn {
            font-size: 15px;
            line-height: 1.5;
            color: #fff;
            text-transform: uppercase;
            width: 100%;
            height: 42px;
            border-radius: 3px;
            border: 0;
            background: #5dd5c8;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 25px;
          }
          &:hover .login-btn-bg {
            left: 0;
          }
        }
      }
    }
  }
}

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}
</style>
