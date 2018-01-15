<template>
  <div class="demo1">
    <div class="d-content">
      <h2 class="d-title">demo1</h2>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="d-tabs">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
      </el-tabs>
      <div  class="d-drop">
        <div class="d-date">
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <el-row class="d-choice">
        <el-col :span="4" class="d-choice-li active">
          <div class="d-choice-title">浏览次数（PV）</div>
          <div class="d-choice-num">10.53万</div>
          <div class="d-choice-pre">同比: <i>-51.41%</i></div>
        </el-col>
        <el-col :span="4" class="d-choice-li">
          <div class="d-choice-title">浏览次数（PV）</div>
          <div class="d-choice-num">10.53万</div>
          <div class="d-choice-pre">同比: <i>-51.41%</i></div>
        </el-col>
        <el-col :span="4" class="d-choice-li">
          <div class="d-choice-title">浏览次数（PV）</div>
          <div class="d-choice-num">10.53万</div>
          <div class="d-choice-pre">同比: <i>-51.41%</i></div>
        </el-col>
        <el-col :span="4" class="d-choice-li">
          <div class="d-choice-title">浏览次数（PV）</div>
          <div class="d-choice-num">10.53万</div>
          <div class="d-choice-pre">同比: <i>-51.41%</i></div>
        </el-col>
        <el-col :span="4" class="d-choice-li">
          <div class="d-choice-title">浏览次数（PV）</div>
          <div class="d-choice-num">10.53万</div>
          <div class="d-choice-pre">同比: <i>-51.41%</i></div>
        </el-col>
        <el-col :span="4" class="d-choice-li">
          <div class="d-choice-title">浏览次数（PV）</div>
          <div class="d-choice-num">10.53万</div>
          <div class="d-choice-pre">同比: <i>-51.41%</i></div>
        </el-col>
      </el-row>

      <div class="d-choice-table">
        <span class="d-choice-table-title">
          <i class="el-icon-message"></i>
          显示2017年10月26日-2017年10月26日的汇总数据，独立访客(UV)51,161，同比下降-48.75%。
        </span>

        <el-dropdown class="d-choice-tool">
          <el-button type="primary">
            <i class="el-icon-setting"></i>分析工具
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div id="main" class="d-choice-pic"></div>

      </div>


      <div style="background-color:#fff;margin:20px 0;text-indent:20px;height:46px;text-align:left;line-height:46px;">
        业务报表
      </div>
      <div class="d-tables">
        <div style="width:560px;height:399px;background-color:#fff;margin-right:18px;margin-bottom:18px;">
          <div class="d-table" id="main1" style="width:560px;height:399px;"></div>
        </div>
        <div style="width:560px;height:399px;background-color:#fff;">
          <div class="d-table" id="main2" style="width:560px;height:399px;"></div>
        </div>
        <div style="width:560px;height:399px;background-color:#fff;margin-right:18px">
          <div class="d-table" id="main3" style="width:560px;height:399px;"></div>
        </div>
        <div style="width:560px;height:399px;background-color:#fff">
          <div class="d-table" id="main4" style="width:560px;height:399px;"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import echarts from 'echarts';
import dTable from '@/components/d-table.vue'
export default {
  name: 'demo1',
  data () {
    return {
      charts: '',
      highTemData: [11, 11, 15, 13, 12, 13, 10],
      lowTemData: [1, -2, 2, 5, 3, 2, 0],
      activeName: 'first',
      tableChart: {
          title : {
              text: '某地区蒸发量和降水量',
              subtext: '纯属虚构'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['蒸发量','降水量']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'蒸发量',
                  type:'bar',
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'降水量',
                  type:'bar',
                  data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  markPoint : {
                      data : [
                          {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                          {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              }
          ]
      },
      lineChart : {
        title : {
           text: '未来一周气温变化',
           // subtext: '纯属虚构'
       },
       tooltip : {
           trigger: 'axis'
       },
       legend: {
           data:['最高气温','最低气温']
       },
       toolbox: {
           show : true,
           feature : {
               mark : {show: true},
               dataView : {show: true, readOnly: false},
               magicType : {show: true, type: ['line', 'bar']},
               restore : {show: true},
               saveAsImage : {show: true}
           }
       },
       calculable : true,
       xAxis : [
           {
               type : 'category',
               boundaryGap : false,
               data : ['周一','周二','周三','周四','周五','周六','周日']
           }
       ],
       yAxis : [
           {
               type : 'value',
               axisLabel : {
                   formatter: '{value} °C'
               }
           }
       ],
        series: [
            {
             name:'最高气温',
             type:'line',
             data:[11, 11, 15, 13, 12, 13, 10],
             markPoint : {
                 data : [
                     {type : 'max', name: '最大值'},
                     {type : 'min', name: '最小值'}
                 ]
             },
             markLine : {
                 data : [
                     {type : 'average', name: '平均值'}
                 ]
             }
         },
         {
             name:'最低气温',
             type:'line',
             data:[1, -2, 2, 5, 3, 2, 0],
             markPoint : {
                 data : [
                     {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                 ]
             },
             markLine : {
                 data : [
                     {type : 'average', name : '平均值'}
                 ]
             }
         }
        ]
      },
      pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value2: '',
    }
  },
  methods: {
    drawPie(id){
       this.charts = echarts.init(document.getElementById(id))
       this.charts.setOption(this.lineChart)
    },
    drawTable(id){
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption(this.tableChart)
    }

  },
  mounted() {
    this.$nextTick(function() {
        this.drawPie('main');
        this.drawTable('main1');
        this.drawPie('main2')
        this.drawTable('main4');
        this.drawPie('main3')
    })
  },
  components:{
    dTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.d-title{
  background: #F2F3F8;
  text-align: left;
  margin-bottom: 0px;
  padding-bottom: 10px;
}
.demo1{
  height: 100%;
}
.d-content{
  margin: 20px;
  /*background: #fff;*/
}
.d-tabs{
  background-color: #fff;
}
.d-drop{
  height: 46px;
  line-height: 46px;
  margin-top: 20px;
  background-color: #fff;
  text-align: left;
}
.d-date{
  display: inline-block;
  margin: 0 20px;
}
.d-choice{
  border-top:1px solid #ccc;
  background: #fff;

}
.d-choice .active{
  background-color: #F7FCFF;
  border-top: 2px solid #2196F3;
  border-right: 1px solid #ccc;
  border-bottom: 0;
}
.d-choice .active .d-choice-title{
  font-weight: bold;
}
.d-choice-li{
  height:137px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.d-choice-title{
  margin: 23px 0 0;
  font-size: 14px;
}
.d-choice-num{
  font-size: 24px;
  margin: 8px 0 0;
  line-height: 36px;
}
.d-choice-pre{
  margin: 8px 0 0;
  line-height: 18px;
}
.d-choice-pre i{
  color:#5B9F0C
}

.d-choice-table{
  height: 482px;
  background-color: #fff;
  text-align: left;
}
.d-choice-table-title{
  display: inline-block;
  line-height: 64px;
  height: 64px;
  margin-left: 20px;
}
.d-choice-tool{
  float: right;
  line-height: 64px;
  margin-right: 30px;
}
.d-choice-pic{
  height: 400px;
}
.d-tables{
  display: flex;
  flex-wrap: wrap;

}

</style>
