function remaining() {
  const date = new Date("2023-08-15").getTime();
  const now = new Date().getTime();
  return date - now;
}

module.exports = remaining;
