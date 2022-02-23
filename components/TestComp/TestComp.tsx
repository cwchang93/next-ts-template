import * as React from "react";
import { ICommonProps } from "utils/common/index";

export interface ITestCompProps extends ICommonProps {
  type?: "primary" | "default";
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const TestComp: React.FC<ITestCompProps> = (props) => {
  console.log("Test Comp");

  return <div>Test Comp</div>;
};

export default React.memo(TestComp);
