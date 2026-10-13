const blocks = [
  { width: 50, height: 40 },
  { width: 120, height: 80 },
  { width: 85, height: 110 },
  { width: 200, height: 50 }
];

const root = document.getElementById("root");
blocks.forEach(data => {
    const block = document.createElement('div');
    block.style.width = data.width + 'px';
    block.style.height = data.height + 'px';
    block.classList.add('custom-block');
    root.appendChild(block);
});
