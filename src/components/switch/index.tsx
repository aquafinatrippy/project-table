import "./style.scss";

type SwitchProps = {
  isOn: boolean;
  handleToggle: () => void;
  onIcon: string;
  offIcon: string;
  id?: string;
};

export const Switch = ({
  isOn,
  handleToggle,
  onIcon,
  offIcon,
  id = "switch",
}: SwitchProps) => {
  const switchId = `${id}-${Math.random().toString(36)}`;

  return (
    <div className="switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={switchId}
        type="checkbox"
        data-testid="switch"
        aria-checked={isOn}
        aria-label="Toggle switch"
      />
      <label
        style={{ background: isOn ? "#333333" : "#708090" }}
        className="switch-label"
        htmlFor={switchId}
      >
        <span className="switch-button">
          {isOn ? (
            <span className="material-icons">{onIcon}</span>
          ) : (
            <span className="material-icons">{offIcon}</span>
          )}
        </span>
      </label>
    </div>
  );
};

Switch.defaultProps = {
  id: "switch",
};