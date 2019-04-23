import React, { useState } from "react";
import PropTypes from "prop-types";
import Pct from "../PatternOptionPercentage";
import Deg from "../PatternOptionDegree";
import Mm from "../PatternOptionMillimeter";
import Bool from "../PatternOptionBool";
import List from "../PatternOptionList";
import Count from "../PatternOptionCount";
import { optionType } from "../utils";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

const OptionGroup = props => {
  const update = (name, value) => props.updateValue("option", name, value);

  const renderOption = name => {
    let option = props.pattern.config.options[name];
    let type = optionType(option);
    let stringKey = `options.${props.pattern.config.name}.${name}.`;
    let extraProps = {
      name,
      dflt: props.dflts.options[name],
      units: props.units,
      updateValue: update,
      triggerAction: props.triggerAction,
      title: <FormattedMessage id={stringKey + "title"} />,
      desc: <FormattedMessage id={stringKey + "description"} />,
      intl: props.intl,
      pattern: props.pattern.config.name
    };
    let noyes = [
      <FormattedMessage id="app.no" />,
      <FormattedMessage id="app.yes" />
    ];

    switch (type) {
      case "pct":
        return <Pct {...option} {...extraProps} key={name} />;
        break;
      case "deg":
        return <Deg {...option} {...extraProps} key={name} />;
        break;
      case "mm":
        return (
          <Mm {...option} {...extraProps} key={name} units={props.units} />
        );
        break;
      case "bool":
        return <Bool {...option} {...extraProps} key={name} labels={noyes} />;
        break;
      case "list":
        return <List {...option} {...extraProps} key={name} />;
        break;
      case "count":
        return <Count {...option} {...extraProps} key={name} />;
        break;
      default:
        throw new Error("Unsupport option type: " + type);
    }
  };

  return (
    <div className="optiongroup">
      {props.options.map(name => {
        let output = [];
        if (typeof name === "object") {
          // Subgroup
          for (let subGroup of Object.keys(name)) {
            output.push(
              <h4 key={subGroup + "-title"}>
                <FormattedMessage id={"optiongroups." + subGroup} />
              </h4>
            );
            for (let option of name[subGroup])
              output.push(renderOption(option));
          }
        } else output.push(renderOption(name));

        return output;
      })}
    </div>
  );
};

OptionGroup.propTypes = {
  pattern: PropTypes.object.isRequired,
  dflts: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  units: PropTypes.oneOf(["metric", "imperial"]).isRequired
};

OptionGroup.defaultProps = {};

export default injectIntl(OptionGroup);
