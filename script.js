// Game logic for drag-and-drop
const draggables = document.querySelectorAll('.draggable');
const droppables = document.querySelectorAll('.droppable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.dataset.value);
    });
});

droppables.forEach(droppable => {
    droppable.addEventListener('dragover', (e) => e.preventDefault());

    droppable.addEventListener('drop', (e) => {
        const value = e.dataTransfer.getData('text');
        const correctAnswer = droppable.dataset.answer;

        if (value === correctAnswer) {
            droppable.textContent = value;
            updatePoints(10); // Call points update function
        } else {
            updatePoints(-5); // Deduct points for incorrect attempt
        }
    });
});

