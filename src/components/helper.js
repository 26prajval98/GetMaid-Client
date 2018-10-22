import React, { Component } from 'react'
import { connect } from 'react-redux'
import { helper } from '../actions'

function mapStateToProps(state) {
    return {
        numbers : state.helper.numbers
    }
}

class helper_index extends Component {

    componentDidMount() {
        window.onkeydown = (e) => {
            if (e.key === "Enter") {
                helper()
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Hit enter to generate new numbers</h1>
                <menu>
                    {
                        this.props.numbers.map((value, i) => {
                            return (
                                <li key={i}>{value}</li>
                            )
                        })
                    }
                </menu>
            </div>
        )
    }
}

export default connect(mapStateToProps)(helper_index)
