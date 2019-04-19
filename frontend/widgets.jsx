import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs.jsx';

function Root() {
    return (
        <div>
            <Clock />
            <Tabs tabs={[
                { title: "title", content: "content" },
                { title: "another title", content: "MOAR content" },
                { title: "anotha one", content: "DJ KHALED" }
                ]} />
        </div>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    const groot = document.getElementById("groot");
    ReactDOM.render(<Root />, groot);
})

