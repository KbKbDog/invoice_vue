<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>打车票管理系统</span>
      </div>
    </template>
    <el-form :model="form">
      <el-form-item label="用户名：">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive } from 'vue'
import { loginApi } from "@/api/api";
import router from "@/router";

const form = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {
  const params= {
    userName: form.name,
    password: form.password
  };
  loginApi(params).then((res) => {
    console.log(res);
    localStorage.setItem("token",res.data.token);
    router.push('/list');

  }).catch(function (error) {
    console.log(error);
  });
}
</script>