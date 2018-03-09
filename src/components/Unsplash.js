import React from "react"
import PropTypes from "prop-types"

// Constants
const PATH = "//source.unsplash.com"
const USER = "user"
const COLLECTION = "collection"
const DAILY = "daily"
const RANDOM = "random"
const WIDTH = 1080
const HEIGHT = 720
const DEFAULT_STYLES = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto"
}
const EXPAND_STYLES = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 0
}

// Helper to generate url for unsplash
const generateUrl = ({
  username,
  width,
  height,
  collectionId,
  keywords,
  fixed
}) => {
  const url = [PATH]

  if (fixed) return url.push(DAILY).join("/")
  if (username) url.push(USER).push(username)
  if (!username && collectionId) url.push(COLLECTION).push(collectionId)
  if (!username && !collectionId && !keywords) url.push(RANDOM)
  url.push(`${width}x${height}`)
  if (keywords) url.push(`?${keywords.replace(/\s/g, '')}`)

  return url.join("/")
}

const Unsplash = ({
  children,
  collectionId,
  username,
  expand,
  fixed,
  img,
  keywords,
  style,
  width,
  height
}) => {
  if (typeof width === "string") width = parseInt(width, 10)
  if (typeof height === "string") height = parseInt(height, 10)

  const urlWidth = (style && style.width) || width
  const urlHeight = (style && style.height) || height

  const url = encodeURI(
    generateUrl({
      username,
      collectionId,
      keywords,
      fixed,
      width: urlWidth,
      height: urlHeight
    })
  )

  let imageStyles = {
    width,
    height,
    ...style
  }

  let backgroundStyles = {
    ...DEFAULT_STYLES,
    backgroundImage: `url(${url})`
  }

  if (expand) {
    backgroundStyles = { ...backgroundStyles, ...EXPAND_STYLES }
  } else {
    backgroundStyles = {
      ...backgroundStyles,
      width,
      height,
      ...style
    }
  }

  return img ? (
    <img src={url} style={imageStyles} />
  ) : (
    <div style={backgroundStyles}>{children}</div>
  )
}

Unsplash.propTypes = {
  children: PropTypes.node,
  collectionId: PropTypes.number,
  username: PropTypes.string,
  keywords: PropTypes.string,
  expand: PropTypes.bool,
  fixed: PropTypes.bool,
  img: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Unsplash.defaultProps = {
  expand: false,
  fixed: false,
  img: false,
  width: WIDTH,
  height: HEIGHT
}

export default Unsplash
