const root = ReactDOM.createRoot(document.querySelector('#root'));
const className = 'box';

function tick(){
    const element = (
        <div className={className}>
            <h1>Jam Sekarang</h1>
            <h2 style={{ backgroundColor: "red", color: 'white' }}>{new Date().toLocaleTimeString()}</h2>
        </div>
    )
    root.render(element);
}
tick()
setInterval(tick, 1000);
