<template>
  <div class="register-body">
    <div class="register-panel">
      <div class="register-title">Register</div>
      <el-form
        ref="registerFormRef"
        :model="RegisterFormData"
        :rules="registerRules"
        label-width="150px"
        label-position="left"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="RegisterFormData.username" placeholder="Please input your username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="RegisterFormData.password" placeholder="Please input your password"/>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="password">
          <el-input type="password" v-model="RegisterFormData.password" placeholder="Please repeat your password"/>
        </el-form-item>
        <el-button
          color="#159AC1" 
          class="registerBtn"
          @click="register(registerFormRef)"
          >Register</el-button
        >
        <div class="info">Already have an account? <a href="/login" style="color:#800080">Login</a></div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const registerFormRef = ref();
const RegisterFormData = reactive({
  username: "testUser",
  password: "123456",
});

const registerRules = reactive({
  username: [
    { required: true, message: "Please input your username" },
     { min: 3, max: 12, message: 'Length should be 3 to 12', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
    },
     { min: 6, max: 24, message: 'Length should be 6 to 28', trigger: 'blur' },
  ],
});

// const register = () => {
   
// };
</script>

<style lang="scss">
.register-body {
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

.register-panel {
  width: 400px;
  height: 320px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ddd;
}

.register-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #15C15B;
}
.registerBtn {
  width: 100%; 
  margin-top: 10px;
}
.info {
  font-size: 14px;
  margin-top: 20px;
  color: #A6BCAF;
}
</style>
