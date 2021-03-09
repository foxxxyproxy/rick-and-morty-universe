import React from "react";
import styled from "styled-components";
import dropdownIcon from "../../assets/dropdown-icon.svg";
import { Label } from "./Label";

const Select = styled.select`
  padding: 1.7em 2.5em 0.5em 1.5em;
  margin-bottom: 1em;
  color: ${(p) => p.theme.dropdownTextColor};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2;
  border: 2px solid
    ${(p) => (p.isActive ? p.theme.headerColor : p.theme.primary)};
  appearance: none;
  cursor: pointer;

  background: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-size: 0.8em 0.4em;
  background-position-x: calc(100% - 1em);
  background-position-y: 50%;

  box-shadow: ${(p) => p.theme.boxShadow};
  backdrop-filter: ${(p) => p.theme.backdropFilter};
  border-radius: ${(p) => p.theme.borderRadius};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${(p) => p.theme.shadowColor};
  }
`;

const InnerLabel = styled(Label)`
  top: 1.5rem;
  cursor: pointer;
  color: ${(p) => p.theme.dropdownTextColor};
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -1em;
`;

const Dropdown = React.forwardRef((props, ref) => {
  const { type, value, onChange, options, isActive = false } = props;
  return (
    <SelectWrapper>
      <InnerLabel htmlFor={type}>Select characters by {type}</InnerLabel>
      <Select
        ref={ref}
        id={type}
        value={value ? value : ""}
        onChange={onChange}
        isActive={isActive}
      >
        <option value="" disabled>
          Select {type}
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={JSON.stringify(option)}>
              {type === "dimensions" ? option : option.name}
            </option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
});

export default Dropdown;
