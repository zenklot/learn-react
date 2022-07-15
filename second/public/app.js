const root = ReactDOM.createRoot(document.querySelector('#root'));

function padaSaatDiKlik(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: padaSaatDiKlik.bind(this, 'cekk')
}, "Click Me");
root.render(element);