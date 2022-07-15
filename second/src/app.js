const root = ReactDOM.createRoot(document.querySelector('#root'));

function tick(){
    const element = (
        <div>
            <h1>Jam Sekarang</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    )
    // ReactDOM.render(element, root);
    root.render(element);
}
tick()
setInterval(tick, 1000);
