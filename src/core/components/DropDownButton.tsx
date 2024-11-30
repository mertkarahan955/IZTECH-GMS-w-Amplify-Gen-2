import React from "react";
import styles from "./DropdownButton.module.css";

interface DropdownButtonProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        {selected} ▼
      </button>
      <ul className={styles.dropdownMenu}>
        {options.map((option) => (
          <li
            key={option}
            className={styles.dropdownItem}
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
