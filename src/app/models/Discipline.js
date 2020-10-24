import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const DisciplineSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

DisciplineSchema.plugin(autoIncrement.plugin, {
  model: "Discipline",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("Discipline", DisciplineSchema);
