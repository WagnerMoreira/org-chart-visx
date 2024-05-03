import { ComponentType } from "react";
import { LinkVerticalStep } from "@visx/shape";

export default function getLinkComponent(): ComponentType<any> {
  const LinkComponent: ComponentType<any> = LinkVerticalStep;

  // LinkComponent = LinkHorizontalStep;

  return LinkComponent;
}
