import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <div className="inputControl">
            <input type="text" placeholder='Your Full Name' />
            <input type="email" placeholder='Enter you Email Address' />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='what is your Idea ablout'></textarea>
            <button>Send message</button>
        </form>
    </div>
  )
}

export default Form