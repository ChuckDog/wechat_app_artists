'use strict';

import { html2json } from '../../src/html2json';
import { introductionsTemplate } from '../../templates/introductionsTemplate';

Page({
  data: {
    innerWxml: html2json(introductionsTemplate.template).child
  }
});