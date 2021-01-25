import CommitMessage from './CommitMessage'
import FileListItem from './FileListItem'
import FileName from './FileName'
import Time from './Time'
import PropTypes from 'prop-types'

// check if file-list needs children prop
const FileList = ({files}) => {
    return (
        <>
            <div className="file-list">
                {files.map((file, index) => {
                    return (<FileListItem key={file.id}>
                        <FileName name={file.name} type={file.type}/>
                        <CommitMessage message={file.latestCommit} />
                        <Time time={file.update_at }/>
                        </FileListItem>)
                })}
            </div>
        
            </>
    )
}

FileList.propTypes = {
    files:PropTypes.array
}

export default FileList;