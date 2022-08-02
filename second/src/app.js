const root = ReactDOM.createRoot(document.querySelector('#root'));

function App() {
    const [diklik, setDiklik] = React.useState(false);
    const [count, setCount] = React.useState(1);

    

    React.useEffect(() => {
        console.log(document.getElementById('judul'));
    }, [count]);

    React.useEffect(() => {
        console.log('useEffect');
    }, []);
    return (
    <>
        <h1 id="judul">Hello World</h1>
        <button onClick={() => setDiklik(true)}>Klik {diklik}</button>
        <button onClick={() => setCount(count + 1)}>Tambah{count}</button>
        <span>Nilai Saat ini : {count}</span>
    </>
    )
}


root.render(<App />);
