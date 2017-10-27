import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <style jsx>{``}</style> */}
                <p>
                    This is template
                </p>
            </div>
        );
    }
}

App.propTypes = {
    someValue: PropTypes.string,
    // someFunc: PropTypes.func
}

/* when use redux */
// function mapToStateProps(state) {
//     return state;
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         trigger: () => {
//             dispatch(someFunc())
//         }
//     }
// }

// export default connect(mapToStateProps, mapDispatchToProps)(App);
