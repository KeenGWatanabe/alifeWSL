'use client';

import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex items-center p-4 border-b-2 transition cursor-pointer ${
        selected ? "border-blue-500" : "border-transparent"
      }`}
    >
      <Icon className="h-6 w-6 mr-4" />
      <span className="font-medium">{label}</span>
    </div>
  );

}

export default CategoryInput;