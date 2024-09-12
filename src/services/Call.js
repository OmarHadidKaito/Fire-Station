class Call {
  constructor(callerId, priority) {
    this.callerId = callerId;
    this.priority = priority;
    this.allocatedEmployee = null;
  }
}

export default Call;
