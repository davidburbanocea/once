const board = document.getElementById("board");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let cells = Array(9).fill("");

function checkWinner() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let combo of wins) {
    const [a,b,c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      statusText.textContent = `Ganó ${cells[a]}`;
      return true;
    }
  }
  return false;
}

function handleClick(index) {
  if (cells[index] || checkWinner()) return;

  cells[index] = currentPlayer;
  render();

  if (!checkWinner()) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Turno de ${currentPlayer}`;
  }
}

function render() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.textContent = cell;
    div.onclick = () => handleClick(index);
    board.appendChild(div);
  });
}

render();