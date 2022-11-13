<template>
  <div class="login-body">
    <div class="login-panel">
      <el-form
        label-width="100px"
        style="max-width: 460px"
      >
        <el-form-item label="Username" required>
          <el-input placeholder="Please input your username"/>
        </el-form-item>
        <el-form-item label="Password" required>
          <el-input placeholder="Please input your password"/>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>
<script setup></script>
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
}

.login-panel {
  width: 350px;
  height: 200px;
  background: #efd6c2;
}
</style>
