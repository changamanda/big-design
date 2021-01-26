// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'FO flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;

  return (
    <svg viewBox="0 0 640 480" ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="FOFlagIcon__a">
          <path fillOpacity={0.7} d="M-78 32h640v480H-78z" />
        </clipPath>
      </defs>
      <g fillRule="evenodd" strokeWidth={0} clipPath="url(#FOFlagIcon__a)" transform="translate(78 -32)">
        <path fill="#fff" d="M-78 32h663.9v480H-78z" />
        <path fill="#003897" d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186V218.7z" />
        <path fill="#d72828" d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76v-53.4z" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const FOFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

FOFlagIcon.displayName = 'FOFlagIcon';
