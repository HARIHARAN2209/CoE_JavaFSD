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

// Initialize display
document.addEventListener('DOMContentLoaded', displayExercises);