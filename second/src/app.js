const root = ReactDOM.createRoot(document.querySelector('#root'));

function App() {
    // Manual
    // const state = React.useState(0)
    // const count = state[0]
    // const setCount = state[1]

    // Automatic
    const [count, setCount] = React.useState(0)

    return (
        <>
            <button onClick={
                () => {
                    setCount(count - 1)
                }
            }>-</button>
            <span>{count}</span>
            <button onClick={
              function (){
                setCount(count + 1)
              }  
            }>+</button>
        </>
    )
}

root.render(<App />);