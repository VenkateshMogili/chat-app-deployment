import React from 'react';
import { Route, Switch } from "react-router";
import "./App.css";
import Contacts from "./components/Contacts";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { FetchData } from './components/useFetch';
import { ApolloProvider,HttpLink, InMemoryCache } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost'

function App() {
	// const httpLink = new HttpLink({ uri: '/graphql' })
const client = new ApolloClient({ uri:'http://localhost:4000/graphql', cache: new InMemoryCache()})
	return (
		<div>
			<Header>
				<Switch>
					<Route path="/contacts" component={Contacts} />
					<ApolloProvider client={client} >
					<Route path="/users" component={FetchData} />
          </ApolloProvider>
					<Route path="/settings">
						<h1 className="ml-5 mt-3">Settings</h1>
					</Route>
					<Route path="/" exact component={Dashboard} />
					<Route path="*">
						<div className="ml-5 mt-3">
							<h1>404 Not Found!</h1>
						</div>
					</Route>
				</Switch>
			</Header>
		</div>
	);
}

export default App;
