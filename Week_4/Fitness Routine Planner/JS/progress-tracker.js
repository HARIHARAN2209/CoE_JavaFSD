document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('progressChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3'],
            datasets: [{
                label: 'Workouts Completed',
                data: [3, 5, 7],
                borderColor: '#333',
                fill: false,
            }]
        }
    });
});