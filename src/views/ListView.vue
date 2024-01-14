<template>
  <div class="List">
    <div class="common-layout">
      <el-container>
        <el-header>打车票管理明细</el-header>
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
          <el-button type="primary" style="margin-left: 16px" @click="drawer = true" destroy-on-close="true">添加
          </el-button>
          <el-button @click="download">下载</el-button>
        </el-container>
      </el-container>
    </div>
  </div>
  <el-drawer v-model="drawer" :close-on-click-modal="false" :close-on-press-escapel="false" :direction="direction">
    <template #header>
      <h4>添加一个新的打车票信息</h4>
    </template>
    <template #default>
      <div>
        <el-form :model="form">
          <el-form-item label="乘车日期：">
            <div class="demo-date-picker">
              <el-date-picker
                  v-model="form.boardingDate"
                  type="date"
                  placeholder="上车时间"
                  format="YYYY/MM/DD"/>
            </div>
          </el-form-item>
          <el-form-item label="上车时间：">
            <div class="demo-date-picker">
              <el-date-picker
                  v-model="form.boardingTime"
                  type="datetime"
                  placeholder="上车时间"
                  format="YYYY/MM/DD HH:mm:ss"/>
            </div>
          </el-form-item>
          <el-form-item label="下车时间：">
            <div class="demo-date-picker">
              <el-date-picker
                  v-model="form.disembarkingTime"
                  type="datetime"
                  placeholder="下车时间"
                  format="YYYY/MM/DD HH:mm:ss"/>
            </div>
          </el-form-item>
          <el-form-item label="乘车人：">
            <el-input v-model="form.passenger"/>
          </el-form-item>
          <el-form-item label="起点：">
            <el-input v-model="form.startingPoints"/>
          </el-form-item>
          <el-form-item label="终点：">
            <el-input v-model="form.endingPoints"/>
          </el-form-item>
          <el-form-item label="报销金额：">
            <el-input v-model="form.reimbursemenAmount"/>
          </el-form-item>
          <el-form-item label="是否为电子发票：">
            <el-select
                v-model="form.electronicInvoiceFlg"
                class="m-2"
                style="width: 240px"
            >
              <el-option
                  v-for="item in electronicInvoiceFlgOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="电子发票税额：">
            <el-input v-model="form.electronicInvoiceTaxAmount"/>
          </el-form-item>
          <el-form-item label="项目编号：">
            <el-input v-model="form.projectNo"/>
          </el-form-item>
          <el-form-item label="名称：">
            <el-input v-model="form.taskName"/>
          </el-form-item>
          <el-form-item label="情况说明：">
            <el-input :rows="3" type="textarea" v-model="form.situationDescription"/>
          </el-form-item>
        </el-form>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">添加一条</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {getListApi, downLoad, addListApi} from "@/api/api";
import {ElMessageBox} from "element-plus";

const drawer = ref(false)
const direction = ref("rtl")
const form = reactive({
  boardingDate: '',
  boardingTime: '',
  disembarkingTime: '',
  passenger: '',
  startingPoints: '',
  endingPoints: '',
  reimbursemenAmount: '',
  electronicInvoiceFlg: '',
  electronicInvoiceTaxAmount: '',
  projectNo: '',
  taskName: '',
  situationDescription: '',
})
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
const electronicInvoiceFlgOption = [
  {
    value: '1',
    label: '是',
  },
  {
    value: '0',
    label: '否',
  },
]

function getListData() {
  getListApi().then((res) => {
    console.log(res);
    tableData.arr = res.data;
  })
}

function download() {
  downLoad().then((res) => {
    let blob = new Blob([res]);
    let downloadElement = document.createElement("a");
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = "市内交通费.xlsx"; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象

  }).catch(function (error) {
    console.log("error", error);
  });
}

onMounted(() => {
  console.log(tableData);
  getListData();
})

function cancelClick() {
  ElMessageBox.confirm(`未保存内容将丢失，确定吗？`)
      .then(() => {
        drawer.value = false
      })
      .catch(() => {

      })
}

function confirmClick() {
  const params = {
    boardingDate: form.boardingDate,
    boardingTime: form.boardingTime,
    disembarkingTime: form.disembarkingTime,
    passenger: form.passenger,
    startingPoints: form.startingPoints,
    endingPoints: form.endingPoints,
    reimbursemenAmount: form.reimbursemenAmount,
    electronicInvoiceFlg: form.electronicInvoiceFlg,
    electronicInvoiceTaxAmount: form.electronicInvoiceTaxAmount,
    projectNo: form.projectNo,
    taskName: form.taskName,
    situationDescription: form.situationDescription,
  };
  addListApi(params).then((res) => {
    console.log(res);
  }).catch(function (error) {
    console.log(error);
  });
}
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>