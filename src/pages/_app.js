import React from 'react'
import '../styles/index.css'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../reducers'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: [] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, reducers);


const middleware = applyMiddleware(reduxThunk);

const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

export const MyApp = ({ Component, pageProps, data }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

MyApp.getStaticProps = async (props) => {

  return { data: '' }
}


export default MyApp
