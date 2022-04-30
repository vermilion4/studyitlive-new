import React from 'react'
import ReactECharts from 'echarts-for-react'

const ActivityChart = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri',],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [25, 75, 66, 50, 99],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return <ReactECharts option={options} />;
};

export default ActivityChart;