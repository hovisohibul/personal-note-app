import React, { useEffect, useState } from 'react'
import {BiReset} from 'react-icons/bi'

function Form({data, filter, setFilter, setData}) {

    const [input, setInput] = useState({
        title: '',
        body: '',
        bodyLength: 0
    })

    const handleInput = (ev) => {
        if(ev.target.name === 'title'){
            setInput({...input, title: ev.target.value})
        }else if(ev.target.name === 'body' && ev.target.value.length <= 50){
            setInput({...input, body: ev.target.value, bodyLength: ev.target.value.length})
        }
    }
    const handleReset = (ev) => {
        ev.preventDefault()
        setInput({
            ...input,
            body: '',
            bodyLength: 0
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        setData([
            ...data, 
            {
                id: +new Date(), 
                title: input.title, 
                body: input.body,
                createdAt: new Date(),
                archived: false
            }
        ])
        setFilter([
            ...filter,
            {
                id: +new Date(), 
                title: input.title, 
                body: input.body,
                createdAt: new Date(),
                archived: false
            }
        ])
        setInput({
            title: '',
            body: '',
            bodyLength: 0
        })
    }

    return (
        <>
            <div className='mt-6'>
                <h4 className='text-right text-white font-semibold'>{50 - input.bodyLength}</h4>
                <form className='w-full bg-[#071952] p-3 rounded-md' onSubmit={handleSubmit}>
                    <div className='mb-3 w-full rounded-md'>
                        <input 
                            type="text" 
                            name='title' 
                            id='title' 
                            value={input.title}
                            onChange={handleInput}
                            className='w-full rounded-md outline-none p-2 bg-[#2E4374] text-white'
                            placeholder={`Title Your Note's.............`}
                        />
                    </div>
                    <div className='mb-3 w-full'>
                        <textarea 
                            name="body" 
                            id="body" 
                            cols="60" 
                            rows="7" 
                            value={input.body}
                            onChange={handleInput}
                            className='rounded-md p-2 outline-none bg-[#2E4374] text-white'
                            placeholder={`Text Your Write.......`}
                        ></textarea>
                        <BiReset size={26} className='text-red-500 cursor-pointer' onClick={handleReset}/>
                    </div>
                    <button 
                        className='w-full bg-green-600 p-2 text-white font-semibold rounded-md active:scale-[.8] duration-[1.5]' 
                        type='submit'
                    >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form