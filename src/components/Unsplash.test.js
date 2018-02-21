import React from "react"
import renderer from "react-test-renderer"
import Unsplash from "./Unsplash"

describe("Unsplash", () => {
  it("renders without crashing", () => {
    const tree = renderer.create(<Unsplash />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("shows a random image", () => {
    const tree = renderer.create(<Unsplash img />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("shows an avatar", () => {
    const tree = renderer
      .create(<Unsplash width="64" height="64" keywords="face" img />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("shows a placeholder with image, size and random image", () => {
    const tree = renderer.create(<Unsplash width="800" height="200" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("shows a placeholder with custom size and keywords", () => {
    const tree = renderer
      .create(
        <Unsplash width="800" height="200" keywords="beach, palms, sea" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("shows a placeholder with content inside and custom styles", () => {
    const tree = renderer
      .create(
        <Unsplash style={{ lineHeight: 2 }}>
          <h1 style={{ color: "white", textShadow: "1px 1px 2px black" }}>
            Super awesome title
          </h1>
          <p>
            With React Unsplash Wrapper is really easy to create a Hero image.
          </p>
        </Unsplash>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("shows a placeholder that expands to its parent", () => {
    const tree = renderer
      .create(
        <div style={{ position: "relative", width: 400, height: 400 }}>
          <Unsplash expand />
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
