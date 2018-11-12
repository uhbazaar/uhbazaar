import React from 'react';
import FullWidthImage from '../components/FullWidthImage';

export default class UHBazaar extends React.Component {
  render() {
    return (
        <div>
          <style>
            {'body { background: url(\'https://farm2.staticflickr.com/1228/1273406911_5023b91baa_b.jpg\') no-repeat center center fixed; }'}</style>
          <style>
            {'body { background-size: cover; }'}
          </style>
          <FullWidthImage/>
        </div>
    );
  }
}
