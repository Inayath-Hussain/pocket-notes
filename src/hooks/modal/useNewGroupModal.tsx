import { useContext } from "react";
import { createPortal } from "react-dom";
import { newGroupModalContext } from "@/context/newGroupModal";
import NewGroup from "@/components/modal/contents/newGroup";
import ModalBase from "@/components/modal/modalBase";

/**
 * hook to handle display status of new group form modal.
 */
const useNewGroupModal = () => {

    // state variable to manage modal display status
    const { showModal, setShowModal } = useContext(newGroupModalContext);


    const showNewGroupModal = () => {
        setShowModal(true)
    }

    const hideNewGroupFormModal = () => {
        setShowModal(false)
    }

    /**
     * this function should be called inside render lifecycle of component.
     */
    const NewGroupFormPortal = (): React.ReactPortal | null => {

        const modalDiv = document.getElementById("modal");

        if (modalDiv === null) throw Error("element with id 'modal' not found")

        if (showModal) return createPortal(<ModalBase close={hideNewGroupFormModal}> <NewGroup /> </ModalBase>, modalDiv)

        return null
    }

    return {
        showNewGroupModal,
        hideNewGroupFormModal,
        NewGroupFormPortal
    }
}

export default useNewGroupModal;