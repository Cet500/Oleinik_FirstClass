/* ------------------------------- admin-statictic ------------------------------- */

/* -------------------- charts -------------------- */

var ctx1 = document.getElementById('marksPieChart').getContext('2d');

var marksPieChart = new Chart(ctx1, {
	type: 'pie',
	data: {
		labels: [
			'Отлично',
			'Хорошо',
			'Норма',
			'Плохо'
		],
		datasets: [{
			data: [ 125, 214, 24, 5 ],
			backgroundColor: [
				'rgba(255, 99,  132, 0.3)',
				'rgba(54,  162, 235, 0.3)',
				'rgba(153, 102, 255, 0.3)',
				'rgba(255, 159, 64,  0.3)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			hoverBackgroundColor: [
				'rgba(255, 99,  132, 0.8)',
				'rgba(54,  162, 235, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(255, 159, 64,  0.8)'
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

var ctx3 = document.getElementById('visitsBarChart').getContext('2d');

var visitsPieChart = new Chart(ctx3, {
	type: 'bar',
	labels: [ 20, 20, 20, 20 ],
	data: {
		datasets: [{
			label: 'Посещения',
			data: [ 5, 6, 3, 6 ],
			backgroundColor: 'rgba(255, 99,  132, 0.3)',
			borderColor: 'rgba(255, 99,  132, 1)',
			borderWidth: 1
		}],
	},
});