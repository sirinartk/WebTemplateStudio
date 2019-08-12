import * as React from "react";
import { ReactComponent as ArrowDown } from "../../assets/chevron.svg";

import Select, { components } from "react-select";
import dropdownstyles from "./dropdownstyles";

import styles from "./styles.module.css";

interface IDropdownProps {
  id: string;
  options: IDropDownOptionType[];
  disabled?: boolean;
  defaultValue?: IDropDownOptionType;
  handleChange?: (e: any) => void;
  value?: IDropDownOptionType | undefined;
  ariaLabel: string;
  openDropdownUpwards?: boolean;
  nextItem: string;
}

const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <ArrowDown className={styles.icon} />
      </components.DropdownIndicator>
    )
  );
};

const Dropdown = ({
  id,
  options,
  defaultValue,
  handleChange,
  value,
  disabled,
  ariaLabel,
  openDropdownUpwards,
  nextItem
}: IDropdownProps) => {
  return (
    <Select
      id={id}
      aria-label={ariaLabel}
      components={{ DropdownIndicator }}
      value={value}
      onChange={handleChange}
      styles={dropdownstyles}
      isSearchable={true}
      defaultValue={defaultValue}
      options={options}
      menuPlacement={openDropdownUpwards ? "top" : "auto"}
      isDisabled={disabled}
      aria-flowto={nextItem}
    />
  );
};

export default Dropdown;
