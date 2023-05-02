<template>
  <div>
    <div class="bg-wrapper_container">
      <div class="bg-wrapper">
      </div>
    </div>

    <el-row class="login_container" type="flex" justify="center" align="middle" >
      <el-col style="width:50vh;">
        <div class="login_box">
          <el-row type="flex" justify="center" align="middle" style="width: 100%; height: 100%; display: flex; align-items: center;">
            <el-col class="left_part" :span="10">
              <img src="src/assets/img/logo/desktop-logo.png">
              <div class="title_holder">
                <h3>欢迎登录</h3>
              </div>
              <div>
                <a>
                  后台管理系统
                </a>
              </div>
            </el-col>
            <el-col class="right_part" :span="14">
              <el-form
                  ref="ruleFormRef"
                  :model="loginForm"
                  :rules="rules"
                  class="login-form"
                  :show-message="false"
              >
                <el-form-item label="username" prop="username" >
                  <el-input v-model="loginForm.username" style="width: 250px"/>
                  <template #label>
                    <span style="color: #041230; font-size: 20px">账号</span>
                  </template>
                </el-form-item>
                <el-form-item label="password" prop="password">
                  <el-input v-model="loginForm.password" />
                  <template #label>
                    <span style="color: #041230;  font-size: 20px">密码</span>
                  </template>
                </el-form-item>

                <div class="button_holder">
                  <el-form-item>
                    <el-button
                        class="submit-button"
                        type="primary"
                        @click="submitForm(ruleFormRef, loginForm)"
                        color="#041230"
                        style="width: 170px; height: 50px"
                    >
                      Login
                    </el-button>
                  </el-form-item>
                </div>

              </el-form>
            </el-col>
          </el-row>

        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script  lang="ts" >
export default {
  name: "Login"
}
</script>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules  } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
import { submitForm } from 'utils/utils';

const loginForm = reactive({
  username: 'admin',
  password: '123456',
})

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      pattern: /^[a-zA-Z]\w{3,9}$/,
      message: '用户名: 4~10个字符，字母开头，只能包含字母、数字和下划线',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      pattern: /\S{4,20}$/,
      message: '密码: 4~20个字符，不能包含空格',
      trigger: 'blur',
    },
  ],
})


</script>

<style scoped>

.bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("@/assets/img/bg_login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.login_container {
  height: 100vh;
}

.login_box{
  margin: 0 auto;
  padding: 0;
  width: 700px;
  height: 350px;
  background-color: #041230;
}

.left_part{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left_part >img{
  width: 30%;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

.left_part >div{
  align-self: center;
  color: white;
}

.title_holder > h3{
  margin: 20px;
}

.right_part{
  height: 100%;
  background-color: #e3872d;
  display: flex;
  justify-content: center;
  align-items: center;
}


.button_holder {
  display: flex;
  justify-content: center;
}

.el-form-item__error {
  color: white;
}

</style>