import React from 'react';

class LifecycleComp extends React.Component {

    componentDidMount() {
        alert('component is visible');
    }

    componentWillUnmount() {
        alert('component is hidden')
    }

    render() {
        return(
            <div>
                <h1>Lifecycle component is visible</h1>     
            </div>
        )
    }
}

export default LifecycleComp;