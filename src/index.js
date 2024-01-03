import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(), // 다양한 GraphQL 쿼리의 결과를 저장하고, 동일한 쿼리가 다시 실행될 때 서버에 다시 요청하지 않고 캐시된 데이터를 사용하게 함
});
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);
