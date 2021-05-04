/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  const splitS = s.split('');
  const container = {};
  let start = 0;
  let max = 0;
  splitS.map((x, i) => {
    if (container[x] !== undefined && container[x] >= start) {
      start = container[x] + 1;
    }
    container[x] = i;
    max = Math.max(max, i - start + 1);
  });
  return max;
};
