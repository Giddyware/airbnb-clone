"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [onChange, value]);
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className={`flex items-center justify-center transition border rounded-full cursor-pointer w-18 h-18 border-neutral-400 p-2 text-neutral-500 hover:opacity-80 
          ${value === 1 ? "opacity-40" : ""}`}
        >
          {<AiOutlineMinus />}
        </div>
        <div className="text-xl font-light text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="flex items-center justify-center p-2 transition border rounded-full cursor-pointer w-18 h-18 border-neutral-400 text-neutral-500 hover:opacity-80"
        >
          {<AiOutlinePlus />}
        </div>
      </div>
    </div>
  );
};
export default Counter;
