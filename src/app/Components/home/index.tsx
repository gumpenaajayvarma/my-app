import React from 'react'
import { testSagaAction } from '../../actions/test.action'
import { connect } from 'react-redux'

interface IDispatchProps {
    testSagaAction: Function
}

interface IStateProps {
    state: any
}

type Props = IDispatchProps & IStateProps

function Home(props: Props) {
    const btn = React.useCallback(() => {
        props.testSagaAction('home', 'test-action')
    }, [props])
    return (
        <div>
            <h2>Home</h2>
            <button onClick={btn} id='btn-test-saga'>Dispatch Action</button>
        </div>
    )
}

const mapStateToProps = (state: IStateProps, props: Props) => {
    console.log('state: ', state, 'props: ', props)
    return state
}

const mapDispatchToProps = {
    testSagaAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
