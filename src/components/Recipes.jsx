// import React from 'react'
import { useState } from 'react';

const test = {
    a: 1,
    b: 2,
    c: 5
}

const test2 = {
    ...test,
    d: 1000,
    e: 99,
}

console.log(test);
console.log(test2);



function Recipes() {
    const [recipe, setRecipe] = useState([]);

    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => { setRecipe(test) }}>Test 1</button>
            <button onClick={() => { setRecipe(test2) }}>Test 2</button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes