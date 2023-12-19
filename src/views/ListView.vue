<template>
  <div class="List">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>
            <el-table :data="tableData.arr" border style="width: 100%">
              <el-table-column prop="id" label="序号"/>
              <el-table-column prop="boardingDate" label="乘车日期"/>
              <el-table-column prop="boardingTime" label="上车时间"/>
              <el-table-column prop="disembarkingTime" label="下车时间"/>
              <el-table-column prop="passenger" label="乘车人"/>
              <el-table-column prop="startingPoints" label="起点"/>
              <el-table-column prop="endingPoints" label="终点"/>
              <el-table-column prop="endingPoints" label="报销金额"/>
              <el-table-column prop="electronicInvoiceFlg" label="是否为电子发票"/>
              <el-table-column prop="electronicInvoiceTaxAmount" label="电子发票税额"/>
              <el-table-column prop="projectNo" label="项目编号"/>
              <el-table-column prop="taskName" label="任务名称"/>
              <el-table-column prop="situationDescription" label="情况说明"/>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import {getListApi} from "@/api/api";

let tableData = reactive({
  arr: [{
    "id": 1,
    "boardingDate": "2022-04-26",
    "boardingTime": "2023-11-27T00:21:20",
    "disembarkingTime": "2023-11-26T23:25:40",
    "passenger": "UsxfeFQ7ra",
    "startingPoints": "mqTIbRUooR",
    "endingPoints": "OwPrnfvLCr",
    "reimbursemenAmount": 980.00,
    "electronicInvoiceFlg": "y",
    "electronicInvoiceTaxAmount": 274.00,
    "projectNo": "oJSHxd4qTW",
    "taskName": "Feng Yuning",
    "situationDescription": "MmSFNMsyuc"
  }
  ]
});

function getListData() {
  getListApi().then((res) => {
    console.log(res);
    tableData.arr = res.data;
  })
}

onMounted(() => {
  console.log(tableData);
  getListData();
})
</script>
