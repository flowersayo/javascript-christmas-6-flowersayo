class Event {
  #name;

  #startDate;

  #endDate;

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
}

export default Event;
