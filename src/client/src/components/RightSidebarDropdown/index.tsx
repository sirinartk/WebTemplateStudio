import * as React from "react";

import Dropdown from "../../components/Dropdown";

import styles from "./styles.module.css";
import { ISelected } from "../../types/selected";
import { IOption } from "../../types/option";

interface IProps {
  id: string;
  handleDropdownChange: (
    dropdownTitle: IDropDownOptionType,
    selectDropdownOption: (dropDrownItem: ISelected) => void,
    optionsData: IOption[]
  ) => void;
  selectDropdownOption: (dropDrownItem: ISelected) => void;
  options: IDropDownOptionType[];
  title: string;
  isVisible: boolean;
  value: IDropDownOptionType;
  disabled?: boolean;
  optionsData: IOption[];
  nextItem: string;
}

const RightSidebarDropdown = (props: IProps) => {
  return (
    <div>
      {props.isVisible && (
        <div className={styles.sidebarItem}>
          <div className={styles.dropdownTitle}>{props.title}</div>
          <Dropdown
            id={props.id}
            handleChange={dropDrownItem => {
              props.handleDropdownChange(
                dropDrownItem,
                props.selectDropdownOption,
                props.optionsData
              );
            }}
            disabled={props.disabled}
            ariaLabel={props.title}
            options={props.options}
            value={props.value}
            nextItem={props.nextItem}
          />
        </div>
      )}
    </div>
  );
};

export default RightSidebarDropdown;
