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
import axios from "axios";

const form = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {

  axios.get('/user', {
    params: {
      ID: form.name,
      Password: form.password
    }
  }).then(function (response) {
    console.log(response);
    this.$router.push("/List");
    localStorage.setItem("token",response.data);
  }).catch(function (error) {
    console.log(error);
  });
}
</script>