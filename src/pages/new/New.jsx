import React from 'react'
import "./new.scss"
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export const New = ({inputs, title}) => {
  // const [file, setFile] = useState("");
  // console.log(file)

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://picsum.photos/200/300?grayscale" alt="user image" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadIcon className='icon'/></label>
                {/* <input type="file" onChange={e=>setFile(e.target.files[0])} id="file" style={{display:"none"}}/> */}
                <input type="file"  id="file" style={{display:"none"}}/>
              </div>
              {inputs.map((input) =>(
              <div className="formInput" key={input.id}>
                <label htmlFor="">{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
               ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}