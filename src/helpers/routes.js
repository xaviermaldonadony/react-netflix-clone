import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
	// if we have a user and they go to sign in or sign up redirect them
	// example, exact path='/something',
	// will be passed as props
	return (
		<Route
			{...rest}
			render={() => {
				if (!user) {
					return children;
				}

				if (user) {
					return <Redirect to={{ pathname: loggedInPath }} />;
				}
				return null;
			}}
		/>
	);
}

export function ProtectedRoute({ user, children, ...rest }) {
	// if user logged in return the page (children)
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (user) {
					return children;
				}

				if (!user) {
					return (
						<Redirect to={{ pathname: 'signin', state: { from: location } }} />
					);
				}

				return null;
			}}
		/>
	);
}
