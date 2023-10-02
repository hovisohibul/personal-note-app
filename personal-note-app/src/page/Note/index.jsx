import React, { useState } from 'react'
import { getInitialData } from '../../utils'

import Form from '../../component/Form'
import NoteActive from '../NoteActive'
import Archieve from '../Archieve'

function Note() {

    // state
    const [dataNote, setDataNote] = useState(getInitialData)
    const [filterNote, setFilterNote] = useState(getInitialData)
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])

    const handleSearch = (ev) => {
        setSearch(ev.target.value)
        if(search !== ''){
            const filter = dataNote.filter(item => Object.values(item).join('').toLowerCase().includes(search))
            setFilterData(filter)
        }else{
            setFilterData(dataNote)
        }
    }

    return (
        <>
            <div className='h-full w-full bg-[#4B527E]'>
                <div className='w-full p-2 flex justify-end'>
                    <input 
                        className='w-[20%] p-1 outline-none rounded-md bg-[#2E4374] text-white'
                        type="search" 
                        name="title" 
                        id="title"  
                        onChange={handleSearch}
                    />
                </div>
                <div className='flex justify-center w-full'>
                    <Form data={dataNote} setData={setDataNote} filter={filterNote} setFilter={setFilterNote}/>
                </div>
                <div className='mt-5 p-10'>
                    <div>
                        <h1 className='ml-3 text-2xl font-bold text-white'>Note Active</h1>
                        <NoteActive 
                            data={dataNote.filter(item => item.archived === false)} 
                            setData={setDataNote} 
                            setFilter={setFilterNote}
                            filter={filterNote}
                            input={filterData}
                        />
                    </div>
                    <div className='mt-10'>
                        <h1 className='ml-3 text-2xl font-bold text-white'>Archived</h1>
                        <Archieve 
                            data={dataNote.filter(item => item.archived === true)}
                            setData={setDataNote}
                            setFilter={setFilterNote}
                            filter={filterNote}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note