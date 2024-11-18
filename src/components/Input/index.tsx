import React from "react";
import "./style.scss";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="input-wrapper" data-testid="input-container">
      <input
        data-testid="input"
        className="input-field"
        type="text"
        value={value}
        onChange={onChange}
      />
      <label
        data-testid="input-label"
        className={`input-label ${value ? "filled" : ""}`}
      >
        {label}
      </label>
    </div>
  );
};
