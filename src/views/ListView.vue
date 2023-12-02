<template>
  <div class="List">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>
              <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import { getListApi } from "@/api/api";
let tableData = reactive( [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
function getListData(){
  getListApi().then((res)=>{
    console.log(res);
    tableData=res.data;
  })
}
onMounted(()=>{
  console.log(tableData);
  getListData();
})
</script>
