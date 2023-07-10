function daysLeft(date) {
  const inp = new Date(date).getTime();
  const now = new Date().getTime();
  return Math.floor(Math.abs(inp - now) / (1000 * 60 * 60 * 24));
}

module.exports = daysLeft;
