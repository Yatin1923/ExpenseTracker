import * as React from 'react';
import {
  Select as BaseSelect,
  selectClasses,
  SelectListboxSlotProps,
  SelectProps,
  SelectRootSlotProps,
} from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';

export default function CustomSelect({ options, defaultvalue }) {
  return (
    <Select defaultValue={defaultvalue}>
      {options.map((option, index) => {
        return <Option key={option} value={index}>{option}</Option>
      })}
    </Select>
  );
}

const Select = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean,
>(props: SelectProps<TValue, Multiple>, ref: React.ForwardedRef<HTMLButtonElement>) {
  const slots = {
    root: StyledButton,
    listbox: AnimatedListbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

const purple = {
  100: '#EADCF7', // Lightest purple
  200: '#D3A8F3', // Light purple
  400: '#B466F0', // Medium purple
  500: '#9B3DF1', // Darker purple
  600: '#8B2BCC', // Darker shade
  700: '#6B1F99', // Even darker
  900: '#4D0078',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = React.forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      <KeyboardArrowDownIcon style={{color:'purple'}} />
      {other.children}
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  display:flex;
  gap:1vw;
  align-items:center;
  // min-width: 320px;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  // background: ${theme.palette.mode === 'dark' ? purple[900] : '#fff'};
  border: none;
  background:transparent;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    // background: ${theme.palette.mode === 'dark' ? purple[800] : purple[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${purple[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  }

  & > svg {
    font-size: 1rem;
    // position: absolute;
    height: 100%;
    top: 0;
    left:0;
    // right: 10px;
  }
  `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  // min-width: 320px;
  border-radius: 12px;
  max-height:200px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? purple[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? purple[700] : purple[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  
  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox<
  Value extends {},
  Multiple extends boolean,
>(
  props: SelectListboxSlotProps<Value, Multiple>,
  ref: React.ForwardedRef<HTMLUListElement>,
) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
    );
  }

  const verticalPlacement = popupContext.placement.split('-')[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? purple[900] : purple[100]};
    color: ${theme.palette.mode === 'dark' ? purple[100] : purple[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? purple[800] : purple[100]};
    color: ${theme.palette.mode === 'dark' ? purple[300] : purple[900]};
  }

  &:focus-visible {
    outline: 3px solid ${theme.palette.mode === 'dark' ? purple[600] : purple[200]};
  }
  
  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? purple[900] : purple[100]};
    color: ${theme.palette.mode === 'dark' ? purple[100] : purple[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? purple[700] : purple[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? purple[800] : purple[100]};
    color: ${theme.palette.mode === 'dark' ? purple[300] : purple[900]};
  }
  `,
);

const Popup = styled('div')`
  z-index: 1;
`;