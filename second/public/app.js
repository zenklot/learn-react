const root = ReactDOM.createRoot(document.querySelector('#root'));

function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString())); // ReactDOM.render(element, root);

  root.render(element);
}

tick();
setInterval(tick, 1000);