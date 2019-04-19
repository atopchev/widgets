import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // content: props.tabs[0].content,
            // title: props.tabs[0].title,
            selected: 0
        };
        
    }

    updateSelected(index) {
        this.setState({ selected: index });
    }

    render() {
        return( 
            <div id="tabs">
                <ul>
                    { this.props.tabs.map((tab, idx) => {
                      return <header onClick={() => this.updateSelected(idx) }>
                            <h1>{ tab.title }</h1>
                            <article>{ tab.content }</article>
                      </header>
                    })
                    }      
                </ul>
            </div>
        )
    }
}


export default Tabs;
