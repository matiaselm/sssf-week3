'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const levelTypeSchema = new Schema({
        Title: String,
        Comments: String,
        IsFastChargeCapable: Boolean
    });

export default mongoose.model('Level', levelTypeSchema);