const root = ReactDOM.createRoot(document.querySelector('#root'));
const className = 'box';

function tick() {
  const element = /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", {
    style: {
      backgroundColor: "red",
      color: 'white'
    }
  }, new Date().toLocaleTimeString()));
  root.render(element);
}

tick();
setInterval(tick, 1000);