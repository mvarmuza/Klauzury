<script>
  let display = "0";
  let stored = null;
  let operator = null;
  let fresh = true;

  const ops = {
    "+": (a, b) => a + b,
    "−": (a, b) => a - b,
    "×": (a, b) => a * b,
    "÷": (a, b) => (b === 0 ? NaN : a / b),
  };

  function format(n) {
    return Number.isFinite(n) ? String(parseFloat(n.toPrecision(12))) : "Error";
  }

  function digit(d) {
    if (fresh || display === "0" || display === "Error") {
      display = d === "." ? "0." : d;
      fresh = false;
    } else if (!(d === "." && display.includes("."))) {
      display += d;
    }
  }

  function setOperator(op) {
    if (operator && !fresh) equals();
    stored = parseFloat(display);
    operator = op;
    fresh = true;
  }

  function equals() {
    if (operator === null || stored === null) return;
    display = format(ops[operator](stored, parseFloat(display)));
    stored = null;
    operator = null;
    fresh = true;
  }

  function clear() {
    display = "0";
    stored = null;
    operator = null;
    fresh = true;
  }

  const keys = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"];

  function press(k) {
    if (k in ops) setOperator(k);
    else if (k === "=") equals();
    else digit(k);
  }
</script>

<div class="mx-auto mt-10 w-72 rounded-lg bg-black p-4 shadow-lg">
  <div class="mb-4 truncate rounded bg-white p-3 text-right text-3xl font-mono">{display}</div>
  <div class="grid grid-cols-4 gap-2">
    <button on:click={clear} class="col-span-4 rounded bg-red-500 p-3 text-xl text-white hover:bg-red-400">C</button>
    {#each keys as k}
      <button
        on:click={() => press(k)}
        class="rounded p-3 text-xl {k in ops || k === '=' ? 'bg-emerald-400 text-black hover:bg-emerald-300' : 'bg-gray-700 text-white hover:bg-gray-600'}"
      >{k}</button>
    {/each}
  </div>
</div>
