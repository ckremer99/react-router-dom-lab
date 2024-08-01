import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((mailbox) => {
                    return <li key={mailbox._id}>
                        <Link to={`/mailbox/${mailbox._id}`}>
                            Mailbox {mailbox._id}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default MailboxList