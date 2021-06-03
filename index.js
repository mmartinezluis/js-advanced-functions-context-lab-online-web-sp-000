/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
  let attributes = ["firstName", "familyName", "title", "payPerHour"];
  let employee = {};
  attributes.map((attribute, index) => { employee[attribute] = array[index]});
  employee["timeInEvents"] = [];;
  employee["timeOutEvents"] = [];
  return employee;
}

function createEmployeeRecords(array) {
  return array.map( e => createEmployeeRecord(e));
}

function createTimeInEvent(timeInString) {
    let newEvent = {}
    let general = timeInString.split(" ")
    let date = general[0];
    let hour = parseInt(general[1], 10);
    newEvent["type"] = "TimeIn";
    newEvent["date"] = date;
    newEvent["hour"] = hour;
    this.timeInEvents.push(newEvent);
    return this;  
  }
  
  function createTimeOutEvent(timeInString) {
    let newEvent = {}
    let general = timeInString.split(" ")
    let date = general[0];
    let hour = parseInt(general[1], 10);
    newEvent["type"] = "TimeOut";
    newEvent["date"] = date;
    newEvent["hour"] = hour;
    this.timeOutEvents.push(newEvent);
    return this;  
  }

  function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find( e => e.date === date ).hour;
    let timeOut = this.timeOutEvents.find( e => e.date === date ).hour;
    let hours = timeOut - timeIn;
    let filter = hours < 1000 ? hours.toString().slice(0,1) : hours.toString().slice(0,2);
    return parseInt(filter);
  }

  function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }
  
//   function allWagesFor(cRecord) {
//     let wagesArray = cRecord.timeInEvents.map( e => wagesEarnedOnDate(cRecord, e.date ));
//     return wagesArray.reduce((accumulator, currentValue) => currentValue + accumulator );
//   }
  
  function findEmployeeByFirstName(array, name){
    return array.find( e => e.firstName === name);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((m, e) => m + allWagesFor.call(e), 0);
  }