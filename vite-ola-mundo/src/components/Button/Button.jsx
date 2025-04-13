import { useState } from 'react'

function Button() {
    const [count, setCont] = useState(0);
    return(
        <button onClick={() => setCont((count) => count + 1)} className="btn-click">Contando {count}!</button>
    );
}
export default Button;
