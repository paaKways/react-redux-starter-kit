/* 
--------------------------
 React Redux Starter Kit
--------------------------
 Samuel Kwasi Boateng
 December 2017
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render () {
        return(
            <div style={styles.main}>
                <p style={styles.textStyle}>This is a starter kit. Edit this file to get started.</p>
            </div>
        )
    }
}

const styles = {
    main: {
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
    },
    textStyle: {
        fontFamily: 'Arial'
    }
}
 
ReactDOM.render(<App/>, document.getElementById('app'))
