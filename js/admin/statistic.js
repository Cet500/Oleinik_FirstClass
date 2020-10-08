/* ------------------------------- admin-statictic ------------------------------- */

/* -------------------- charts -------------------- */

var ctx1 = document.getElementById('marksPieChart').getContext('2d');

var marksPieChart = new Chart(ctx1, {
	type: 'pie',
	data: {
		labels: [
			'Отлично',
			'Хорошо',
			'Норма'
		],
		datasets: [{
			data: [ 125, 214, 24 ],
			backgroundColor: [
				'rgba(255, 99,  132, 0.3)',
				'rgba(54,  162, 235, 0.3)',
				'rgba(153, 102, 255, 0.3)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(153, 102, 255, 1)'
			],
			hoverBackgroundColor: [
				'rgba(255, 99,  132, 0.8)',
				'rgba(54,  162, 235, 0.8)',
				'rgba(153, 102, 255, 0.8)'
			],
			borderWidth: 1,
			weight: 100,
		}],
	},
	options: {
		layout: {
			padding: {
				left:   0,
				right:  0,
				top:    10,
				bottom: 20
			},
		},
		rotation: 1.5 * Math.PI,
	},
});

var ctx2 = document.getElementById('visitsPieChart').getContext('2d');

var visitsPieChart = new Chart(ctx2, {
	type: 'pie',
	data: {
		labels: [
			'Находились',
			'Отстутствовали'
		],
		datasets: [{
			data: [ 200, 100 ],
			backgroundColor: [
				'rgba(255, 99,  132, 0.3)',
				'rgba(54,  162, 235, 0.3)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)'
			],
			hoverBackgroundColor: [
				'rgba(255, 99,  132, 0.8)',
				'rgba(54,  162, 235, 0.8)'
			],
			borderWidth: 1,
			weight: 100,
		}],
	},
	options: {
		layout: {
			padding: {
				left:   0,
				right:  0,
				top:    10,
				bottom: 20
			},
		},
		rotation: 1.5 * Math.PI,
	},
});

var ctx3 = document.getElementById('statusesPieChart').getContext('2d');

var visitsPieChart = new Chart(ctx3, {
	type: 'pie',
	data: {
		labels: [
			'Отличники',
			'Хорошисты',
			'Ударники'
		],
		datasets: [{
			data: [ 200, 50, 100 ],
			backgroundColor: [
				'rgba(255, 99,  132, 0.3)',
				'rgba(54,  162, 235, 0.3)',
				'rgba(153, 102, 255, 0.3)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(153, 102, 255, 1)'
			],
			hoverBackgroundColor: [
				'rgba(255, 99,  132, 0.8)',
				'rgba(54,  162, 235, 0.8)',
				'rgba(153, 102, 255, 0.8)'
			],
			borderWidth: 1,
			weight: 100,
		}],
	},
	options: {
		layout: {
			padding: {
				left:   0,
				right:  0,
				top:    10,
				bottom: 20
			},
		},
		rotation: 1.5 * Math.PI,
	},
});

var ctx4 = document.getElementById('visitsLineChart').getContext('2d');

var visitsPieChart = new Chart(ctx4, {
	type: 'line',
	data: {
		labels: [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ],
		datasets: [{
			label: 'Посещения',
			data: [ 5, 6, 3, 6, 5, 6, 4, 3, 8, 10, 20, 16, 17, 16, 15, 16, 14, 10, 8, 10, 11 ],
			backgroundColor: 'rgba(255, 99,  132, 0.3)',
			borderColor: 'rgba(255, 99,  132, 1)',
			hoverBackgroundColor: 'rgba(255, 99,  132, 0.8)',
			borderWidth: 1
		}],
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
          			beginAtZero: true
        		}
			}]
		}
	}
});

var ctx5 = document.getElementById('marksLineChart').getContext('2d');

var visitsPieChart = new Chart(ctx5, {
	type: 'bar',
	data: {
		labels: [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ],
		datasets: [{
			label: 'Отлично',
			data: [ 2, 5, 6, 3, 6, 5, 6, 4, 3, 3, 8, 10, 20, 16, 17, 16, 15, 14, 10, 8, 10 ],
			backgroundColor: 'rgba(255, 99,  132, 0.3)',
			borderColor: 'rgba(255, 99,  132, 1)',
			hoverBackgroundColor: 'rgba(255, 99,  132, 0.8)',
			borderWidth: 1
		},
		{
			label: 'Хорошо',
			data: [ 4, 5, 6, 3, 6, 8, 5, 6, 4, 3, 8, 10, 6, 7, 6, 5, 6, 4, 2, 8, 10 ],
			backgroundColor: 'rgba(54,  162, 235, 0.3)',
			borderColor: 'rgba(54,  162, 235, 1)',
			hoverBackgroundColor: 'rgba(54,  162, 235, 0.8)',
			borderWidth: 1
		},
		{
			label: 'Норма',
			data: [ 5, 6, 3, 6, 5, 6, 4, 3, 8, 0, 0, 6, 7, 6, 5, 6, 4, 0, 8, 0, 1 ],
			backgroundColor: 'rgba(153, 102, 255, 0.3)',
			borderColor: 'rgba(153, 102, 255, 1)',
			hoverBackgroundColor: 'rgba(153, 102, 255, 0.8)',
			borderWidth: 1
		}],
	},
	options: {
		scales: {
			xAxes: [{
				stacked: true
			}],
			yAxes: [{
				stacked: true,
				ticks: {
          			beginAtZero: true
        		}
			}]
		}
	}
});
