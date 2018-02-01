<template lang="html">
  <div class="commentsAnalysis">
    <h2 class="d-title">歌曲评论分析</h2>
    <div style="background-color:#fff;margin:20px 0;text-indent:20px;height:46px;text-align:left;line-height:46px;">
      评论数按时间的折线图
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
      <div style="width:560px;height:399px;background-color:#fff">
        <div class="d-table" id="main5" style="width:560px;height:399px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name:'commentsAnalysis',
  data(){
    return {
      lineChart : {
        title : {
           text: '',
           // subtext: '纯属虚构'
       },
       tooltip : {
           trigger: 'axis'
       },
       legend: {
           data:['日评论数']
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
               data : []
           }
       ],
       yAxis : [
           {
               type : 'value',
               axisLabel : {
                   formatter: '{value}'
               }
           }
       ],
        series: [
            {
             name:'日评论数',
             type:'line',
             data:[],
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
         }
        ]
      }



    }
  },
  methods:{
    drawPie(id){
       this.charts = echarts.init(document.getElementById(id))
       this.charts.setOption(this.lineChart)
    }
  },
  created(){
    // console.log("22222")
    let self = this
    // 对路由变化作出响应...
    self.$store.dispatch("getTime",{musicName:"lookWhat"}).then((res) => {
      console.log(res)
      let xData = []
      let yData = []
      for (var i = 0; i < res.length-2; i++) {
        let a = res[i].date+''
        xData.push(a.substr(0,4)+"-"+a.substr(4,2)+"-"+a.substr(6,8))
        yData.push(res[i].count)
      }
      self.lineChart.xAxis[0].data = xData
      self.lineChart.series[0].data = yData
      self.lineChart.title.text = 'Look What You...'
      self.drawPie('main1');
    })

    self.$store.dispatch("getTime",{musicName:"chendu"}).then((res) => {
      console.log(res)
      let xData = []
      let yData = []
      for (var i = 0; i < res.length-2; i++) {
        let a = res[i].date+''
        xData.push(a.substr(0,4)+"-"+a.substr(4,2)+"-"+a.substr(6,8))
        yData.push(res[i].count)
      }
      self.lineChart.xAxis[0].data = xData
      self.lineChart.series[0].data = yData
      self.lineChart.title.text = '成都'
      self.drawPie('main2');
    })
    self.$store.dispatch("getTime",{musicName:"qt"}).then((res) => {
      console.log(res)
      let xData = []
      let yData = []
      for (var i = 490; i < res.length; i++) {
        if(res[i].count>100000){

        }else{
          let a = res[i].date+''
          xData.push(a.substr(0,4)+"-"+a.substr(4,2)+"-"+a.substr(6,8))
          yData.push(res[i].count)
        }

      }
      self.lineChart.xAxis[0].data = xData
      self.lineChart.series[0].data = yData
      self.lineChart.title.text = '晴天'
      self.drawPie('main3');
    })
    self.$store.dispatch("getTime",{musicName:"sugar"}).then((res) => {
      console.log(res)
      let xData = []
      let yData = []
      for (var i = 0; i < res.length; i++) {
        if(res[i].count>20000){

        }else{
          let a = res[i].date+''
          xData.push(a.substr(0,4)+"-"+a.substr(4,2)+"-"+a.substr(6,8))
          yData.push(res[i].count)
        }

      }
      self.lineChart.xAxis[0].data = xData
      self.lineChart.series[0].data = yData
      self.lineChart.title.text = 'sugar'
      self.drawPie('main4');
    })
    self.$store.dispatch("getTime",{musicName:"waitYou"}).then((res) => {
      console.log(res)
      let xData = []
      let yData = []
      for (var i = 0; i < res.length; i++) {
        if(res[i].count>2000000){

        }else{
          let a = res[i].date+''
          xData.push(a.substr(0,4)+"-"+a.substr(4,2)+"-"+a.substr(6,8))
          yData.push(res[i].count)
        }

      }
      self.lineChart.xAxis[0].data = xData
      self.lineChart.series[0].data = yData
      self.lineChart.title.text = '等你下课'
      self.drawPie('main5');
    })
  },
  watch:{
  },
  mounted() {
    this.$nextTick(function() {

        // this
        // this.drawPie('main2')
        // this.drawPie('main4');
        // this.drawPie('main3')
    })
  }
}
</script>

<style lang="css" scoped>
.commentsAnalysis{
  margin: 20px;
}
.d-title{
  background: #F2F3F8;
  text-align: left;
  margin-bottom: 0px;
  padding-bottom: 10px;
}
.d-tables{
  display: flex;
  flex-wrap: wrap;

}
</style>
