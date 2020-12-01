import React from "react";
import styled from "styled-components";
import dropdownIcon from "../../assets/dropdown-icon.svg";
import { Label } from "./Label";

const Select = styled.select`
  padding: 1.7em 2.5em 0.5em 1.5em;
  border-radius: 0.8em;
  font-size: 1rem;
  line-height: 1.2;
  border: 3px solid ${(p) => p.theme.primary};
  appearance: none;
  cursor: pointer;

  background: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-size: 0.8em 0.4em;
  background-position-x: calc(100% - 1em);
  background-position-y: 50%;
  margin-bottom: 1em;
  color: ${(p) => p.theme.textColor};
`;

const InnerLabel = styled(Label)`
  top: 1.5rem;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -1em;
`;

const Dropdown = React.forwardRef((props, ref) => {
  const { type, value, onChange, options } = props;
  return (
    <SelectWrapper>
      <InnerLabel htmlFor={type}>Select characters by {type}</InnerLabel>
      <Select ref={ref} id={type} value={value} onChange={onChange}>
        <option value="" disabled>
          Select {type}
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
});

export default Dropdown;
