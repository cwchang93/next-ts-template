import React from "react";
import Button from "components/Button/Button";
import TestComp from "components/TestComp/TestComp";

const PageHooks = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // console.log("didmount Effect");
    // console.log("---------");

    return () => {
      // console.log("unMount");
    };
  }, [count]);

  const isEvenNumber = React.useMemo(() => count % 2 === 0, [count]);
  const addCount = React.useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <div>
        Current Num: {count} - {isEvenNumber ? "Even" : "Odd"}
      </div>

      <Button onClick={addCount}>Click to Add </Button>

      <TestComp />
    </>
  );
};

export default PageHooks;
