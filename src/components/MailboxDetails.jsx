import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const singleMailbox = props.mailboxes.find(mailbox => mailbox._id === Number(mailboxId));
    return (
        <>
            <h1>Mailbox {singleMailbox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {singleMailbox.name}</p>
            <p>Box Size: {singleMailbox.size}</p>
        </>
    )
}

export default MailboxDetails