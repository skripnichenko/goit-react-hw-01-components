import Profile from "./Profile/Profile";
import user from '../utils/user.json';
import data from '../utils/data.json';
import friends from '../utils/friends.json';
import transactions from '../utils/transactions.json';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { useState } from "react";
import styles from './App.module.css';

const tasks = ['Profile', 'Statistics', 'FriendList', 'TransactionHistory'];

export const App = () => {
  const [activeTask, setActiveTask] = useState(tasks[0]);
  const renderTask = () => {
    switch (activeTask) {
      case 'Profile':
        return <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      case 'Statistics':
        return <>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </>
      case 'FriendList':
        return <FriendList friends={friends} />
      case 'TransactionHistory':
        return <TransactionHistory items={transactions} />
      default:
        return <></>
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.tab_wrapper}>
        {tasks.map((el, ind) => {
          return <span className={styles.tab} onClick={() => setActiveTask(el)} key={ind}>
            {el}
          </span>
        })}
      </div>
      {renderTask()}
    </div>
  );
};
