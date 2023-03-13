import React from 'react';
import whatAppIcon from './WhatsApp.svg';
import css from './styles.module.css';

export default ({ className }) => (
  <img src={whatAppIcon} className={`${css.whatsAppIcon} ${className}`} />
);
