'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Org } from "@/octokit/octokit";
import { LabelWithIcon } from '../LabelWithIcon';

import { profileStyles } from './styles';

type ProfileProps = {
  className?: string;
  org: Org;
};

export const Profile = ({
  className,
  org
}: ProfileProps) => {
  const {
    avatar_url,
    description,
    followers,
    login,
    company,
    name
  } = org;

  const {
    profileContainer,
    profileContent,
    profileAvatar,
    profileDescription,
    profileHeader,
    profileInfos,
    profileName,
    profileLink
  } = profileStyles({
    screens: {
      'sm': 'mobile',
      'md': 'desktop'
    }
  })

  return (
    <article className={`${profileContainer()} ${className}`}>
      <Image
        alt='Avatar do perfil'
        className={profileAvatar()}
        height={148}
        src={avatar_url}
        width={148}
      />

      <div className={profileContent()}>
        <div className={profileHeader()}>
          <h3 className={profileName()}>
            {name}
          </h3>

          <Link
            className={profileLink()}
            href='https://github.com/vercel/vercel'
            target='_blank'
          >
            GITHUB

            <Image
              alt='Icone de redirecionamento'
              height={10}
              src='/Icon.svg'
              width={10}
            />
          </Link>
        </div>

        <p className={profileDescription()}>
          {description ?? "..."}
        </p>

        <div className={profileInfos()}>
          <LabelWithIcon
            iconProps={{
              alt: 'Icone do github',
              src: '/github.svg'
            }}
            label={login}
          />

          <LabelWithIcon
            iconProps={{
              alt: 'Icone de um prédio',
              src: '/building.svg'
            }}
            label={company ?? "Vercel"}
          />

          <LabelWithIcon
            iconProps={{
              alt: 'Icone de usuários',
              src: '/people.svg'
            }}
            label={`${followers} seguidores`}
          />
        </div>
      </div>
    </article>
  )
}