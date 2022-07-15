const root = ReactDOM.createRoot(document.querySelector('#root'));

function padaSaatDiKlik(msg) {
    alert(msg);
}
const element = <button onClick={padaSaatDiKlik.bind(this, 'cekk')}>Click Me</button>

root.render(element);