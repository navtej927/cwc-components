import React from "react";

const commonIconStyles = (styleProps) => ({
  ...(styleProps.size === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18,
    },
  }),
  ...(styleProps.size === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20,
    },
  }),
  ...(styleProps.size === 'large' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22,
    },
  }),
});

export const Button = (props) => {
  const {
    children,
    color = 'primary',
    component = 'button',
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = 'medium',
    startIcon: startIconProp,
    type,
    variant = 'text',
    ...other
  } = props;

  const styleProps = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant,
  };

  return (
    <button>
      <span>
        test
      </span>
    </button>
  )
}
