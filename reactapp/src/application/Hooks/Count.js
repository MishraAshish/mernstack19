import React from "react";

function Count({ text, count}) { //destructuring of props
    console.log(`rendering count  ${text}`);
    return <div>{text} - {count}</div>
}

//export default Count;
export default React.memo(Count);