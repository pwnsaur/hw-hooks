import { useState, useMemo } from 'react';

function somethingSlow(num) {
  console.time('slow');
  let result;
  for (let i = 0; i < 100000000; i++) {
    result = num + 1;
  }
  console.timeEnd('slow');
  return result;
}

const MemoComponent = () => {
  const [number, setNumber] = useState(0);
  const [pink, setPink] = useState(false);

  // don't compute the slow function on every rerender
  const increaseNumber = useMemo(() => somethingSlow(number), [number]);

  const theme = {
    backgroundColor: pink ? 'pink' : 'white',
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <div>useMemo</div>
      <input
        type='number'
        value={number}
        onChange={event => setNumber(+event.target.value)}
      />
      <button style={theme} onClick={() => setPink(prevColor => !prevColor)}>
        Change Color
      </button>
      <div>{increaseNumber}</div>
    </div>
  );
};

export default MemoComponent;
