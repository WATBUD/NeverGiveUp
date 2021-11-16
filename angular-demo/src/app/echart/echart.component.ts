import { Component, OnInit } from '@angular/core';
import * as echarts from './echarts.min.js'

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {

	constructor() { }
	
	data:any = [
		// [0,0],
		// [20, 20],
		// [30, 80],
		// [40, 30],
		// [50, 10],
		// [60, 90],
		// [100,100]
		[0,0],
		[10, 10],
		[20, 20],
		[30, 30],
		[40, 40],
		[50, 50],
		[60, 60],
		[70,70],
		[80,80],
		[90,90],
		[100,100]
	];

	ngOnInit() {
		this.draw(this.data)
	}

	draw(pointList): void {
		var chartDom = document.getElementById('main');
		var myChart = echarts.init(chartDom);
		var option;
		var symbolSize = 15;

		option = {
			// title: {
			// 	text: 'CPU Temperature',
			// 	left: 'center',
			// 	top: 'bottom'
			// },
			xAxis: {
				type: 'value',
				min: 0,
				max: 100,
				splitNumber: 10, // 分割段数
				axisLabel: {
					show: false, //要不要顯示X軸資料
					formatter: '{value}°C',
				},
				axisLine: {  // 坐标轴线
					onZero: false,
					lineStyle: {
						color: 'white',
					}
				},
			},
			yAxis: {
				type: 'value',
				min: 0,
				max: 100,
				splitNumber: 10, // 分割段数
				axisLabel: {
					show: false, //要不要顯示Y軸資料
					formatter: '{value}%',
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: 'white',
					}
				}
			},
			series: [
				{
					id: 'a',
					data: pointList,
					type: 'line',
					symbol: 'circle',
					symbolSize:  symbolSize,//dot的大小,
					itemStyle: {
						color: 'rgb(255,0,0)',
					}
				}
			],
			tooltip: {
				triggerOn: 'none',
				formatter: function (params) {
					return (
						params.data[0].toFixed(0) + '°C' +
						'&nbsp&nbsp&nbsp&nbsp' +
						params.data[1].toFixed(0) + '%'
					);
				},
				backgroundColor:'black',
				borderColor: "gray",
				borderWidth: 3,
				textStyle: {
					color:'white'
				}
			},
			grid: {
				show: true,
                containLabel: false,
				top: 10,
				bottom: 10,
				left: 10,
				right: 10,
				// borderWidth: 5,
			},
		};

		setTimeout(() => {
			myChart.setOption({
				// graphic: echarts.util.map(data, function (item, dataIndex) {
				graphic: pointList.map(function (item, dataIndex) {
					return {
						type: 'circle',
						position: myChart.convertToPixel('grid', item),
						shape: {
							cx: 0,
							cy: 0,
							r: symbolSize / 2
						},
						invisible: true,
						draggable: true,
						ondrag: echarts.util.curry(onPointDragging, dataIndex),
						onmousemove: echarts.util.curry(showTooltip, dataIndex),
						onmouseout: echarts.util.curry(hideTooltip, dataIndex),
						// ondrag: function (dx, dy) {
						// 	onPointDragging(dataIndex, [this.x, this.y],item);
						// },
						// onmousemove: function () {
						// 	showTooltip(dataIndex);
						// },
						// onmouseout: function () {
						// 	hideTooltip(dataIndex);
						// },
						z: 100
					};
				})
			})
		});

		window.addEventListener('resize', updatePosition);
		myChart.on('dataZoom', updatePosition);
		function updatePosition() {
			myChart.setOption({
				graphic: pointList.map(function (item, dataIndex) {
					return {
						position: myChart.convertToPixel('grid', item)
					};
				})
			});
		}

		function showTooltip(dataIndex) {
			myChart.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: dataIndex
			});
		}
		
		function hideTooltip(dataIndex) {
			myChart.dispatchAction({
				type: 'hideTip'
			});
		}

		function onPointDragging(dataIndex, event) {
			pointList[dataIndex] = myChart.convertFromPixel('grid', this.position);
			console.log('%c onPointDragging', 'background: blue; color: red', pointList,dataIndex, this.position)
			console.log('%c pointList[dataIndex]', 'background: blue; color: red', pointList[dataIndex])

			myChart.setOption({
				series: [{
					id: 'a',
					data: pointList
				}]
			});
		}

		function onPointDragging2(dataIndex, dx, dy) {
			if(dataIndex == 0 || dataIndex == 6)
				return;
			let postObj = []
			pointList.map(function (item, dataIndex) {
				let position = myChart.convertToPixel('grid', item);
				postObj.push(position)
			});
			pointList[dataIndex] = myChart.convertFromPixel('grid', this.position);
			if(pointList[dataIndex][0] <= pointList[dataIndex - 1][0]) {
				pointList[dataIndex][0] = pointList[dataIndex - 1][0] + 1;
				this.position[0] =  myChart.convertToPixel('grid', pointList[dataIndex])[0];
			}
			else if(pointList[dataIndex][0] >= pointList[dataIndex + 1][0]) {
				pointList[dataIndex][0] = pointList[dataIndex + 1][0] - 1;
				this.position[0] =  myChart.convertToPixel('grid', pointList[dataIndex])[0];
			}

			if(pointList[dataIndex][1] < 0) {
				pointList[dataIndex][1] = 0
				this.position[1] = postObj[0][1]
			} else if(pointList[dataIndex][1] > 100) {
				pointList[dataIndex][1] = 100
				this.position[1] = postObj[6][1]
			}
			pointList[dataIndex] = myChart.convertFromPixel('grid', this.position);
			myChart.setOption({
				series: [{
					id: 'a',
					data: pointList
				}]
			});
		}

		// function onPointDragging(dataIndex, dx, dy) {
		// 	console.log(123455,dataIndex, dx, dy)
		// 	data[dataIndex] = myChart.convertFromPixel('grid', this.position);
		// 	myChart.setOption({
		// 		series: [{
		// 			id: 'a',
		// 			data: data
		// 		}]
		// 	});
		// }

		// function onPointDragging(dataIndex, pos, item) {
		// 	data[dataIndex] = myChart.convertFromPixel('grid', pos);
		// 	console.log(123455,data[dataIndex - 1],pos,item)
		// 	if(data[dataIndex][0] <= data[dataIndex - 1][0])
		// 		data[dataIndex][0] = data[dataIndex - 1][0] + 2
		// 	if(data[dataIndex][0] >= data[dataIndex + 1][0])
		// 		data[dataIndex][0] = data[dataIndex + 1][0] - 2
		// 	// Update data
		// 	myChart.setOption({
		// 		series: [
		// 			{
		// 				id: 'a',
		// 				data: data
		// 			}
		// 		]
		// 	});
		// }
		option && myChart.setOption(option);
	}
}
