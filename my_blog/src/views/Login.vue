<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">Login</div>
      <el-form
        ref="loginFormRef"
        :model="LoginFormData"
        :rules="loginRules"
        label-width="100px"
        style="max-width: 480px"
        label-position="left"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="LoginFormData.username" placeholder="Please input your username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="LoginFormData.password" placeholder="Please input your password"/>
        </el-form-item>
        <el-button
         color="#159AC1" 
         class="loginBtn"
          @click="login"
          >Login</el-button
        >
        <div class="info">Don't have an account? <a href="/register" style="color:#800080">Register</a></div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'

const { proxy } = getCurrentInstance();
const router = useRouter();
const api = {
  login: "/login"
}

const loginFormRef = ref();
const LoginFormData = reactive({});

const loginRules = reactive({
  username: [
    { required: true, message: "Please input your username" },
     { min: 3, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
    },
     { min: 5, max: 24, message: 'Length should be 5 to 28', trigger: 'blur' },
  ],
});

const login = () => {
  loginFormRef.value.validate(async (valid) => {
    if(!valid) {
      return
    }
    let params = {
      username: LoginFormData.username,
      password: LoginFormData.password
    }
    let result = await proxy.Request({
      url: api.login,
      params: params,
      errorCallback: () => {
        changeCheckCode();
      }
    })
    if (result.code != 200) {
      return;
    }
    // proxy.message.success("登录成功");
    setTimeout(() => {
      router.push("/")
    }, 1500);
  })
};
</script>

<style lang="scss">
.login-body {
  width: 100%;
  height: calc(100vh);
  background-image: url(../assets/login_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.login-panel {
  width: 350px;
  height: 300px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ddd;
}

.login-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #15C15B;
  font-weight: bold;
}
.loginBtn {
   width: 100%; 
  margin-top: 10px;
}
.info {
  font-size: 14px;
  margin-top: 20px;
  color: #A6BCAF;
}
</style>
