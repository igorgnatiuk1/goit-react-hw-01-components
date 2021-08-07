import React from 'react';
import Profile from "./components/Profile/Profile";
import Statistic from './components/Statistics/Statistic'
import Profiles from './components/Profile/Profiles.json'
import Statistics from './components/Statistics/Statistics.json'
import Friend from './components/Friends/Friends'
import Friends from './components/Friends/Friends.json'
import Transaction from './components/Transaction/Transaction'
import Transactions from './components/Transaction/Transaction.json'




const App = () => (
    <>
      < Profile
          name = {Profiles.name}
          tag = {Profiles.tag}
          location = {Profiles.location}
          avatar = {Profiles.avatar}
          followers = {Profiles.stats.followers}
          views = {Profiles.stats.views}
          likes = {Profiles.stats.likes}
      />
      <Statistic
          title="Upload stats"
          stats={Statistics}/>


      < Friend
          friend={Friends}
      />
      <Transaction
          items={Transactions}/>

    </>
)
export default App

