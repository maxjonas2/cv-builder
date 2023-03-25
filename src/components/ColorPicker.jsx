export default function ColorPicker() {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#3c6ac0",
  ];

  function setTheme(color) {
    document.documentElement.style.setProperty("--color-primary", color);
  }

  return (
    <div className='color-picker-container no-print'>
      {colors.map((color) => {
        return (
          <button
            onClick={() => setTheme(color)}
            className='color-box'
            style={{ backgroundColor: color }}
            key={color}
          ></button>
        );
      })}
    </div>
  );
}
