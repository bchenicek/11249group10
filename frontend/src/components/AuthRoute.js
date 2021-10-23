import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({children, authenticated, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={
                ({location}) => authenticated ? (children) : (
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    )
}

const isUserAuthenticated = ({session}) => ({
    authenticated: session.authenticated
})

export default connect(isUserAuthenticated)(AuthRoute);