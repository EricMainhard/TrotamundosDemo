import './write.css'
import React from 'react'

function Write(){
    return(
        <div className='write container'>
            <img src="/img/writeImage.jpg" alt="" />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}} />
                    <input type="text" className="writeInput" placeholder='Title' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" 
                        placeholder='Tell your story...'>

                    </textarea>
                    <button className='writeSubmit'>Publish</button>
                </div>
            </form>
        </div>
    )
}

export default Write;