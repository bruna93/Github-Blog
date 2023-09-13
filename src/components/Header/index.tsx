import Image from 'next/image';
import { headerStyles } from './styles';

export const Header = () => {
  const {
    decoration01,
    decoration02,
    headerContainer,
    headerContent,
    image
  } = headerStyles({
    screens: {
      sm: 'mobile',
      md: 'desktop'
    }
  });

  return (
    <header className={headerContainer()}>
      <div className={headerContent()}>
        <Image
          alt='Logo Github Blog'
          className={image()}
          height={98}
          src='/Logo.svg'
          width={148}
        />

        <div className={decoration01()} />
        <div className={decoration02()} />
      </div>
    </header>
  );
};