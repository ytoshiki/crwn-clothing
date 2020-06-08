import React from "react"
import MenuItem from "../menu-item/menu-item.component"
import "./directory.scss"
import { selectSections } from "../../redux/directory/directory.selector"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)

// const mapStateToProps = state => ({
//   sections: selectSections(state)
// })

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory)
