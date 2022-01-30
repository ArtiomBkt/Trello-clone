import React from "react";
import * as boardInterfaces from "../../interfaces/board.interface"
import { LabelsContainer, Label } from './LabelPreview.styled'

type labelProps = {
  labels: boardInterfaces.label[]
}

const LabelsPreview = ({ labels }: labelProps) => {
  return (
    <LabelsContainer>
      {labels.map(label => <Label key={label.id} bgColor={label.color}>{label.title}</Label>)}
    </LabelsContainer>
  )
}

export default LabelsPreview
