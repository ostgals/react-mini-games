import React from 'react';

import UserInfo from '../components/UserInfo'
import TopBoard from '../components/TopBoard'

const Dashboard = () => (
  <section className="route-content dashboard">
    <UserInfo />
    <TopBoard />
  </section>
)

export default Dashboard