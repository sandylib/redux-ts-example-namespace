import React from 'react';
import BootstrapDemo from './BootstrapDemo';
import './styles.scss';
import LibDemo from './LibDemo';

export default function Screens() {
  return (
    <div data-testid="screens" className="screens">
      <LibDemo />
      <BootstrapDemo />
    </div>
  );
}
