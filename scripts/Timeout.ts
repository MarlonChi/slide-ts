export default class Timeout {
  id;
  handler;
  start;
  timeleft;
  constructor(handler: TimerHandler, time: number) {
    this.id = setTimeout(handler, time);
    this.handler = handler;
    this.start = Date.now();
    this.timeleft = time;
  }
  clear() {
    clearTimeout(this.id);
  }

  pause() {
    const passed = Date.now() - this.start;
    this.timeleft = this.timeleft - passed;
    this.clear();
  }

  continue() {
    this.clear();
    this.id = setTimeout(this.handler, this.timeleft);
    this.start = Date.now();
  }
}
