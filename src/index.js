import FireStation from "./services/FireStation.js";
import Call from "./services/Call.js";
import fs from "fs";

const employeesData = JSON.parse(fs.readFileSync("./src/data/employees.json"));

const fireStation = new FireStation(employeesData);

const getRandomPriority = () => (Math.random() > 0.5 ? "low" : "high");

const simulateCall = (callerId) => {
  const priority = getRandomPriority();
  const call = new Call(callerId, priority);
  console.log(`New call: Caller ID ${callerId}, Priority ${priority}`);
  fireStation.dispatchCall(call);

  const callDuration = Math.random() * 5000;
  setTimeout(() => {
    if (call.allocatedEmployee) {
      fireStation.finishCall(call.allocatedEmployee);
    }
  }, callDuration);
};

const simulateCalls = () => {
  const numberOfCalls = 10;
  const interval = 2000;

  for (let i = 0; i < numberOfCalls; i++) {
    setTimeout(() => simulateCall(i + 1), i * interval);
  }
};

simulateCalls();
