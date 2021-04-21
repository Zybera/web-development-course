function isTimeRangesIntersect(timeRange1, timeRange2) {
  return isValidTimeRange(timeRange1) &&
    isValidTimeRange(timeRange2) &&
    timeRange1[0] <= timeRange2[1] &&
    timeRange1[1] >= timeRange2[0];
}
function isValidTimeRange(timeRange) {
  return Array.isArray(timeRange) &&
    timeRange.length === 2 &&
    timeRange[0].length === 5 && timeRange[1].length === 5 &&

    timeRange[0][0] + timeRange[0][1] >= 0 &&
    timeRange[0][0] + timeRange[0][1] < 24 &&
    timeRange[0][2] === ':' &&
    timeRange[0][3] + timeRange[0][4] >= 0 &&
    timeRange[0][3] + timeRange[0][4] < 60 &&

    timeRange[1][0] + timeRange[1][1] >= 0 &&
    timeRange[1][0] + timeRange[1][1] < 24 &&
    timeRange[1][2] === ':' &&
    timeRange[1][3] + timeRange[1][4] >= 0 &&
    timeRange[1][3] + timeRange[1][4] < 60;
}
isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true