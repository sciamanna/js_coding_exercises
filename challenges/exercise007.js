/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  let sum = 0;
    while (n) {
        let digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. 
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (end < start ) throw new Error("end must be greater than start");
  if (step === undefined) step = 1;
  if (step < 1) throw new Error("step must be greater than 0");

  let result = [];
  let j = 0;
  for(let i = start; i <= end; i = i + step) {
    result[j] = i;
    j++; 
  }
  return result;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] 
 * as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let results = [];
  let value = 0;
  let screentime = 0;

  for(let i = 0; i < users.length; i++) {
    for(let j = 0; j < users[i].screenTime.length; j++) {
      if (date===users[i].screenTime[j].date) {
        screentime = 0;
        for (let key in users[i].screenTime[j].usage) {
          value = users[i].screenTime[j].usage[key];
          screentime += value;           
        } 
        if ( screentime >= 100)
          results.push(users[i].username);
      }
    }
  }
  return results;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. 
 * A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. 
 * If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, 
 * the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length != 7) throw new Error("hexStr must be in the format #XXXXXX");
  if (!hexStr.startsWith("#")) throw new Error("hexStr must be in the format #XXXXXX");
  
  hexStr = hexStr.substring(1);
  let bigInt = parseInt(hexStr, 16);
  let r = (bigInt >> 16) & 255;
  let g = (bigInt >> 8) & 255;
  let b = bigInt & 255;

  return "rgb(" + r + "," + g + "," + b + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (board.length != 3) throw new Error("board size should be 3x3");

  const boardvalues = [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6]];

  let x = 0;
  let o = 0;
  // check horizontal lines
  for(let i = 0; i < board.length; i++) {
    if (board[i].length != 3) throw new Error("board size should be 3x3");
    for(let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "X")
        x += boardvalues[i][j];
      else if (board[i][j] == "0")
        o += boardvalues[i][j];
    }
    if ( x == 15) return "X";
    if ( o == 15) return "0";
    x = 0, o = 0;
  }
  // check vertical lines
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if (board[j][i] == "X")
        x += boardvalues[i][j];
      else if (board[j][i] == "0")
        o += boardvalues[i][j];
    }
    if ( x == 15) return "X";
    if ( o == 15) return "0";
    x = 0, o = 0;
  }
  // check diagonal lines
  if (board[0][0] == "X")
    x += boardvalues[0][0];
  else if (board[0][0] == "0")
    o += boardvalues[0][0];
  if (board[1][1] == "X")
    x += boardvalues[1][1];
  else if (board[1][1] == "0")
    o += boardvalues[1][1];
  if (board[2][2] == "X")
    x += boardvalues[2][2];
  else if (board[2][2] == "0")
    o += boardvalues[2][2];
  if ( x == 15) return "X";
  if ( o == 15) return "0";
  
  x = 0, o = 0;  

  if (board[0][2] == "X")
    x += boardvalues[0][2];
  else if (board[0][2] == "0")
    o += boardvalues[0][2];
  if (board[1][1] == "X")
    x += boardvalues[1][1];
  else if (board[1][1] == "0")
    o += boardvalues[1][1];
  if (board[2][0] == "X")
    x += boardvalues[2][0];
  else if (board[2][0] == "0")
    o += boardvalues[2][0];
  if ( x == 15) return "X";
  if ( o == 15) return "0";

  return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
