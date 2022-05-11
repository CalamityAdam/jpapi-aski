(() => {
  // index.ts
  function iscool({ isCoolGuy }) {
    return isCoolGuy ? "cool guy!" : "no cool guy!";
  }
  iscool({ isCoolGuy: true });
})();
