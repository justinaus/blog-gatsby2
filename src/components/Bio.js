import React from 'react'
// import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p className={styles.avatarText}>
      Written by <strong>{config.userName}</strong> 
      <a
        className={styles.githubLink}
        href={`https://github.com/${config.userGitHub}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`github.com/${config.userGitHub}`}
      </a>
      {/* who lives and works in San
      Francisco building useful things.
      {` `}
      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : 'none' }}
      /> */}
    </p>
  </>
)

export default Bio
