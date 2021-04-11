'use strict';
import Station from '../models/Stations.js';

export default {
    Query: {
        stations: (parent, args) => {
            return Station.find();
        },
        station: (parent, args) => {
            return Station.findById(args.id);
        }
    },
};
