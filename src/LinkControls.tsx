import React from "react";

type Props = {
  stepPercent: number;
  setStepPercent: (percent: number) => void;
};

export default function LinkControls({ stepPercent, setStepPercent }: Props) {
  return (
    <div className="text-gray-500 text-lg">
      <>
        &nbsp;&nbsp;
        <label>step:</label>&nbsp;
        <input
          onClick={(e) => e.stopPropagation()}
          type="range"
          min={0}
          max={1}
          step={0.1}
          onChange={(e) => setStepPercent(Number(e.target.value))}
          value={stepPercent}
        />
      </>
    </div>
  );
}
