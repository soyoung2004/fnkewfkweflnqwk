
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import FriendsPage from './pages/FriendsPage';
import CreateRoomPage from './pages/CreateRoomPage';
import RoomListPage from './pages/RoomListPage';

function App() {
  return (
      <Router>
            <Switch>
                    <Route path="/" exact component={CalendarPage} />
                            <Route path="/friends" component={FriendsPage} />
                                    <Route path="/create-room" component={CreateRoomPage} />
                                            <Route path="/room-list" component={RoomListPage} />
                                                  </Switch>
                                                      </Router>
                                                        );
                                                        }

                                                        export default App;
