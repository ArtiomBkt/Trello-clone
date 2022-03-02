import React, { useEffect, useRef, useState } from 'react'
import { TaskQuickEditorControls, TaskQuickEditorControlBtn, EditorControlBtnIcon, EditorControlText } from './QuickEdit.styled'
import { PropTypes } from '../../../types/prop-types'
import useOutsideAlerter from '../../../hooks/useOutsideAlerter'
import BadgesModal from './badges/BadgesModal'
import LabelsModal from './badges/labels/LabelsModal'
import DatesModal from './badges/dates/DatesModal'
import MemberModal from './badges/members/MemberModal'
import CoverModal from './cover-color/CoverModal'

// const useModalToggler = (elementName: string, cb: () => void) => {
//   const [isOpen, toggle] = useState(false)
//   const elementNameRef = useRef(elementName)

//   useEffect(() => {
//     const prevElem = elementNameRef.current
//     if (isOpen && prevElem === elementName) {
//       toggle(false)
//     }
//     elementNameRef.current = elementName
//   }, [cb, elementName, isOpen])

//   return [isOpen, toggle] as const
// }

// TODO: figure out hook for modal closing when same button is clicked

const QuickEditControls = ({ handleTaskLabelChange, handleTaskMemberToggle, handleTaskStyleChange, handleTaskArchive, onLabelsUpdate, task }: PropTypes.QuickEditorProps) => {
  const [quickControls] = useState([
    { title: 'Edit labels', type: 'labels', icon: `'\\e93f'` },
    { title: 'Change members', type: 'members', icon: `'\\e946'` },
    { title: 'Change Cover', type: 'cover', icon: `'\\e914'` },
    { title: 'Edit dates', type: 'dates', icon: `'\\e91b'` }
  ])
  const [badgeModal, setBadgeModal] = useState<string>('')
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 })
  const modalWrapperRef = useRef<HTMLDivElement>(null)
  const outsideAlerter = useOutsideAlerter(modalWrapperRef)

  // TODO: there has to be a better solution than this shit

  // useLayoutEffect(() => {
  //   if (modalWrapperRef.current) {
  //     var { width, x } = modalWrapperRef.current.getBoundingClientRect()
  //   }
  //   const handleResize = () => {
  //     if (window.innerWidth - (width + x) < 10) {
  //       setModalPos({ ...modalPos, left: modalPos.left - 5 })
  //     }
  //   }
  //   handleResize()

  //   window.addEventListener('resize', handleResize)

  //   return () => window.removeEventListener('resize', handleResize)
  // }, [modalPos, modalWrapperRef])

  useEffect(() => {
    if (outsideAlerter) {
      setBadgeModal('')
    }
  }, [outsideAlerter])

  const toggleBadgeModal = (ev?: React.MouseEvent, modalName?: string) => {
    if (!modalName) {
      setBadgeModal('')
    }
    if (ev && modalName) {
      const { y: top, x: left, height } = ev.currentTarget.getBoundingClientRect()
      setModalPos({ top: top + height + 5, left })
      setBadgeModal(modalName)
    }
  }

  const getModalChild = () => {
    switch (badgeModal) {
      case 'labels':
        return <LabelsModal onLabelsUpdate={onLabelsUpdate} task={task} handleTaskLabelChange={handleTaskLabelChange} />
      case 'members':
        return <MemberModal handleTaskMemberToggle={handleTaskMemberToggle} task={task} />
      case 'cover':
        return <CoverModal handleTaskStyleChange={handleTaskStyleChange} task={task} />
      case 'dates':
        // TODO: add calendar and handle dates
        return <DatesModal task={task} />
      default:
        return
    }
  }

  return (
    <TaskQuickEditorControls>
      {/* onclick open task details modal */}
      <TaskQuickEditorControlBtn>
        <EditorControlBtnIcon content="'\e912'" size="sm" />
        <EditorControlText>Open card</EditorControlText>
      </TaskQuickEditorControlBtn>
      {quickControls.map(control => (
        <TaskQuickEditorControlBtn onClick={ev => toggleBadgeModal(ev, control.type)} key={control.icon}>
          <EditorControlBtnIcon content={control.icon} size="sm" />
          <EditorControlText>{control.title}</EditorControlText>
        </TaskQuickEditorControlBtn>
      ))}
      {/* onclick send task to archive */}
      <TaskQuickEditorControlBtn onClick={ev => handleTaskArchive!(ev, task)}>
        <EditorControlBtnIcon content="'\e907'" size="sm" />
        <EditorControlText>Archive</EditorControlText>
      </TaskQuickEditorControlBtn>
      {badgeModal && (
        <BadgesModal modalWrapperRef={modalWrapperRef} modalPos={modalPos} title={badgeModal} onClose={toggleBadgeModal}>
          {getModalChild()}
        </BadgesModal>
      )}
    </TaskQuickEditorControls>
  )
}

export default QuickEditControls
