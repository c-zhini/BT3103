import {Line} from 'vue-chartjs'
export default{
    extends:Line,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
              label: 'Sales',
              data: [400, 300,150,100],
              backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#000",
              fill:false
            },
            {
                label: 'Sales2',
                data: [40, 30,10,15],
                
                
              }
          ]
          
        },
        options: {
          title: {
            display:true,
            text:'Line Chart Example',
            fontColor: 'violet',
            fontSize:15
        },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}