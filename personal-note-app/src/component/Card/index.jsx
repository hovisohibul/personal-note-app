import React from 'react'
import {BsTrashFill} from 'react-icons/bs'
import {BiArchiveIn, BiArchiveOut} from 'react-icons/bi'
import { showFormatDate } from '../../utils'

const DeleteButton = ({idButton ,handleDelete}) => {
    return <BsTrashFill size={26} className='text-red-600 cursor-pointer' onClick={() => handleDelete(idButton)}/>
}

const ArchieveButton = ({idButton, handleData}) => {
    return <BiArchiveIn size={26} className='text-blue-600 cursor-pointer' onClick={() => handleData(idButton)}/>
}

const MoveButton = ({idButton, handleData}) => {
    return <BiArchiveOut size={26} className='text-blue-600 cursor-pointer' onClick={() => handleData(idButton)}/>
}

function Card({data, handleDelete, handleData}) {

    const {id, title, body, createdAt, archived} = data

    return (
        <>
            <div className='w-[40%] border-2 border-black p-3 bg-[#071952] rounded-md flex justify-between items-center gap-5'>
                <div className='flex flex-col'>
                    <div>
                        <h2 className='font-bold text-white text-xl'>{title}</h2>
                    </div>
                    <div className='mt-4'>
                        <p className='text-[#9ea4d4]'>{showFormatDate(createdAt)}</p>
                        <p className='font-semibold text-white'>{body}</p>
                    </div>
                </div>
                <div className='flex justify-end items-end gap-2 h-full'>
                    <DeleteButton idButton={id} handleDelete={handleDelete}/>
                    {archived === false ? <ArchieveButton idButton={id} handleData={handleData}/> : <MoveButton idButton={id} handleData={handleData}/>}
                </div>
            </div>
        </>
    )
}

export default Card