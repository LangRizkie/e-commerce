import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, UseDisclosureProps } from '@chakra-ui/react'

const Search: React.FC<UseDisclosureProps> = ({ isOpen = false, onClose = () => {} }) =>
  <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Search</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        as
      </ModalBody>
    </ModalContent>
  </Modal>

export default Search
