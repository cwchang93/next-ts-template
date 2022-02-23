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

  const isEvenNumber = count % 2 === 0;
  const addCount = () => setCount(count + 1);

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
