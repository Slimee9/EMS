import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utilis/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // localStorage.clear()
  useEffect(() => {
    setLocalStorage()
    // getLocalStorage()
  },[])

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(() => {
  
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  
    
  
  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      // console.log('This is admin')
      setUser('admin');
      // console.log(user)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password )
      // console.log("This is User");
      if(employee){
        setUser('employee');
        // console.log(user)
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))

      }
    }else{
      alert("Invalid Credentials")
    }

  }
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    { user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null  ) }
    </>
  )
}

export default App