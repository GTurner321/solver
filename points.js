let points = 0;

function updatePoints(value) {
    points += value;
    document.getElementById('score').textContent = `Score: ${points}`;
}
