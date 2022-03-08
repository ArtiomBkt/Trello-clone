import React from 'react'
import { PropTypes } from 'types/prop-types'
import {
  CoverModalTitle,
  CoverOptionsGrid,
  TaskCoverTemplate,
  HalfCoverStrip,
  TaskContentIllustrator,
  IllustrationStripes,
  IllustrationBlobs,
  CoverRemoveBtn,
  CoverColorsGrid,
  CoverColor
} from './CoverModal.styled'
import { taskColors } from 'components/task/TaskPreview.styled'

const CoverModal = ({ handleTaskStyleChange, task }: PropTypes.TaskColorProps) => {
  const handleTaskColorChange = (ev: React.MouseEvent, color: string) => {
    ev.preventDefault()

    const background = Object.keys(taskColors).find(key => taskColors[key].static === color)
    if (background) {
      const newTaskStyle = {
        ...task.style,
        background
      }

      handleTaskStyleChange!(newTaskStyle)
    }
  }

  const handleTaskCoverStyleChange = (ev: React.MouseEvent, fullCover: boolean) => {
    ev.preventDefault()

    if (!task.style.background) {
      return
    }

    const newTaskStyle = {
      ...task.style,
      fullCover
    }

    handleTaskStyleChange!(newTaskStyle)
  }

  const handleCoverRemove = (ev: React.MouseEvent) => {
    ev.preventDefault()

    const newTaskStyle = {
      ...task.style,
      background: '',
      fullCover: false
    }

    handleTaskStyleChange!(newTaskStyle)
  }

  const Colors = () => {
    const staticColors: string[] = []
    for (let color in taskColors) {
      staticColors.push(taskColors[color].static)
    }

    return (
      <>
        {staticColors.map(color => (
          <CoverColor
            onClick={ev => handleTaskColorChange(ev, color)}
            key={color}
            isSelectedColor={task.style?.background ? taskColors[task.style.background].static === color : undefined}
            style={{ backgroundColor: color }}
          />
        ))}
      </>
    )
  }

  return (
    <div>
      <CoverModalTitle>Size</CoverModalTitle>
      <CoverOptionsGrid>
        <TaskCoverTemplate onClick={ev => handleTaskCoverStyleChange(ev, false)} isFullCover={!task.style?.fullCover}>
          <HalfCoverStrip styling={task.style} />
          <TaskContentIllustrator>
            {/* Both are divs, first child - longer stripe, second - shorter */}
            <IllustrationStripes styling={task.style} />
            <div />
            <IllustrationBlobs styling={task.style}>
              {/* first and second child - short stripes, last child - blob */}
              <div />
              <div />
              <div />
            </IllustrationBlobs>
          </TaskContentIllustrator>
        </TaskCoverTemplate>
        <TaskCoverTemplate onClick={ev => handleTaskCoverStyleChange(ev, true)} styling={task.style} isFullCover={task.style?.fullCover}>
          <TaskContentIllustrator style={{ position: 'absolute', bottom: '4px' }}>
            <IllustrationStripes style={{ backgroundColor: '#fff' }} />
            <div style={{ backgroundColor: '#fff' }} />
          </TaskContentIllustrator>
        </TaskCoverTemplate>
      </CoverOptionsGrid>
      <CoverRemoveBtn onClick={handleCoverRemove}>Remove cover</CoverRemoveBtn>
      <CoverModalTitle>Colors</CoverModalTitle>
      <CoverColorsGrid>
        <Colors />
      </CoverColorsGrid>
      {/* TODO: add unsplash images */}
    </div>
  )
}

export default CoverModal
