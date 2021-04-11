'use strict';
import Level from '../models/Levels.js';

export default {
  Connection: {
    Level(parent) {
      // console.log('levelType', parent);
      return Level.findById(parent.LevelID);
    },
  },
};