studentValidator = {
  $jsonSchema: {
    bsonType: "object",
    required: [ "Name", "Age", "Year", "Major"],
    properties: {
      Name: {
        bsonType: "string",
        description: "Name must be a string and is required."
      },
      Age: {
        bsonType: "number",
        description: "Age must be a number and is required."
      },
      Year: {
        bsonType: "int",
        minimum: 1,
        maximum: 5,
        description: "Must be an integer within [1,4] and is required."
      },
      Major: {
        enum: ["IT", "CS", "EE"],
        description: "Major has limited values and is required."
      }
    }
  }
}
