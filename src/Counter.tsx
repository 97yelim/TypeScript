import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0); // useState(0); 만 사용해도 괜찮음. 알아서 유추하기 때문. Generics 는 null 일 수도 있고 아닐 수도 있을 때 사용.
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return (
        <div>
            <h1>
                {count}
            </h1>
            <div>
                <button onClick={onIncrease}> + 1</button>
                <button onClick={onDecrease}> - 1</button>
            </div>
        </div>
    );
};

export default Counter;