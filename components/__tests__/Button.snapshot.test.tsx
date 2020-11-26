import React from "react";
import  { Button2 } from "../../components2/Button2";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer.create(<Button2 href={"#"}>Default Button</Button2>).toJSON();
    expect(tree).toMatchSnapshot();
});