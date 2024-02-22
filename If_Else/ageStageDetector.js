const STAGES = {
  BABY: 1,
  TODLER: 3,
  PRESCHOOLER: 5,
  SCHOOLER: 12,
  TEENAGER: 19,
  YOUNG: 35,
  ADULT: 55,
  OLD: 75,
};
const detectAgeStage = (age) => {
  if (STAGES.BABY == age) {
    console.log("You are a baby");
  } else if (STAGES.BABY < age && STAGES.TODLER >= age) {
    console.log("You are a todler");
  } else if (STAGES.TODLER < age && STAGES.PRESCHOOLER >= age) {
    console.log("You are a preschooler");
  } else if (STAGES.PRESCHOOLER < age && STAGES.SCHOOLER >= age) {
    console.log("You are a schooler");
  } else if (STAGES.SCHOOLER < age && STAGES.TEENAGER >= age) {
    console.log("You are a teenager");
  } else if (STAGES.TEENAGER < age && STAGES.YOUNG >= age) {
    console.log("You are a young");
  } else if (STAGES.YOUNG < age && STAGES.ADULT >= age) {
    console.log("You are a Adult");
  } else if (STAGES.ADULT < age && STAGES.OLD >= age) {
    console.log("You are a Old");
  }
};

detectAgeStage(25);
