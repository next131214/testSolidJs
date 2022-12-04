import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount,] = createSignal(0);
  const oldCount = getLocalStorage();
  setCount(oldCount)
  function setLocalStorage(val: number) {
    localStorage.setItem('countKey', String(val))
  }
  function getLocalStorage(): number {
    const val = Number(localStorage.getItem('countKey'))
    if (val) {
      return val
    }
    return 0
  }
  function setCustomCount(){
    setCount(count() + 1)
    setLocalStorage(count())
  }
  return (
    <button class="increment" onClick={setCustomCount}>
      Push: {count()}
    </button>
  );
}
