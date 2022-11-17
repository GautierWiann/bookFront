import React from 'react';
import './App.css';
import ScreenHome from './screens/screenHome';
import moviesScreen from './screens/moviesScreen';
import Bookmarks from './screens/BookmarksScreen';
import HomeDailyScreen from './screens/HomeDaily';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookmarks from './reducers/DailyNews/bookmarksDaily';
import user from './reducers/DailyNews/userDaily';
import hiddenArticles from './reducers/DailyNews/hiddenArticlesDaily';

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ bookmarks, user, hiddenArticles });
const persistConfig = { key: 'morningnews', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App() {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <Router>
        <Switch>
          <Route component={ScreenHome} path="/" exact />
          <Route component={moviesScreen} path="/my-Moviz" exact />
          <Route component={Bookmarks} path="/bookmarks" exact />
          <Route component={HomeDailyScreen} path="/DailyNews" exact />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
