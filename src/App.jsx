import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import { useState } from 'react'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  
  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1; 
    setMailboxes([...mailboxes, newMailbox])
    console.log('working')
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>
        <Route path="/mailbox/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
    </>
  )
};

export default App;