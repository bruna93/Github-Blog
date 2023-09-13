import Image from 'next/image';

import { labelWithIconStyles } from './styles';

type LabelWithIconProps = {
  customLabel?: string;
  iconProps: {
    alt: string,
    src: string
  };
  label: string;
}

export const LabelWithIcon = ({
  customLabel,
  iconProps,
  label
}: LabelWithIconProps) => {
  const { container, icon, text } = labelWithIconStyles({
    screens: {
      sm: 'mobile',
      md: 'desktop'
    }
  });

  return (
    <div className={`${container()} ${customLabel}`}>
      <Image
        alt={iconProps.alt}
        className={icon()}
        height={16}
        src={iconProps.src}
        width={16}
      />

      <span className={text()}>
        {label}
      </span>
    </div>
  )
}