import React, { useState } from 'react'
import Card from '../../component/Card'

function NoteActive({data, filter, input, setData, setFilter}) {

    const handleDelete = (id) => {
        const deleteData = data.filter(item => item.id !== id)
        setData(deleteData)
    }

    const handleData = (noteId) => {
        const dataNote = filter.map(item => {
            if(item.id === noteId && noteId !== undefined){
                return item
            }else{
                return null
            }
        })
        setData([
            ...data.filter(item => item.id !== noteId),
            {
                ...dataNote, 
                archived: !dataNote.archived
            }
        ])
        setFilter([
            ...filter.filter(item => item.id !== noteId),
            {
                ...dataNote, 
                archived: !dataNote.archived
            }
        ])
    }

    return (
        <>
            <div className='w-full flex flex-wrap justify-center mt-10 gap-3'>
                {input.length > 0 ? input.map(item => {
                    return (
                        <Card key={item.id} data={item} handleDelete={() => handleDelete(item.id)} handleData={() => handleData(item.id)}/>
                    )
                }) : data.map(item => {
                    return (
                        <Card key={item.id} data={item} handleDelete={() => handleDelete(item.id)} handleData={() => handleData(item.id)}/>
                    )
                })}
            </div>
        </>
    )
}

export default NoteActive