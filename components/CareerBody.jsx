import { Input, Stack, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { useState } from 'react'; 
import ModalCareer from './ModalCareer'; 

const CareerBody = () => {
    const { isOpen, onOpen, onClose } = useDisclosure() 

    const CareerData = [
        {
            JobTitle: "Community Activation Officer",
            JobSummary: "Community Activation",
            JobType: "Fulltime",
            JobLocation: "Jakarta"
        },
        {
            JobTitle: "DevOps",
            JobSummary: "Site Reliability Engineering",
            JobType: "Fulltime",
            JobLocation: "Bandung"
        },
        {
            JobTitle: "Software Engineer",
            JobSummary: "Backend Engineer",
            JobType: "Fulltime",
            JobLocation: "Pekanbaru"
        }
    ]

    const [search, setSearch] = useState("")

    const [selectedJob, setSelectedJob] = useState("")

    const onOpenDetailModal = (jobtitle) => {
        onOpen()
        setSelectedJob(jobtitle)
    }

    const onCloseDetailModal = () => {
        onClose()
        setSelectedJob("")
    }

    const filterSearch = CareerData.filter(
        (val)=>val.JobTitle.toLowerCase().includes(search.toLowerCase()) || 
        val.JobType.toLowerCase().includes(search.toLowerCase()) || 
        val.JobLocation.toLowerCase().includes(search.toLowerCase())
    ) 
    
    return(
        <div className="mx-12 md:mx-28 lg:mx-44 font-ubuntu text-[#3c0c3e]/80">
            <div className="text-5xl font-bold">Career</div>
            <div className="mt-4">
                <div>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearch className='text-slate-600' />}
                            />
                            <Input type='search' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Article'/>
                        </InputGroup>
                    </Stack>
                </div>
                <ModalCareer jobtitle={selectedJob} isOpen={isOpen} onClose={onCloseDetailModal}/>
                {filterSearch.length ? filterSearch.map((val, index) => {
                    return(
                        <>
                            <div key={index} className='mt-4 border-b-2 border-slate-500 pb-5 lg:hidden'>
                                <div className='text-xl font-bold'>{val.JobTitle}</div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <div className='text-sm'>{val.JobType}</div>
                                        <div className='flex justify-between'>
                                            <div className='flex space-x-2 items-center text-sm'>
                                                <div><MdLocationOn/></div>
                                                <div>{val.JobLocation}</div>
                                            </div>
                                        </div>
                                    </div>
                                <div className='hover:cursor-pointer hover:bg-white hover:border-2 hover:border-[#3c0c3e]/80 hover:text-[#3c0c3e]/80 duration-700 border-2 border-white py-2 px-4 bg-[#3c0c3e]/80 text-white rounded-md' onClick={()=>onOpenDetailModal(val.JobTitle)}>Detail</div>
                                </div>  
                            </div>
                            <div key={index} className='mt-4 border-b-2 border-slate-500 pb-5 hidden lg:block'>
                                <div className='flex justify-between'>
                                    <div className=''>
                                        <div className='text-xl font-bold'>{val.JobTitle}</div>
                                        <div className='flex space-x-4'>
                                            <div className='text-blue-400'>{val.JobSummary}</div>
                                            <div className='flex items-center text-slate-500 space-x-2'>
                                                <div><GoPrimitiveDot/></div>
                                                <div>Fulltime</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between w-[300px]'>
                                        <div className='flex space-x-2 items-center text-slate-500'>
                                            <div><MdLocationOn/></div>
                                            <div>{val.JobLocation}</div>
                                        </div>
                                        <div className='hover:cursor-pointer hover:bg-white hover:border-2 hover:border-[#3c0c3e]/80 hover:text-[#3c0c3e]/80 duration-700 border-2 border-white py-3 px-5 bg-[#3c0c3e]/80 text-white rounded-md' onClick={()=>onOpenDetailModal(val.JobTitle)}>Detail</div>
                                    </div>
                                </div>  
                            </div>

                        </>
                    )
                }) : <div className='flex justify-center mt-8'>No data found</div>}
            </div>
        </div>
    )
}

export default CareerBody