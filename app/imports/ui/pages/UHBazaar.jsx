import React from 'react';
import FullWidthImage from '../components/FullWidthImage';

export default class UHBazaar extends React.Component {
  render() {
    return (
        <div>
          {/* eslint-disable-next-line max-len */}
          <style>{'body { background: rgba(222,242,241, 0.7) url(\'/images/uhsketch.png\') no-repeat center center fixed; background-blend-mode: overlay; }'}
          </style>
          <FullWidthImage/>
        </div>
    );
  }
}
