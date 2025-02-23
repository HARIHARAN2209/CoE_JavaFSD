function saveExercise(exercise) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    exercises.push(exercise);
    localStorage.setItem('exercises', JSON.stringify(exercises));
}

// Display exercises
function displayExercises() {
    const exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.innerHTML = exercises.map((ex, index) => `
        <div class="exercise-item" data-index="${index}">
            <p>${ex.exerciseName} - ${ex.duration} mins (Rest: ${ex.restPeriod} secs)</p>
            <button onclick="deleteExercise(${index})">Delete</button>
        </div>
    `).join('');
}

// Delete exercise
function deleteExercise(index) {
    let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
    exercises.splice(index, 1);
    localStorage.setItem('exercises', JSON.stringify(exercises));
    displayExercises();
}

// Add exercise event listener
document.getElementById('add-exercise').addEventListener('click', function () {
    const exerciseName = document.getElementById('exercise-name').value;
    const duration = document.getElementById('duration').value;
    const restPeriod = document.getElementById('rest-period').value;
    if (exerciseName && duration && restPeriod) {
        const exercise = { exerciseName, duration, restPeriod };
        saveExercise(exercise);
        displayExercises();
    } else {
        alert('Please fill in all fields.');
    }
});

// Initialize display
document.addEventListener('DOMContentLoaded', displayExercises);