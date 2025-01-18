let phase = 1;

// Drag-and-drop functionality
document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.dataset.value);
    });
});

document.querySelectorAll('.droppable').forEach(item => {
    item.addEventListener('dragover', event => {
        event.preventDefault();
    });

    item.addEventListener('drop', event => {
        const answer = event.target.dataset.answer;
        const value = event.dataTransfer.getData('text/plain');

        if (value === answer) {
            event.target.textContent = value;
            event.target.classList.add('correct');
            updatePoints(5);

            // Automatically fill matching boxes
            const siblings = document.querySelectorAll(`[data-answer="${answer}"]`);
            siblings.forEach(sibling => {
                sibling.textContent = value;
                sibling.classList.add('correct');
            });

            checkCompletion();
        } else {
            document.getElementById('feedback').textContent = 'Try again!';
            updatePoints(-2);
        }
    });
});

// Phase progression
function checkCompletion() {
    const filled = document.querySelectorAll('.correct').length;
    if (phase === 1 && filled === 4) {
        document.querySelector('h1').textContent = '2x = 8';
        setupPhase2();
    } else if (phase === 2 && filled === 8) {
        document.querySelector('h1').textContent = 'x = 4';
        document.getElementById('feedback').textContent = 'Congratulations! You have solved this equation.';
        updatePoints(10);
    }
}

function setupPhase2() {
    const container = document.querySelector('.droppable-area');
    container.innerHTML = `
        <div class="droppable-row">
            <div class="droppable" data-answer="÷"></div>
            <div class="droppable" data-answer="2"></div>
        </div>
        <p class="equals">=</p>
        <div class="droppable-row">
            <div class="droppable" data-answer="÷"></div>
            <div class="droppable" data-answer="2"></div>
        </div>
    `;
    phase = 2;
}
