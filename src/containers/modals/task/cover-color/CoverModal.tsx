import React from 'react'
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
import { taskColors } from '../../../../components/task/TaskPreview.styled'
import { PropTypes } from '../../../../types/prop-types'

// I'll need the task here
// determine if its fully covered
// color templates accordingly
// border around chosen color

const CoverModal = ({ task }: PropTypes.TaskColorProps) => {
  const Colors = () => {
    const staticColors: string[] = []
    for (let color in taskColors) {
      staticColors.push(taskColors[color].static)
    }

    return (
      <>
        {staticColors.map(color => (
          <CoverColor key={color} isSelectedColor={task.style && taskColors[task.style!.background].static === color} style={{ backgroundColor: color }} />
        ))}
      </>
    )
  }

  return (
    <div>
      <CoverModalTitle>Size</CoverModalTitle>
      <CoverOptionsGrid>
        <TaskCoverTemplate isFullCover={!task.style?.fullCover}>
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
        <TaskCoverTemplate styling={task.style} isFullCover={task.style?.fullCover}>
          <TaskContentIllustrator style={{ position: 'absolute', bottom: '4px' }}>
            <IllustrationStripes style={{ backgroundColor: '#fff' }} />
            <div style={{ backgroundColor: '#fff' }} />
          </TaskContentIllustrator>
        </TaskCoverTemplate>
      </CoverOptionsGrid>
      <CoverRemoveBtn>Remove cover</CoverRemoveBtn>
      <CoverModalTitle>Colors</CoverModalTitle>
      <CoverColorsGrid>
        <Colors />
      </CoverColorsGrid>
      {/* TODO: add unsplash images */}
    </div>
  )
}

export default CoverModal
