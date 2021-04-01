function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (timeRange1 !== undefined && timeRange2 !== undefined &&
    
      Array.isArray(timeRange1) && Array.isArray(timeRange2) &&

      timeRange1.length === 2 &&
      timeRange2.length === 2 &&

      timeRange1[0].length === 5 && timeRange1[1].length === 5 &&
      timeRange2[0].length === 5 && timeRange2[1].length === 5 &&


      timeRange1[0][0] + timeRange1[0][1] >= 0 &&
      timeRange1[0][0] + timeRange1[0][1] < 24 &&
      timeRange1[0][2] === ':' &&
      timeRange1[0][3] + timeRange1[0][4] >= 0 &&
      timeRange1[0][3] + timeRange1[0][4] < 60 &&

      timeRange1[1][0] + timeRange1[1][1] >= 0 &&
      timeRange1[1][0] + timeRange1[1][1] < 24 &&
      timeRange1[1][2] === ':' &&
      timeRange1[1][3] + timeRange1[1][4] >= 0 &&
      timeRange1[1][3] + timeRange1[1][4] < 60 &&


      timeRange2[0][0] + timeRange2[0][1] >= 0 &&
      timeRange2[0][0] + timeRange2[0][1] < 24 &&
      timeRange2[0][2] === ':' &&
      timeRange2[0][3] + timeRange2[0][4] >= 0 &&
      timeRange2[0][3] + timeRange2[0][4] < 60 &&

      timeRange2[1][0] + timeRange2[1][1] >= 0 &&
      timeRange2[1][0] + timeRange2[1][1] < 24 &&
      timeRange2[1][2] === ':' &&
      timeRange2[1][3] + timeRange2[1][4] >= 0 &&
      timeRange2[1][3] + timeRange2[1][4] < 60 &&


      timeRange1[0] <= timeRange2[1] && timeRange1[1] >= timeRange2[0]) {
    return true;
  }else {
    return false;
  }
}
isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true