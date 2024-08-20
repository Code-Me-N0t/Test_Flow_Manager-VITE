import { Handle } from "@xyflow/react";

const ConnectorNode = ({ data }) => {
  return (
    <div className="text-[#ECF0F1] text-xs rounded-full w-[50px] h-[50px] flex justify-center items-center bg-[#34495E]"
    >
      <div>{data.label}</div>
      <Handle type="source" position="right" />
      <Handle type="target" position="left" />
    </div>
  );
};

export default ConnectorNode;