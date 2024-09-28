import React from "react";
import PropTypes from "prop-types";
import "./investors.css";

const valueType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
]);

const propTypes = {
  labels: PropTypes.shape({
    left: {
      title: PropTypes.string.isRequired,
      value: valueType,
      desc: PropTypes.string.isRequired,
    },
    center: {
      title: PropTypes.string.isRequired,
      value: valueType,
      desc: PropTypes.string.isRequired,
    },
    right: {
      title: PropTypes.string.isRequired,
      value: valueType,
      desc: PropTypes.string.isRequired,
    },
  }),
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

const defaultProps = {
  labels: {
    left: {
      title: "left",
      value: "left",
    },
    center: {
      title: "center",
      value: "center",
    },
    right: {
      title: "right",
      value: "right",
    },
  },
  onChange: (value) => console.log("value:", value),
};

class TripleToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPosition: "left",
      animation: null,
      showDescription: [false, false, false],
    };
  }

  getSwitchAnimation = (value) => {
    const { switchPosition } = this.state;
    let animation = null;
    if (value === "center" && switchPosition === "left") {
      animation = "left-to-center";
    } else if (value === "right" && switchPosition === "center") {
      animation = "center-to-right";
    } else if (value === "center" && switchPosition === "right") {
      animation = "right-to-center";
    } else if (value === "left" && switchPosition === "center") {
      animation = "center-to-left";
    } else if (value === "right" && switchPosition === "left") {
      animation = "left-to-right";
    } else if (value === "left" && switchPosition === "right") {
      animation = "right-to-left";
    }
    this.props.onChange(value);
    this.setState({ switchPosition: value, animation });
  };

  handleMouseEnter = (index) => {
    this.setState((prevState) => {
      const newShowDescription = [...prevState.showDescription];
      newShowDescription[index] = true;
      return { showDescription: newShowDescription };
    });
  };

  handleMouseLeave = (index) => {
    this.setState((prevState) => {
      const newShowDescription = [...prevState.showDescription];
      newShowDescription[index] = false;
      return { showDescription: newShowDescription };
    });
  };

  render() {
    const { labels } = this.props;
    const { showDescription } = this.state;

    return (
      <div className="main-container">
        <div
          className={`switch ${this.state.animation} ${this.state.switchPosition}-position`}
        ></div>
        <input
          defaultChecked
          onChange={(e) => this.getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="left"
          type="radio"
          value="left"
        />
        <label
          className={`left-label ${
            this.state.switchPosition === "left" && "black-font"
          }`}
          htmlFor="left"
          onMouseEnter={() => this.handleMouseEnter(0)}
          onMouseLeave={() => this.handleMouseLeave(0)}
        >
          <h4>{labels.left.title}</h4>
          {showDescription[0] && labels.left.desc !== undefined && (
            <div className={"showDecription"}>{labels.left.desc}</div>
          )}
        </label>

        <input
          onChange={(e) => this.getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="center"
          type="radio"
          value="center"
        />
        <label
          className={`center-label ${
            this.state.switchPosition === "center" && "black-font"
          }`}
          htmlFor="center"
          onMouseEnter={() => this.handleMouseEnter(1)}
          onMouseLeave={() => this.handleMouseLeave(1)}
        >
          <h4>{labels.center.title}</h4>
          {showDescription[1] && labels.center.desc !== undefined && (
            <div className={"showDecription"}>{labels.center.desc}</div>
          )}
        </label>

        <input
          onChange={(e) => this.getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="right"
          type="radio"
          value="right"
        />
        <label
          className={`right-label ${
            this.state.switchPosition === "right" && "black-font"
          }`}
          htmlFor="right"
          onMouseEnter={() => this.handleMouseEnter(2)}
          onMouseLeave={() => this.handleMouseLeave(2)}
        >
          <h4>{labels.right.title}</h4>
          {showDescription[2] && labels.right.desc !== undefined && (
            <div className={"showDecription"}>{labels.right.desc}</div>
          )}
        </label>
      </div>
    );
  }
}

TripleToggleSwitch.propTypes = propTypes;
TripleToggleSwitch.defaultProps = defaultProps;

export default TripleToggleSwitch;
