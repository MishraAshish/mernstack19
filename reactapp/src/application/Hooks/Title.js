import React from "react";

function Title() {
    console.log(`rendering title`);
    return <h2>Title - Understanding Performance Hooks</h2>
}

//export default Title;
export default React.memo(Title);