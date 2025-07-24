function Counter({ count, increment, decrement, resetCount }) {
  console.log("................");
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
