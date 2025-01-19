/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <SectionTitle
        title="An efficient and robust protocol for communication between LLM agents."
        description={null}
      />
      <div className="row">
        <div className="col col--6">
          Go from this
          <ThemeImage
            lightSrc="https://placehold.co/600x400"
            darkSrc="https://placehold.co/600x400"
          />
        </div>
        <div className="col col--6">
          To this
          <ThemeImage
            lightSrc="https://placehold.co/600x400"
            darkSrc="https://placehold.co/600x400"
          />
        </div>
      </div>
    </Section>
  );
}

export default Platforms;
