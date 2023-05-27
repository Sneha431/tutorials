import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import { addUser,deleteUser,updateUser } from './features/User';
import { useState } from 'react';

function App() {
  const userlist = useSelector((state)=>state.users.value)
  const dispatch = useDispatch();
  const [name,setname]=useState("");
  const [username,setusername]=useState("");
  const [newusername,setnewusername]=useState("");
  return (
    <div className="App">
    <div className="addUser">
      <input type="text"  placeholder="Name..." value={name} onChange={(e)=>setname(e.target.value)}/>
      <input type="text"  placeholder="Username..." value={username} onChange={(e)=>setusername(e.target.value)}/>
      <button onClick={()=>dispatch(addUser({id:userlist[userlist.length-1].id+1,name,username}))}>AddUser</button>
    </div>
    <div className="displayUser">
      {userlist.map((user)=>{
        return <div key={user.id}><h1>{user.id}--{user.name}</h1><h2>{user.username}</h2>
        <input type="text"  placeholder="NewUsername.."  onChange={(e)=>setnewusername(e.target.value)}/>
        <button onClick={()=>dispatch(updateUser({id:user.id,username:newusername}))}>Update Username</button ><button onClick={()=>dispatch(deleteUser(user))}>Delete Username</button></div>
      })}
    </div>
    </div>
  );
}

export default App;
