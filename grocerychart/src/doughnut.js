import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],
          datasets: [
            {
              label: 'Sales',
              data: [400, 300,150,100],
              backgroundColor:['aqua','pink','turquoise','orange'],
              borderWidth:0.5,
              borderColor:"#000"
            },
            {
                label: 'Sales2',
                data: [40, 30,10,15],
                backgroundColor:['aqua','pink','turquoise','orange']
              }
          ]
          
        },
        options: {
            title: {
                display:true,
                text:'Doughnut Chart Example',
                fontColor: 'lightblue',
                fontSize:15
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 10
              }
          }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}