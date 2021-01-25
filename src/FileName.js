import { FaFolder, FaFile } from "react-icons/fa";

const FileName = ({ name, type }) => {
    
    return (
        <div>
            <span className="icons">
              {type==='folder'? <FaFolder color=' #508FCA'/>:<FaFile color=' #508FCA'/>}  
           </span>
           <span className="file-name">
            {name}
                </span>        
        </div>
       
    )
}

export default FileName