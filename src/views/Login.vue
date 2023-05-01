<template>

  <el-row class="login_container" type="flex" justify="center" align="middle" >
    <el-col style="width:50vh;">
      <el-card  class="login_box">
        <el-row type="flex" justify="center" align="middle" style="width: 100%">
          <el-col class="left_part" :span="12">
            <p>左边图片</p>
          </el-col>
          <el-col class="right_part" :span="12">
            <el-row class="title_holder">
              <div>
                <h3>欢迎登录</h3>
                <a>
                  后台管理系统
                </a>
              </div>
            </el-row>

            <el-form
                ref="ruleFormRef"
                :model="loginForm"
                :rules="rules"
                class="login-form"
                :size="formSize"
                status-icon
            >
              <el-form-item label="username" prop="username">
                <el-input v-model="loginForm.username" />
              </el-form-item>
              <el-form-item label="password" prop="password">
                <el-input v-model="loginForm.password" />
              </el-form-item>

              <div class="button_holder">
                <el-form-item>
                  <el-button class="submit-button" type="primary" @click="submitForm(ruleFormRef)">
                    Login
                  </el-button>
                </el-form-item>
              </div>

            </el-form>
          </el-col>
        </el-row>

      </el-card>

    </el-col>

  </el-row>

</template>

<script  lang="ts" >
export default {
  name: "Login"
}
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import store from "../store";
import router from "../router";

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: 'admin',
  password: '123456',
})

const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      pattern: /^[a-zA-Z]\w{3,9}$/,
      message: '请输入4~10个字符，以字母开头，只能包含字母、数字和下划线',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      pattern: /\S{4,20}$/,
      message: '请输入4~20个字符，不能包含空格',
      trigger: 'blur',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      console.log('submit!')
      await store.commit('login') // 提交登录操作
      router.replace({ path: '/' }) // 跳转到 / 路由

    } else {
      console.log('error submit!', fields)

    }
  })
}

</script>

<style scoped>

.login_container{
  height:100vh;
  background: linear-gradient(135deg, #0f75ff, #2ddcd3);
}

.login_box, .left_part, .right_part{
  border: solid 1px black;
}

.login_box{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 700px;
  height: 350px;
}
.login_box .left_part{
  width: 350px;
}
.login_box .right_part{
  width: 350px;
}
.login_box .right_part .title_holder{
  margin-bottom: 25px;
}

.login-form{

}

.button_holder {
  display: flex;
  justify-content: center;
}
</style>