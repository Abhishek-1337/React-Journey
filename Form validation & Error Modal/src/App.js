import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [userLists, setUserLists]=useState([]);
  const userListHandler = (listObj) => {
     setUserLists((prevUserList)=>{
       return [...prevUserList,listObj];
     });
  }
  return (
      <div>
        <AddUser onAddUser={userListHandler}/>
       <UsersList users={userLists}/>
      </div>
  );
}

export default App;
