import React from "react";

function App({tittle, tagline}){
    return(
        <div className="app">
            <h1 className='pt-4 pl-6 text-3xl font-sf-compact-text'>{tittle}</h1> 
            <span className='pl-6 text-gray-700' >{tagline}</span>
        </div>
    );
}

export default App;