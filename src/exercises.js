let exerarray = [];

class Exercise {
  constructor(name, instruction, repBreakdown) {
    this.name = name;
    this.instruction = instruction;
    this.repBreakdown = repBreakdown;
  }
  getName() {
    return this.name;
  }
  getInstruction() {
    return this.instruction;
  }
  getrepBreakdown() {
    return this.repBreakdown;
  }
}
let pushup = new Exercise(
  "pushup",
  "Body lying chest to floor, push up with hands against the floor, till extension, release almost start position, repeat",
  10
);
exerarray.push(pushup);
let situp = new Exercise(
  "situp",
  "lying back on the floor, situp to touch toes",
  20
);
exerarray.push(situp);
let plank = new Exercise(
  "plank",
  "body chest parallel to floor, support with hands and toes with a flat body, hold posture",
  30
);
exerarray.push(plank);
let reverseplank = new Exercise(
  "reverse plank",
  "body back parallel to floor, support with hands and heels with a flat body, hold posture",
  30
);
exerarray.push(reverseplank);
let burpee = new Exercise(
  "burpee",
  "standing position, transition to lying prone, transition back to standing",
  5
);
exerarray.push(burpee);
let mountainclimber = new Exercise(
  "mountain climber",
  "body chest parallel to ground, support with hands and toes, drive knees to chest while maintaining posture",
  20
);
exerarray.push(mountainclimber);
let squat = new Exercise(
  "squat",
  "standing with feet apart, bend knees and squat down",
  15
);
exerarray.push(squat);
let pushupalterraise = new Exercise(
  "pushup with alternate leg/hand raise",
  "perform a push up and upon reaching top, raise alternate hands and leg from ground",
  10
);
exerarray.push(pushupalterraise);
let pushupaltcrunch = new Exercise(
  "push with alternater leg/hand crunch",
  "perform a pushup and upon reaching top, crunch underneath your body with alternate elbow and knee while maintaining posture",
  10
);
exerarray.push(pushupaltcrunch);
let squatsmallhop = new Exercise(
  "Squat Small Hop",
  "Assume semi squat position, make a small burst hop and drive knees up ward, upon landing squat a little downward",
  5
);
exerarray.push(squatsmallhop);
let squatbighop = new Exercise(
  "Squat Big Hop",
  "starting standing up, squat down, drive to a big jump, drive knees to chest, land into deep squat, repeat",
  5
);
exerarray.push(squatbighop);

export const OneExer = exerarray;
