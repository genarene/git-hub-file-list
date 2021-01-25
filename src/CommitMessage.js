import PropTypes from 'prop-types'

const CommitMessage = ({message}) => {
    return (
        <>
            <span className="commit-message">{ message.message}</span>
        </>
    )
}

CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
}

export default CommitMessage;