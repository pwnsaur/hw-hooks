import { useState, useCallback } from 'react';
import Items from './Items';

const CallbackComponent = () => {
  const [number, setNumber] = useState(0);
  const [pink, setPink] = useState(false);

  // only update on number change in state
  const getItems = useCallback(
    i => [number + i, number + i + 1, number + i + 2],
    [number]
  );

  const theme = {
    backgroundColor: pink ? 'pink' : 'white',
  };

  return (
    <div style={(theme, { display: 'inline-block' })}>
      <div>useCallback</div>
      <input
        type='number'
        value={number}
        onChange={event => setNumber(+event.target.value)}
      />
      <button style={theme} onClick={() => setPink(prevColor => !prevColor)}>
        Change Color
      </button>
      <Items getItems={getItems} />
    </div>
  );
};

export default CallbackComponent;
