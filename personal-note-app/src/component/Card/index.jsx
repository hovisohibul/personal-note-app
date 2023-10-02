import React from 'react'
import {BsTrashFill} from 'react-icons/bs'
import {BiArchiveIn, BiArchiveOut} from 'react-icons/bi'
import { showFormatDate } from '../../utils'

function Card({data, handleDelete, handleData}) {

    const {id, title, body, createdAt, archived} = data

    const DeleteButton = () => {
        return <BsTrashFill size={26} className='text-red-600 cursor-pointer' onClick={() => handleDelete(id)}/>
    }

    const ArchieveButton = () => {
        return <BiArchiveIn size={26} className='text-blue-600 cursor-pointer' onClick={() => handleData(id)}/>
    }

    const MoveButton = () => {
        return <BiArchiveOut size={26} className='text-blue-600' onClick={() => handleData(id)}/>
    }

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
                    <DeleteButton/>
                    {archived === false ? <ArchieveButton/> : <MoveButton/>}
                </div>
            </div>
        </>
    )
}

export default Card