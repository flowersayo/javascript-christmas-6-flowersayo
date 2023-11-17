class Event {
  #name;

  #startDate;

  #endDate;

  static #EVENT_THRESHOLD_AMOUNT = 10_000;

  /**
   * 이벤트 생성
   * @constructor
   * @param {string} name - 이벤트명
   * @param {Date} startDate - 이벤트 시작 날짜
   * @param {Date} endDate - 이벤트 종료 날짜
   */
  constructor(name, startDate, endDate) {
    this.#name = name;
    this.#startDate = startDate;
    this.#endDate = endDate;
  }

  get name() {
    return this.#name;
  }

  get startDate() {
    return this.#startDate;
  }

  canApply(order) {
    return (
      this.#isEventActive(order.date) &&
      order.calcOriginalAmount() >= Event.#EVENT_THRESHOLD_AMOUNT
    );
  }

  #isEventActive(date) {
    return this.#startDate <= date && date <= this.#endDate;
  }
}

export default Event;
