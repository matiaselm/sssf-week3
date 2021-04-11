'use strict';
import Connection from '../models/Connections.js';

export default {
  Station: {
    Connections(parent) {
      // console.log('connection', parent);
      return parent.Connections.map(id => Connection.findById(id))
    },
  },
};