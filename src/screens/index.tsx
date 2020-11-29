import React from 'react';
import BootstrapDemo from './BootstrapDemo';
import './styles.scss';

export default function Screens() {
  return (
    <div data-testid="screens" className="screens">
      <BootstrapDemo />
    </div>
  );
}
