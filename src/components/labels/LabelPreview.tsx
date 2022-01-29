import React from "react";
import * as boardInterfaces from "../../interfaces/board.interface"

type labelProps = {
  label: boardInterfaces.label
}

const LabelPreview = ({ label }: labelProps) => {
  return (
    <div style={{background: label.color}}>
      {label.title}
    </div>
  )
}

export default LabelPreview
