import React from "react"
import { SwitchWrapper } from "./styles"

export function ButtonTheme(props) {
  return (
      <SwitchWrapper onClick={props.handleTheme} >
        <div>
          <span></span>
        </div>
      </SwitchWrapper>
  )
}