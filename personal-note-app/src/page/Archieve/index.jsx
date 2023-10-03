import React from 'react'
import Card from '../../component/Card'

function Archieve({data, filter, setData, setFilter}) {

    const handleDelete = (id) => {
        const deleteData = filter.filter(item => item.id !== id)
        setData(deleteData)
    }

    const handleData = (noteId) => {
        const dataNote = filter.find(item => item.id === noteId)
        setData([
            ...filter.filter(item => item.id !== noteId),
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
                {data.map((item, index) => {
                    return (
                        <Card key={index} data={item} handleDelete={() => handleDelete(item.id)} handleData={() => handleData(item.id)}/>
                    )
                })}
            </div>
        </>
    )
}

export default Archieve