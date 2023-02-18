import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input
  } from '@chakra-ui/react'

const ModalCareer = ({jobtitle, isOpen, onClose}) => {
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader><div className='text-[#3c0c3e]/80'>Job Application</div></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div className='space-y-4'>
                    <div className='font-bold text-lg'>{jobtitle} Position</div>
                    <div>Full Name</div>
                    <Input type='text' name='fullname'/>
                    <div>Email</div>
                    <Input type='text'/>
                    <div>Phone Number</div>
                    <Input type='text'/>
                    <div>Country of Origin</div>
                    <Input type='text'/>
                    <div>URL(portfolio, cv, etc)</div>
                    <Input type='text'/>
                </div> 
            </ModalBody>

            <ModalFooter>
                <button className='bg-[#3c0c3e]/80 text-white py-2 px-4 rounded-md'>
                Submit
                </button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalCareer;