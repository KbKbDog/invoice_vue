<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>打车票管理系统</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}

</script>