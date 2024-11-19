import "./style.scss";

type SwitchProps = {
  isOn: boolean;
  handleToggle: () => void;
  onIcon: string;
  offIcon: string;
};

export const Switch = ({
  isOn,
  handleToggle,
  onIcon,
  offIcon,
}: SwitchProps) => {
  return (
    <div className="switch-container">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id="switch"
        type="checkbox"
        data-testid="switch"
      />
      <label
        style={{ background: isOn ? "#333333" : "#708090" }}
        className="switch-label"
        htmlFor="switch"
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
