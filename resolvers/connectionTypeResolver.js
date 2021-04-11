'use strict';
import ConnectionType from "../models/ConnectionTypes.js";

export default {
    Query: {
        ConnectionTypes: () => {
            return ConnectionType.find();
        }
    },
    Connection: {
        ConnectionType: (parent) => {
          return ConnectionType.findById(parent.ConnectionTypeID);
        }
    }
}