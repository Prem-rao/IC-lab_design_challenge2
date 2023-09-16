import React from 'react'
import {useState} from 'react'
const Button = () => {
    const [info, setInfo] = useState(''); 
    const handleClick1=()=>{
        setInfo("MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs.")
    }
    const handleClick2=()=>{
        setInfo("Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to: Write handlers for requests with different HTTP verbs at different URL paths (routes).")
    }
    const handleClick3=()=>{
        setInfo("The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.")
    }
    const handleClick4=()=>{
        setInfo("In a nutshell, Node. js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests. Single-threaded non-blocking I/O makes it an excellent choice for both real-time and data streaming applications, too.")
    }
  return (
    <>
        <div className='text-center mt-3'>
            <h1>Button</h1>
        </div>

        <div className='container '>
        <div className='row'>
            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-header'>
                        <img src="./assets/New folder/1.png" alt="" className='card-img-top'/>
                    </div>
                    <div className='card-body'>
                        <button className='btn form-control btn-outline-primary' onClick={handleClick1}>Info</button>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-header'>
                        <img src="./assets/New folder/2.png" alt="" className='card-img-top'/>
                    </div>
                    <div className='card-body'>
                        <button className='btn form-control btn-outline-primary' onClick={handleClick2}>Info</button>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-header'>
                        <img src="./assets/New folder/3.png" alt="" className='card-img-top'/>
                    </div>
                    <div className='card-body'>
                        <button className='btn form-control btn-outline-primary' onClick={handleClick3}>Info</button>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>
                <div className='card'>
                    <div className='card-header'>
                        <img src="./assets/New folder/4.png" alt="" className='card-img-top'/>
                    </div>
                    <div className='card-body'>
                        <button className='btn form-control btn-outline-primary' onClick={handleClick4}>Info</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='card'>
            <div className='card-body' >
              <p>{info}</p>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default Button
