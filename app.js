(function () {
'use strict';
var MG_FIND = [{"n":"Парацетамол","g":"Paracetamol (Acetaminophen)","a":"Ибупрофен|Аспирин|Напроксен","b":{"UA":"Панадол, Парацетамол-Дарниця, Ефералган","ID":"Panadol, Pamol, Tempra","TH":"Sara, Tylenol, Paracetamol GPO","DE":"Paracetamol AL, ben-u-ron","US":"Tylenol, FeverAll","GB":"Paracetamol, Panadol, Calpol","TR":"Parol, Minoset, Calpol","AE":"Panadol, Calpol, Adol","PL":"Apap, Paracetamol, Codipar","IN":"Crocin, Dolo 650, Calpol","FR":"Doliprane, Efferalgan","VN":"Paracetamol DHG, Efferalgan","EG":"Panadol, Adol, Cetal"}},{"n":"Ибупрофен","g":"Ibuprofen","a":"Парацетамол|Напроксен|Диклофенак","b":{"UA":"Нурофен, Ібупрофен-Дарниця","ID":"Ibuprofen Kimia Farma, Profen","TH":"Ibuprofen GPO, Advil","DE":"Ibuprofen AL, Nurofen","US":"Advil, Motrin IB","GB":"Nurofen, Ibuprofen","TR":"Ipren, Advil, Brufen","AE":"Advil, Brufen, Nurofen","PL":"Ibuprom, Nurofen","IN":"Brufen, Combiflam, Ibugesic","FR":"Advil, Nurofen","VN":"Ibuprofen DHG","EG":"Brufen, Algifen"}},{"n":"Аспирин","g":"Acetylsalicylic acid","a":"Ибупрофен|Парацетамол","b":{"UA":"Аспірин Байєр, Аспірин Кардіо","ID":"Aspirin Bayer, Aspilets","TH":"Aspirin GPO, Cardiprin","DE":"Aspirin, ASS","US":"Bayer Aspirin, Ecotrin","GB":"Aspirin, Disprin","TR":"Aspirin, Aspegic","AE":"Aspirin, Cardiprin","PL":"Aspiryna Bayer, Polopiryna","IN":"Aspirin, Ecosprin","FR":"Aspégic, Aspirine","VN":"Aspirin, Aspegic","EG":"Aspirin, Cardiprin"}},{"n":"Напроксен / Налгезин","g":"Naproxen sodium","a":"Ибупрофен|Диклофенак","b":{"UA":"Налгезин, Напроксен","ID":"Naproxen, Xenapro","TH":"Naproxen GPO, Aleve","DE":"Naproxen AL, Dolormin","US":"Aleve, Naprosyn","GB":"Feminax Ultra, Aleve","TR":"Apranax, Naprosyn","AE":"Aleve, Naprosyn","PL":"Apo-Napro, Naproxen","IN":"Naprosyn, Naproxen","FR":"Apranax, Naproxène","VN":"Naproxen","EG":"Apranax, Naproxen"}},{"n":"Лоратадин","g":"Loratadine","a":"Цетиризин|Фексофенадин|Дезлоратадин","b":{"UA":"Кларитин, Лоратадин-Дарниця","ID":"Loratadine, Claritin","TH":"Clarityne, Loratadine GPO","DE":"Loratadin AL, Lisino","US":"Claritin, Alavert","GB":"Clarityn, Boots Allergy","TR":"Claritine, Lorinol","AE":"Claritin, Clarityne","PL":"Claritine, Loratadyna","IN":"Lorfast, Loratadine","FR":"Clarityne, Loratadine","VN":"Loratadine Stada, Claritin","EG":"Claritine, Loratadine"}},{"n":"Цетиризин","g":"Cetirizine hydrochloride","a":"Лоратадин|Фексофенадин","b":{"UA":"Цетрин, Зіртек, Алерза","ID":"Incidal-OD, Cetirizine","TH":"Zyrtec, Cetirizine GPO","DE":"Zyrtec, Cetirizin AL","US":"Zyrtec, Cetirizine","GB":"Zirtek, Piriteze","TR":"Zyrtec, Cetirizin","AE":"Zyrtec, Cetirizine","PL":"Zyrtec, Cetyryzyna","IN":"Zyrtec, Cetzine","FR":"Zyrtec, Cetirizine","VN":"Zyrtec, Cetirizine Stada","EG":"Zyrtec, Cetirizine"}},{"n":"Омепразол","g":"Omeprazole","a":"Пантопразол|Рабепразол|Эзомепразол","b":{"UA":"Омез, Лосек, Гасек","ID":"Omeprazole Dexa, Prosogan","TH":"Losec, Omeprazole GPO","DE":"Omeprazol AL, Antra","US":"Prilosec OTC","GB":"Losec, Omeprazole","TR":"Losec, Omeprazol","AE":"Losec, Omez","PL":"Bioprazol, Helicid","IN":"Omez, Omistat","FR":"Mopral, Zoltum","VN":"Omeprazole Stada","EG":"Losec, Omeprazole"}},{"n":"Пантопразол / Нольпаза","g":"Pantoprazole sodium","a":"Омепразол|Рабепразол|Эзомепразол","b":{"UA":"Нольпаза, Пантопразол","ID":"Pantozol","TH":"Pantozol","DE":"Pantozol, Rifun","US":"Protonix","GB":"Protium","TR":"Pantpas, Pantozol","AE":"Pantozol","PL":"Controloc","IN":"Pantocid, Pan-D","FR":"Inipomp","VN":"Pantoprazole Stada","EG":"Controloc"}},{"n":"Лоперамид","g":"Loperamide hydrochloride","a":"Смекта|Нифуроксазид","b":{"UA":"Імодіум, Лоперамід","ID":"Imodium, Lodia","TH":"Imodium, Loperamide GPO","DE":"Imodium, Lopedium","US":"Imodium AD","GB":"Imodium, Loperamide","TR":"Imodium, Loperamid","AE":"Imodium, Loperamide","PL":"Stoperan, Laremid","IN":"Imodium, Eldoper","FR":"Imodium, Lopéramide","VN":"Imodium, Loperamide DHG","EG":"Imodium, Loperamide"}},{"n":"Смекта","g":"Diosmectite","a":"Полисорб|Энтеросгель|Активированный уголь","b":{"UA":"Смекта, Неосмектин","ID":"Smecta","TH":"Smecta","DE":"Smecta","US":"Smectite (ограниченно)","GB":"Smecta","TR":"Smecta","AE":"Smecta","PL":"Smecta","IN":"Smecta, Diosmectite","FR":"Smecta (оригинал)","VN":"Smecta","EG":"Smecta"}},{"n":"Энтерол","g":"Saccharomyces boulardii","a":"Смекта|Лоперамид|Нифуроксазид","b":{"UA":"Ентерол, Біоентерол","ID":"Enterol, Lacto-B","TH":"Enterol, Florastor","DE":"Perenterol, Enterol","US":"Florastor","GB":"Florastor, Enterol","TR":"Enterol","AE":"Enterol, Florastor","PL":"Enterol, Perenterol","IN":"Econorm, Saccharomyces","FR":"Ultra-levure (оригинал)","VN":"Enterol, Bioflor","EG":"Enterol"}},{"n":"Регидрон","g":"Oral Rehydration Salts","a":"Педиалайт|Смекта","b":{"UA":"Регідрон, Хумана Електроліт","ID":"Oralit, Pedialyte","TH":"ORS, Electrolit","DE":"Oralpädon, Elotrans","US":"Pedialyte, Liquid I.V.","GB":"Dioralyte, Electrolade","TR":"Pedialyte, Rehydran","AE":"Pedialyte, ORS","PL":"Gastrolit, ORS","IN":"Electral, ORS","FR":"GES 45, Adiaril","VN":"Oresol, Hydrite","EG":"Rehydral, ORS"}},{"n":"Маалокс / Алмагель","g":"Aluminium hydroxide + Magnesium hydroxide","a":"Омепразол|Гевискон|Ренни","b":{"UA":"Маалокс, Алмагель","ID":"Maalox, Antasida DOEN","TH":"Maalox, Antacid GPO","DE":"Maalox, Gaviscon","US":"Maalox, Mylanta","GB":"Maalox, Gaviscon","TR":"Maalox, Gelusil","AE":"Maalox, Gelusil","PL":"Maalox, Alugastrin","IN":"Gelusil, Digene","FR":"Maalox (оригинал)","VN":"Maalox, Phosphalugel","EG":"Maalox, Gelusil"}},{"n":"Де-Нол / Пепто-Бисмол","g":"Bismuth subcitrate","a":"Омепразол|Смекта","b":{"UA":"Де-Нол","ID":"De-Nol, Pepto-Bismol","TH":"Pepto-Bismol","DE":"De-Nol","US":"Pepto-Bismol, Kaopectate","GB":"Pepto-Bismol","TR":"Pepto-Bismol","AE":"Pepto-Bismol","PL":"De-Nol, Pepto-Bismol","IN":"Pepto-Bismol","FR":"Pepto-Bismol","VN":"Pepto-Bismol","EG":"Pepto-Bismol"}},{"n":"Но-Шпа / Дротаверин","g":"Drotaverine hydrochloride","a":"Бускопан|Папаверин|Мебеверин","b":{"UA":"Но-Шпа, Дротаверин","ID":"Drotaverine, No-Spa","TH":"No-Spa, Drotaverine","DE":"No-Spa (ограниченно)","US":"Не зарегистрирован","GB":"Buscopan (аналог)","TR":"No-Spa, Drotaver","AE":"No-Spa, Drotaverine","PL":"No-Spa, Drotaweryna","IN":"Drotin, Spasmonil","FR":"Spasfon (аналог)","VN":"No-Spa, Drotaverine DHG","EG":"No-Spa, Drotaverine"}},{"n":"Ксилометазолин / Отривин","g":"Xylometazoline hydrochloride","a":"Нафтизин|Називин|Виброцил","b":{"UA":"Ксилометазолін, Отривін, Длянос","ID":"Otrivin, Rhinofed","TH":"Otrivin, Xylometazoline GPO","DE":"Otrivine, Olynth","US":"Otrivin, Neo-Synephrine","GB":"Otrivine, Sudafed","TR":"Otrivin, Iliadin","AE":"Otrivin, Xymelin","PL":"Otrivin, Xylogel","IN":"Otrivin, Nasivion","FR":"Otrivine, Rhinofluimucil","VN":"Otrivin, Xylometazoline","EG":"Otrivin, Xylometazoline"}},{"n":"Стрепсилс / Фарингосепт","g":"Amylmetacresol + Dichlorobenzyl alcohol","a":"Мирамистин|Хлоргексидин|Тантум Верде","b":{"UA":"Стрепсілс, Фарингосепт, Декатилен","ID":"Strepsils, Dequadin","TH":"Strepsils","DE":"Strepsils, Dolo-Dobendan","US":"Cepacol, Halls","GB":"Strepsils (оригинал)","TR":"Strepsils, Faringosept","AE":"Strepsils","PL":"Strepsils, Falvit","IN":"Strepsils, Cofsils","FR":"Strepsils, Lysopaïne","VN":"Strepsils","EG":"Strepsils"}},{"n":"АЦЦ / Ацетилцистеин","g":"N-Acetylcysteine","a":"Амброксол|Бромгексин","b":{"UA":"АЦЦ, Флуімуцил","ID":"Fluimucil, ACC","TH":"Fluimucil, ACC","DE":"ACC, Fluimucil","US":"Mucomyst, NAC","GB":"Fabrol, NAC","TR":"ACC, Mucosolvan","AE":"ACC, Fluimucil","PL":"ACC, Mucosolvan","IN":"Fluimucil, Mucomix","FR":"Mucomyst, Exomuc","VN":"ACC, Fluimucil","EG":"ACC, Fluimucil"}},{"n":"Амброксол / Лазолван","g":"Ambroxol hydrochloride","a":"Ацетилцистеин|Бромгексин","b":{"UA":"Амброксол, Амбробене, Лазолван","ID":"Mucos, Ambroxol","TH":"Mucosolvan, Ambroxol GPO","DE":"Ambroxol AL, Mucosolvan","US":"Mucosolvan (ограниченно)","GB":"Mucosolvan (ограниченно)","TR":"Mucosolvan, Ambroxol","AE":"Mucosolvan","PL":"Ambroxol, Mucosolvan","IN":"Mucolite, Ambrodil","FR":"Surbronc, Ambroxol","VN":"Mucosolvan, Ambroxol DHG","EG":"Mucosolvan"}},{"n":"Dramamine / Авиа-Море","g":"Dimenhydrinate","a":"Меклизин|Скополамин","b":{"UA":"Авіа-Море, Dramamine","ID":"Antimo, Dramamine","TH":"Dramamine, Bonamine","DE":"Vomex, Dramamine","US":"Dramamine, Bonine","GB":"Joy-Rides, Kwells","TR":"Dramamine","AE":"Dramamine","PL":"Aviomarin, Dramamine","IN":"Avomine, Dramamine","FR":"Mercalm, Nautamine","VN":"Dramamine","EG":"Gravol, Dramamine"}},{"n":"Мелатонин","g":"Melatonin","a":"Доксиламин|Валериана","b":{"UA":"Мелатонін, Меларена","ID":"Melatonin","TH":"Melatonin","DE":"Melatonin, Circadin","US":"Nature Made, Natrol","GB":"Boots Melatonin","TR":"Melatonin","AE":"Melatonin, Nature's Bounty","PL":"Melatonin, Circadin","IN":"Melatonin, Slumber","FR":"Mélatonine, Circadin","VN":"Melatonin","EG":"Melatonin"}},{"n":"Гидрокортизон","g":"Hydrocortisone","a":"Бетаметазон|Мометазон","b":{"UA":"Гідрокортизон, Локоїд","ID":"Hydrocortisone, Desolex","TH":"Hydrocortisone cream","DE":"Hydrocortison AL","US":"Cortizone-10, Cortaid","GB":"HC45, Cortizone","TR":"Hydrocortisone, Alfaderm","AE":"Hydrocortisone, Locoid","PL":"Hydrocortisonum","IN":"Hydrocortisone","FR":"Hydrocortisone, Locoïd","VN":"Hydrocortisone","EG":"Hydrocortisone"}},{"n":"Пантенол / Бепантен","g":"Dexpanthenol","a":"Цинковая мазь|Солкосерил","b":{"UA":"Пантенол, Бепантен","ID":"Bepanthen","TH":"Bepanthen","DE":"Bepanthen, Panthenol","US":"Aquaphor, Panthenol","GB":"Bepanthen","TR":"Bepanthen","AE":"Bepanthen","PL":"Bepanthen, Panthenol","IN":"Bepanthen","FR":"Bepanthen","VN":"Bepanthen","EG":"Bepanthen"}},{"n":"Фенистил гель","g":"Dimethindene maleate 0.1%","a":"Гидрокортизон|Псило-бальзам|Лоратадин","b":{"UA":"Фенистил гель","ID":"Fenistil gel","TH":"Fenistil gel","DE":"Fenistil Gel (оригинал)","US":"Benadryl gel (аналог)","GB":"Anthisan cream (аналог)","TR":"Fenistil jel","AE":"Fenistil gel","PL":"Fenistil żel","IN":"Fenistil, Avil cream","FR":"Phénistil gel","VN":"Fenistil gel","EG":"Fenistil gel"}},{"n":"Клотримазол / Канестен","g":"Clotrimazole","a":"Флуконазол|Миконазол|Тербинафин","b":{"UA":"Клотримазол, Кандид, Канестен","ID":"Canesten, Fungiderm","TH":"Canesten","DE":"Canesten, Clotrimazol","US":"Lotrimin AF, Cruex","GB":"Canesten, Clotrimazole","TR":"Canesten, Lotrifen","AE":"Canesten, Candid","PL":"Canesten","IN":"Canesten, Candid B","FR":"Mycohydralin","VN":"Canesten","EG":"Canesten"}},{"n":"Тербинафин / Ламизил","g":"Terbinafine hydrochloride","a":"Клотримазол|Флуконазол","b":{"UA":"Ламізил, Тербінафін","ID":"Lamisil","TH":"Lamisil","DE":"Lamisil","US":"Lamisil AT","GB":"Lamisil","TR":"Lamisil","AE":"Lamisil","PL":"Lamisil","IN":"Terbicip, Lamisil","FR":"Lamisil","VN":"Lamisil","EG":"Lamisil"}},{"n":"Флуконазол / Дифлюкан","g":"Fluconazole","a":"Клотримазол|Нистатин","b":{"UA":"Флуконазол, Дифлюкан","ID":"Diflucan, Fluconazole","TH":"Diflucan","DE":"Diflucan, Fluconazol","US":"Diflucan, Fluconazole","GB":"Diflucan, Fluconazole","TR":"Diflucan, Flukonazol","AE":"Diflucan","PL":"Diflucan, Flukonazol","IN":"Fluconac, Zocon","FR":"Triflucan","VN":"Diflucan","EG":"Diflucan"}},{"n":"Ацикловир / Зовиракс","g":"Aciclovir","a":"Валацикловир|Фамцикловир","b":{"UA":"Ацикловір, Зовіракс","ID":"Zovirax, Acyclovir","TH":"Zovirax","DE":"Zovirax, Aciclovir AL","US":"Zovirax","GB":"Zovirax, Aciclovir","TR":"Zovirax","AE":"Zovirax","PL":"Zovirax, Heviran","IN":"Zovirax, Acivir","FR":"Zovirax","VN":"Zovirax","EG":"Zovirax"}},{"n":"Бетадин","g":"Povidone-iodine","a":"Мирамистин|Хлоргексидин","b":{"UA":"Бетадин, Йодовідон","ID":"Betadine","TH":"Betadine","DE":"Betaisodona","US":"Betadine","GB":"Betadine, Videne","TR":"Batticon, Betadine","AE":"Betadine","PL":"Betadine","IN":"Betadine, Savlon","FR":"Bétadine","VN":"Betadine","EG":"Betadine"}},{"n":"Хлоргексидин","g":"Chlorhexidine digluconate","a":"Мирамистин|Бетадин","b":{"UA":"Хлоргексидин, Гексикон","ID":"Chlorhexidine, Hibiclens","TH":"Chlorhexidine, Corsodyl","DE":"Chlorhexamed, Corsodyl","US":"Hibiclens, Betasept","GB":"Corsodyl, Hibiscrub","TR":"Corsodyl","AE":"Chlorhexidine, Corsodyl","PL":"Chlorheksydyna, Corsodyl","IN":"Savlon, Dettol","FR":"Chlorhexidine, Corsodyl","VN":"Chlorhexidine","EG":"Corsodyl"}}];
class App {
  buildEarth() {
    const R = 152, CX = 200, CY = 200, D = Math.PI / 180;
    const lon0 = -20 * D, tilt = 16 * D;
    const ct = Math.cos(tilt), st = Math.sin(tilt);
    const project = (lat, lon) => {
      const la = lat * D, lo = lon * D - lon0;
      const x = Math.cos(la) * Math.sin(lo);
      const y = Math.sin(la);
      const z = Math.cos(la) * Math.cos(lo);
      const y2 = y * ct - z * st;
      const z2 = y * st + z * ct;
      return [CX + x * R, CY - y2 * R, z2];
    };
    // Schematic continent outlines as [lon,lat,...] (orthographic land mask)
    const LAND = [
      [-168,66,-160,71,-140,70,-120,72,-100,74,-82,74,-60,68,-60,60,-78,52,-64,49,-55,50,-56,44,-67,44,-70,41,-74,40,-76,35,-81,31,-81,25,-90,30,-94,29,-97,26,-98,20,-105,20,-106,23,-110,23,-112,29,-117,32,-122,37,-124,42,-124,48,-130,54,-138,58,-150,59,-160,62,-168,66],
      [-45,60,-30,60,-20,66,-22,73,-30,80,-45,83,-60,81,-55,72,-52,64,-45,60],
      [-78,9,-70,12,-60,11,-52,5,-50,0,-44,-3,-35,-6,-35,-12,-39,-18,-48,-25,-54,-34,-58,-39,-65,-46,-69,-52,-75,-52,-74,-45,-72,-37,-71,-25,-70,-15,-76,-6,-81,-4,-80,2,-78,9],
      [-10,36,-9,44,-4,48,1,49,-2,52,3,52,5,58,8,63,12,66,20,70,30,71,42,67,50,62,60,60,55,52,40,48,32,45,28,46,24,41,20,40,15,40,19,46,13,46,8,44,3,43,-2,40,-10,36],
      [-17,21,-16,15,-12,8,-8,5,-2,5,5,5,9,4,9,-1,13,-6,12,-16,15,-26,20,-35,26,-34,33,-26,40,-16,41,-4,43,3,51,12,44,12,43,16,37,22,34,28,32,31,25,32,20,32,11,37,10,34,0,35,-6,36,-12,30,-16,28,-17,21],
      [26,40,35,42,40,40,48,40,50,45,57,52,60,56,68,57,78,55,90,56,100,58,110,57,120,55,128,52,135,55,142,54,145,47,138,43,132,42,128,40,125,38,122,31,121,24,110,21,108,15,104,9,100,4,103,1,97,7,93,18,88,21,82,18,77,8,73,18,68,24,62,25,57,26,52,29,48,30,43,38,35,36,28,37,26,40],
      [114,-22,122,-18,130,-12,137,-12,143,-11,147,-20,151,-25,153,-31,149,-37,141,-38,136,-35,130,-32,123,-34,116,-35,114,-28,114,-22],
      [130,31,136,35,140,38,142,42,140,43,136,37,131,33,130,31],
      [43,-13,50,-16,50,-25,45,-25,43,-18,43,-13],
      [131,-1,141,-3,148,-6,150,-10,141,-9,133,-4,131,-1],
      [-6,50,-2,51,-3,58,-8,57,-10,53,-6,50],
      [167,-45,172,-41,175,-37,178,-38,174,-42,170,-46,167,-45]
    ];
    const pip = (lon, lat, p) => {
      let inside = false;
      for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
        const xi = p[i], yi = p[i + 1], xj = p[j], yj = p[j + 1];
        if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
      }
      return inside;
    };
    const isLand = (lon, lat) => { for (const p of LAND) if (pip(lon, lat, p)) return true; return false; };

    const els = [];
    // graticule
    const addLine = (pts, op, w, col) => {
      let d = '', on = false;
      for (const [lat, lon] of pts) {
        const [sx, sy, z] = project(lat, lon);
        if (z > 0.02) { d += (on ? 'L' : 'M') + sx.toFixed(1) + ' ' + sy.toFixed(1) + ' '; on = true; }
        else on = false;
      }
      if (d) els.push(React.createElement('path', { key: 'L' + els.length, d: d.trim(), fill: 'none', stroke: col, strokeOpacity: op, strokeWidth: w, strokeLinecap: 'round' }));
    };
    [-60, -30, 0, 30, 60].forEach(lat => {
      const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push([lat, lon]);
      addLine(pts, lat === 0 ? 0.5 : 0.28, lat === 0 ? 1.3 : 1, '#cdf7ea');
    });
    [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].forEach(lon => {
      const pts = []; for (let lat = -88; lat <= 88; lat += 3) pts.push([lat, lon]);
      addLine(pts, 0.3, 1, '#cdf7ea');
    });
    // land dots
    for (let lat = -78; lat <= 72; lat += 3.6) {
      const step = 3.6 / Math.max(0.26, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) {
        if (!isLand(lon, lat)) continue;
        const [sx, sy, z] = project(lat, lon);
        if (z <= 0.05) continue;
        els.push(React.createElement('circle', {
          key: 'p' + lat.toFixed(1) + '_' + lon.toFixed(1),
          cx: sx.toFixed(1), cy: sy.toFixed(1),
          r: (0.7 + z * 1.7).toFixed(2),
          fill: '#5fe7aa',
          opacity: (0.24 + z * 0.6).toFixed(2)
        }));
      }
    }
    // pulsing location beacons on the visible hemisphere (global coverage)
    const pins = [[51, 0], [40, -74], [-22, -46], [30, 31], [37, -6]];
    pins.forEach((c, i) => {
      const [sx, sy, z] = project(c[0], c[1]);
      if (z <= 0.2) return;
      els.push(React.createElement('g', { key: 'pin' + i, transform: 'translate(' + sx.toFixed(1) + ' ' + sy.toFixed(1) + ')' }, [
        React.createElement('circle', { key: 'r', r: 5, fill: 'none', stroke: '#c3f9de', strokeWidth: 1.4, style: { transformBox: 'fill-box', transformOrigin: 'center', animation: 'mgPing 2.8s ease-out ' + (i * 0.5) + 's infinite' } }),
        React.createElement('circle', { key: 'h', r: 2.5, fill: '#eafff5' }),
        React.createElement('circle', { key: 'c', r: 1, fill: '#ffffff' })
      ]));
    });
    return React.createElement('g', {}, els);
  }
  state = { tileW: 116 };
  _tiles = 12;
  componentDidMount() {
    this._measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => this._measure());
    setTimeout(() => this._measure(), 400);
    this._initMotion();
    this._initGlobe();
    setTimeout(() => this._initGlobe(), 300);
    this._initParticles();
    setTimeout(() => this._initParticles(), 300);
    this._initAiDemo();
    this._initPhone();
    setTimeout(() => this._initPhone(), 300);
    this._initScrollCards();
    setTimeout(() => this._initScrollCards(), 300);
    this._initUI();
    this._initHoverStyles();
    this._initFindDemo();
    this._initMiniGlobe();
    this._captureRef();
    this._initFirstAidDemo();
  }
  _initFirstAidDemo() {
    const dataEl = document.getElementById('faData');
    const tabs = document.getElementById('faTabs');
    const card = document.getElementById('faCard');
    if (!dataEl || !tabs || !card) return;
    let data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { return; }
    if (!data || !data.length) return;
    const esc = function (s) {
      return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };
    const render = function (i) {
      const c = data[i];
      for (let j = 0; j < tabs.children.length; j++) {
        const on = j === i;
        tabs.children[j].className = 'faTab' + (on ? ' faTabOn' : '');
        tabs.children[j].setAttribute('aria-selected', on ? 'true' : 'false');
      }
      let h = '<div class="faTtl">' + esc(c.title) + '</div>';
      if (c.sub) h += '<div class="faSub">' + esc(c.sub) + '</div>';
      if (c.danger) h += '<div class="faDanger">' + esc(c.danger) + '</div>';
      h += '<ol class="faSteps">';
      for (let s = 0; s < c.steps.length; s++) {
        const st = c.steps[s];
        const cl = st.color === 'ok' ? ' faOk' : (st.color === 'warn' ? ' faWarn' : '');
        h += '<li class="faStep' + cl + '"><div class="faStepTtl">' + esc(st.ttl) + '</div>' + (st.txt ? '<div class="faStepTxt">' + esc(st.txt) + '</div>' : '') + '</li>';
      }
      h += '</ol>';
      card.innerHTML = h;
    };
    for (let i = 0; i < data.length; i++) {
      (function (idx) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'faTab';
        b.setAttribute('role', 'tab');
        b.textContent = data[idx].label;
        b.addEventListener('click', function () { render(idx); });
        tabs.appendChild(b);
      })(i);
    }
    render(0);
  }
  _captureRef() {
    try {
      const p = new URLSearchParams(location.search);
      let src = p.get('ref') || p.get('utm_source') || '';
      const camp = p.get('utm_campaign');
      if (camp) src = src ? (src + '/' + camp) : camp;
      if (!src && document.referrer) {
        try { const h = new URL(document.referrer).hostname.replace(/^www\./, ''); if (h && h !== location.hostname) src = h; } catch (e) {}
      }
      if (src && !localStorage.getItem('mg_src')) localStorage.setItem('mg_src', String(src).slice(0, 40));
    } catch (e) {}
  }
  _initHoverStyles() {
    if (this._hovS) return; this._hovS = true;
    if (!window.matchMedia || !window.matchMedia('(hover:hover)').matches) return;
    document.querySelectorAll('[style-hover]').forEach(el => {
      const base = el.getAttribute('style') || '';
      const hov = el.getAttribute('style-hover');
      if (!hov) return;
      el.addEventListener('mouseenter', () => { el.setAttribute('style', base + ';' + hov); });
      el.addEventListener('mouseleave', () => { el.setAttribute('style', base); });
    });
  }
  _initFindDemo() {
    if (this._find) return; this._find = true;
    const lang = (document.documentElement.lang || 'ru').slice(0, 2);
    const FLAGCC = { '\u{1F1FA}\u{1F1E6}': 'UA', '\u{1F1FA}\u{1F1F8}': 'US', '\u{1F1E9}\u{1F1EA}': 'DE', '\u{1F1EB}\u{1F1F7}': 'FR', '\u{1F1EE}\u{1F1F3}': 'IN', '\u{1F1EE}\u{1F1E9}': 'ID', '\u{1F1EC}\u{1F1E7}': 'GB', '\u{1F1F9}\u{1F1F7}': 'TR', '\u{1F1F5}\u{1F1F1}': 'PL', '\u{1F1FB}\u{1F1F3}': 'VN', '\u{1F1E6}\u{1F1EA}': 'AE', '\u{1F1F9}\u{1F1ED}': 'TH', '\u{1F1EA}\u{1F1EC}': 'EG' };
    const norm = (t) => (t || '').toLowerCase().replace(/\u0451/g, '\u0435').trim();
    // live find demo
    const inp = document.getElementById('mgFindIn');
    const sel = document.getElementById('mgFindCC');
    const out = document.getElementById('mgFindOut');
    if (inp && sel && out) {
      const inAppTxt = lang === 'uk' ? '\u0414\u043e\u0437\u0443\u0432\u0430\u043d\u043d\u044f, \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u0436\u0435\u043d\u043d\u044f \u0439 \u0446\u0456\u043d\u0438 \u2014 \u0443 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443.' : (lang === 'en' ? 'Dosages, warnings and prices \u2014 in the app.' : '\u0414\u043e\u0437\u0438\u0440\u043e\u0432\u043a\u0438, \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f \u0438 \u0446\u0435\u043d\u044b \u2014 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438.');
      const missTxt = lang === 'uk'
        ? '\u0423 \u0434\u0435\u043c\u043e \u043b\u0438\u0448\u0435 30 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u0456\u0432 \u2014 \u0443 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0443 \u0457\u0445 3250. <a href="#mgNotifyForm" style="color:var(--accent)">\u0414\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f \u043f\u0440\u043e \u0440\u0435\u043b\u0456\u0437 \u2192</a>'
        : (lang === 'en'
        ? 'The demo covers only 30 medications \u2014 the app has 3250. <a href="#mgNotifyForm" style="color:var(--accent)">Join the waitlist \u2192</a>'
        : '\u0412 \u0434\u0435\u043c\u043e \u0442\u043e\u043b\u044c\u043a\u043e 30 \u043f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u043e\u0432 \u2014 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438\u0445 3250. <a href="#mgNotifyForm" style="color:var(--accent)">\u0423\u0437\u043d\u0430\u0442\u044c \u043e \u0440\u0435\u043b\u0438\u0437\u0435 \u2192</a>');
      const render = () => {
        const q = norm(inp.value);
        if (q.length < 2) { out.innerHTML = ''; return; }
        let hit = null;
        for (const d of MG_FIND) {
          if ((norm(d.n) + '|' + norm(d.g)).indexOf(q) >= 0) { hit = d; break; }
        }
        if (!hit) for (const d of MG_FIND) {
          if (!d._hay) { const bs = Object.keys(d.b).map(k => d.b[k]).join('|'); d._hay = norm(d.a) + '|' + norm(bs); }
          if (d._hay.indexOf(q) >= 0) { hit = d; break; }
        }
        if (!hit) { out.innerHTML = missTxt; return; }
        const cc = sel.value;
        const label = sel.options[sel.selectedIndex].text;
        const primary = lang === 'en' ? hit.g : hit.n;
        const secondary = lang === 'en' ? '' : ' <span style="color:#7e988d">(' + hit.g + ')</span>';
        out.innerHTML = '<b style="color:#eaf4ee">' + primary + '</b>' + secondary + ' \u2014 ' + label + ': <b style="color:var(--accent)">' + hit.b[cc] + '</b><br><span style="color:#7e988d;font-size:13px">' + inAppTxt + '</span>';
      };
      inp.addEventListener('input', render);
      sel.addEventListener('change', render);
    }
    // country row: show the local paracetamol names on hover/tap
    const bar = document.getElementById('mgCExample');
    if (bar) {
      const para = MG_FIND[0];
      const pLabel = lang === 'en' ? 'paracetamol' : '\u043f\u0430\u0440\u0430\u0446\u0435\u0442\u0430\u043c\u043e\u043b';
      document.querySelectorAll('.mgCountry').forEach(card => {
        const flagEl = card.querySelector('span');
        const nameEl = card.querySelectorAll('span')[1];
        if (!flagEl || !nameEl) return;
        const cc = FLAGCC[flagEl.textContent.trim()];
        if (!cc || !para.b[cc]) return;
        card.style.cursor = 'pointer';
        const show = () => { bar.innerHTML = flagEl.textContent + ' <b style="color:#eaf4ee">' + nameEl.textContent + '</b>: ' + pLabel + ' \u2014 <b style="color:var(--accent)">' + para.b[cc] + '</b>'; };
        card.addEventListener('pointerenter', show);
        card.addEventListener('click', show);
      });
    }
  }
  _initUI() {
    if (this._ui) return; this._ui = true;
    // hide loader once ready
    const loader = document.getElementById('mgLoader');
    if (loader) {
      const hide = () => loader.classList.add('mgGone');
      if (document.readyState === 'complete') setTimeout(hide, 500);
      else window.addEventListener('load', () => setTimeout(hide, 400));
      setTimeout(hide, 2600);
    }
    // mobile menu
    const menu = document.getElementById('mgMobileMenu');
    const burger = document.getElementById('mgBurger');
    const closeBtn = document.getElementById('mgMenuClose');
    const backdrop = document.getElementById('mgMenuBackdrop');
    if (menu && burger) {
      const open = () => { menu.style.display = 'block'; requestAnimationFrame(() => menu.classList.add('mgOpen')); document.body.style.overflow = 'hidden'; };
      const close = () => { menu.classList.remove('mgOpen'); document.body.style.overflow = ''; setTimeout(() => { menu.style.display = 'none'; }, 350); };
      burger.addEventListener('click', open);
      if (closeBtn) closeBtn.addEventListener('click', close);
      if (backdrop) backdrop.addEventListener('click', close);
      menu.querySelectorAll('.mgMenuLink').forEach(a => a.addEventListener('click', close));
    }
    // sticky download bar — show after hero, hide near the CTA
    const bar = document.getElementById('mgStickyBar');
    const cta = document.getElementById('najti');
    if (bar) {
      const demo = document.getElementById('demo');
      const onScroll = () => {
        if (bar.dataset.hidden === '1') return;
        const past = window.scrollY > window.innerHeight * 0.75;
        let block = false;
        for (const el of [cta, demo]) {
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) { block = true; break; }
        }
        bar.style.transform = (past && !block) ? 'translateY(0)' : 'translateY(120%)';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      // прячем бар при фокусе на поле ввода, чтобы не перекрывать клавиатуру
      document.addEventListener('focusin', (e) => {
        if (e.target && e.target.matches && e.target.matches('input,textarea')) {
          bar.dataset.hidden = '1';
          bar.style.transform = 'translateY(120%)';
        }
      });
      document.addEventListener('focusout', () => { bar.dataset.hidden = ''; onScroll(); });
      onScroll();
    }
    const form = document.getElementById('mgNotifyForm');
    const ok = document.getElementById('mgNotifyOk');
    const errBox = document.getElementById('mgNotifyErr');
    const btn = document.getElementById('mgNotifyBtn');
    const emailInput = document.getElementById('mgNotifyEmail');
    if (form && ok) {
      const self = this;
      const pageLang = (document.documentElement.lang || 'ru').slice(0, 2);
      const sendingTxt = pageLang === 'uk' ? 'Надсилаємо…' : (pageLang === 'en' ? 'Sending…' : 'Отправляем…');
      const failTxt = pageLang === 'uk' ? 'Не вдалося надіслати. Перевірте інтернет і спробуйте ще раз.' : (pageLang === 'en' ? 'Could not send. Check your connection and try again.' : 'Не удалось отправить. Проверьте интернет и попробуйте ещё раз.');
      const btnLabel = btn ? btn.textContent : '';
      document.querySelectorAll('a[href="#mgNotifyForm"]').forEach(a => {
        a.addEventListener('click', () => { setTimeout(() => { if (emailInput && form.style.display !== 'none') emailInput.focus(); }, 500); });
      });
      const cntEl = document.getElementById('mgWaitCount');
      if (cntEl) {
        fetch('/api/count').then(r => r.ok ? r.json() : null).then(d => {
          const n = d && d.count;
          if (!n || n < 25) return;
          let word;
          if (pageLang === 'en') word = n === 1 ? 'traveller is' : 'travellers are';
          else {
            const m10 = n % 10, m100 = n % 100;
            const few = m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14);
            const one = m10 === 1 && m100 !== 11;
            word = pageLang === 'uk' ? (one ? 'мандрівник вже чекає' : (few ? 'мандрівники вже чекають' : 'мандрівників вже чекають')) : (one ? 'путешественник уже ждёт' : (few ? 'путешественника уже ждут' : 'путешественников уже ждут'));
          }
          cntEl.textContent = pageLang === 'en' ? (n + ' ' + word + ' waiting for the release') : (n + ' ' + word + ' релиз');
          if (pageLang === 'uk') cntEl.textContent = n + ' ' + word + ' на реліз';
          cntEl.style.display = 'block';
        }).catch(() => {});
      }
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = (emailInput && emailInput.value || '').trim();
        if (!email) return;
        if (errBox) errBox.style.display = 'none';
        if (btn) { btn.disabled = true; btn.textContent = sendingTxt; btn.style.opacity = '0.7'; }
        try {
          const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, lang: pageLang, source: (function () { try { return localStorage.getItem('mg_src') || 'direct'; } catch (e) { return 'direct'; } })() }),
          });
          if (!res.ok) { const e429 = new Error('bad status ' + res.status); e429.rate = res.status === 429; throw e429; }
          form.style.display = 'none'; ok.style.display = 'flex';
          self._blip();
        } catch (err) {
          if (btn) { btn.disabled = false; btn.textContent = btnLabel; btn.style.opacity = '1'; }
          const rateTxt = pageLang === 'uk' ? 'Забагато спроб — зачекайте хвилину і спробуйте ще раз.' : (pageLang === 'en' ? 'Too many attempts — wait a minute and try again.' : 'Слишком много попыток — подождите минуту и попробуйте ещё раз.');
          if (errBox) { errBox.textContent = (err && err.rate) ? rateTxt : failTxt; errBox.style.display = 'block'; }
        }
      });
    }
  }
  _initScrollCards() {
    if (this._sc) return;
    if (!(window.matchMedia && window.matchMedia('(hover:none)').matches)) return;
    const cards = [...document.querySelectorAll('[style*="border-radius: 18px"]')].filter(c => c.querySelector('h3'));
    if (!cards.length) return;
    this._sc = true;
    if (!('IntersectionObserver' in window)) { cards.forEach(c => c.classList.add('mgFocus')); return; }
    // A card is "open" while it sits inside the central viewport band, and
    // collapses as it leaves. IntersectionObserver = no per-frame scroll math,
    // no single-card "snapping" → smooth reveal.
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.target.classList.toggle('mgFocus', e.isIntersecting));
    }, { rootMargin: '-24% 0px -34% 0px', threshold: 0 });
    cards.forEach(c => io.observe(c));
  }
  _initPhone() {
    if (this._ph) return;
    const kak = document.getElementById('kak');
    if (!kak) return;
    const screens = [...kak.querySelectorAll('.mgScreen')];
    const tabs = [...kak.querySelectorAll('.mgTab')];
    if (screens.length < 3 || tabs.length < 3) return;
    this._ph = true;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const typing = document.getElementById('mgPhoneTyping');
    const ans = document.getElementById('mgPhoneAns');
    let i = 0;
    const show = (n) => {
      screens.forEach((s, k) => s.classList.toggle('mgOn', k === n));
      tabs.forEach((t, k) => { t.style.color = (k === n) ? 'var(--accent)' : '#6f8d80'; });
      if (n === 1 && typing && ans) {
        typing.style.display = 'flex'; ans.style.opacity = '0'; ans.style.transition = 'opacity .4s ease';
        clearTimeout(this._phT);
        this._phT = setTimeout(() => { typing.style.display = 'none'; ans.style.opacity = '1'; }, 1100);
      } else if (typing && ans) {
        typing.style.display = 'none'; ans.style.opacity = '1';
      }
    };
    show(0);
    this._phI = setInterval(() => { i = (i + 1) % 3; show(i); }, 3600);
  }
  _aiAnswer(q, preset) {
    var L = (document.documentElement.lang || 'ru').slice(0, 2);
    var en = L === 'en';
    var uk = L === 'uk';
    var ANS = en ? {
      'Sore throat and fever 37.8': 'It could be a cold or a viral infection. Rest and warm fluids; for fever or pain \u2014 paracetamol at an age-appropriate dose. If it doesn\u2019t improve in 3 days \u2014 see a doctor.',
      'Severe headache for a second day': 'Most often this is tension, dehydration or lack of sleep. Rest, water, paracetamol. If the pain is sudden, with nausea or vision changes \u2014 see a doctor urgently.',
      'Can I take ibuprofen with aspirin': 'Both are NSAIDs; combining them without a doctor\u2019s advice is not recommended \u2014 higher risk for the stomach. In the app this combination is flagged as "use with caution".'
    } : {
      '\u0411\u043e\u043b\u0438\u0442 \u0433\u043e\u0440\u043b\u043e \u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 37.8': '\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0443\u0434\u0430 \u0438\u043b\u0438 \u041e\u0420\u0412\u0418. \u041f\u043e\u043a\u043e\u0439 \u0438 \u0442\u0451\u043f\u043b\u043e\u0435 \u043f\u0438\u0442\u044c\u0451; \u043f\u0440\u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0438 \u2014 \u043f\u0430\u0440\u0430\u0446\u0435\u0442\u0430\u043c\u043e\u043b \u0432 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439 \u0434\u043e\u0437\u0435. \u0415\u0441\u043b\u0438 \u043d\u0435 \u043b\u0435\u0433\u0447\u0435 3 \u0434\u043d\u044f \u2014 \u043a \u0432\u0440\u0430\u0447\u0443.',
      '\u0421\u0438\u043b\u044c\u043d\u0430\u044f \u0433\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0434\u0435\u043d\u044c': '\u0427\u0430\u0449\u0435 \u044d\u0442\u043e \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435, \u043e\u0431\u0435\u0437\u0432\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u0435\u0434\u043e\u0441\u044b\u043f. \u041e\u0442\u0434\u044b\u0445, \u0432\u043e\u0434\u0430, \u043f\u0430\u0440\u0430\u0446\u0435\u0442\u0430\u043c\u043e\u043b. \u0415\u0441\u043b\u0438 \u0431\u043e\u043b\u044c \u0440\u0435\u0437\u043a\u0430\u044f, \u0441 \u0442\u043e\u0448\u043d\u043e\u0442\u043e\u0439 \u0438\u043b\u0438 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435\u043c \u0437\u0440\u0435\u043d\u0438\u044f \u2014 \u0441\u0440\u043e\u0447\u043d\u043e \u043a \u0432\u0440\u0430\u0447\u0443.',
      '\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0438\u0431\u0443\u043f\u0440\u043e\u0444\u0435\u043d \u0441 \u0430\u0441\u043f\u0438\u0440\u0438\u043d\u043e\u043c': '\u041e\u0431\u0430 \u2014 \u041d\u041f\u0412\u041f, \u0441\u043e\u0432\u043c\u0435\u0449\u0430\u0442\u044c \u0431\u0435\u0437 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0440\u0430\u0447\u0430 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f: \u0432\u044b\u0448\u0435 \u0440\u0438\u0441\u043a \u0434\u043b\u044f \u0436\u0435\u043b\u0443\u0434\u043a\u0430. \u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0442\u0430\u043a\u043e\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u00ab\u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e\u0441\u0442\u0438\u00bb.'
    };
    if (uk) ANS = {
      'Болить горло і температура 37.8': 'Це може бути застуда або ГРВІ. Спокій і тепле пиття; за температури чи болю — парацетамол у віковій дозі. Якщо не легшає 3 дні — до лікаря.',
      'Сильний головний біль другий день': 'Найчастіше це напруження, зневоднення або недосипання. Відпочинок, вода, парацетамол. Якщо біль різкий, з нудотою чи порушенням зору — терміново до лікаря.',
      'Чи можна приймати ібупрофен з аспірином': 'Обидва — НПЗП, поєднувати без призначення лікаря не рекомендується: вищий ризик для шлунка. У застосунку таке поєднання позначається як «потребує обережності».'
    };
    if (preset && ANS[preset]) return ANS[preset];
    return uk
      ? 'Це демо — повні відповіді доступні в застосунку. Залиште пошту у формі нижче — надішлемо посилання в день релізу, і ви зможете поставити AI-асистенту своє запитання. Памʼятайте: застосунок не замінює консультацію лікаря.'
      : en
      ? 'This is a demo — full answers are available in the app. Leave your email in the form below and we will send you the link on release day, so you can ask the AI assistant your own question. Remember: the app does not replace a medical consultation.'
      : 'Это демо — полные ответы доступны в приложении. Оставьте почту в форме ниже — пришлём ссылку в день релиза, и вы сможете задать AI-ассистенту свой вопрос. Помните: приложение не заменяет консультацию врача.';
  }
  _initAiDemo() {
    if (this._ai) return;
    const out = document.getElementById('mgAiOut'), input = document.getElementById('mgAiInput'), send = document.getElementById('mgAiSend'), userBubble = document.getElementById('mgAiUser');
    if (!out || !input || !send) return;
    this._ai = true;
    const type = (text) => {
      if (this._typeTimer) clearInterval(this._typeTimer);
      out.textContent = ''; let i = 0;
      this._typeTimer = setInterval(() => {
        out.textContent = text.slice(0, ++i);
        if (i >= text.length) clearInterval(this._typeTimer);
      }, 16);
    };
    const ask = (q, preset) => {
      if (!q || !q.trim()) return;
      q = q.slice(0, 120);
      if (userBubble) { userBubble.textContent = q; userBubble.style.display = 'block'; }
      out.textContent = '…';
      this._blip();
      setTimeout(() => type(this._aiAnswer(q, preset)), 480);
    };
    send.addEventListener('click', () => { ask(input.value); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') ask(input.value); });
    document.querySelectorAll('.mgChip').forEach(c => c.addEventListener('click', () => { const q = c.getAttribute('data-q'); input.value = q; ask(q, q); }));
  }
  _initParticles() {
    const cv = document.getElementById('mgParticles');
    if (!cv || this._pt) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this._pt = true;
    const ctx = cv.getContext('2d');
    let W, H, lastW = 0, dpr = Math.min(1.5, window.devicePixelRatio || 1), parts = [];
    const resize = () => {
      W = window.innerWidth; H = window.innerHeight; lastW = W;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(94, W / 15));
      parts = [];
      for (let i = 0; i < n; i++) {
        const rnd = Math.random();
        const kind = rnd < 0.5 ? 'dot' : (rnd < 0.78 ? 'capsule' : 'cross');
        const big = kind !== 'dot' && Math.random() < 0.34;
        const tintRnd = Math.random();
        const tint = tintRnd < 0.38 ? '120,240,200' : (tintRnd < 0.68 ? '255,255,255' : (tintRnd < 0.84 ? '255,96,124' : '255,52,88'));
        const warm = tintRnd >= 0.38;
        parts.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.7 + 0.5, vx: (Math.random() - 0.5) * 0.16, vy: -(Math.random() * 0.22 + 0.05), a: big ? (Math.random() * 0.14 + 0.09) : (Math.random() * 0.5 + (warm ? 0.34 : 0.2)), tw: Math.random() * Math.PI * 2, kind, tint, sz: big ? (Math.random() * 16 + 26) : (Math.random() * 6 + 9), rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * (big ? 0.0035 : 0.006), big });
      }
    };
    resize();
    window.addEventListener('resize', () => { if (window.innerWidth === lastW) return; resize(); }, { passive: true });
    const capMsP = (window.matchMedia && window.matchMedia('(hover:none)').matches) ? ((window.devicePixelRatio || 1) > 2.5 ? 44 : 32) : 0;
    let lastFP = -1e9;
    const loop = (t) => {
      if (t - lastFP < capMsP) { this._ptRaf = requestAnimationFrame(loop); return; }
      lastFP = t;
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        const margin = p.kind === 'dot' ? 6 : 20;
        if (p.y < -margin) { p.y = H + margin; p.x = Math.random() * W; }
        if (p.x < -margin) p.x = W + margin; if (p.x > W + margin) p.x = -margin;
        const tw = 0.55 + 0.45 * Math.sin(t / 1000 + p.tw);
        const al = p.a * tw;
        if (p.kind === 'dot') {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
          ctx.fillStyle = 'rgba(' + p.tint + ',' + al.toFixed(3) + ')';
          ctx.fill();
        } else if (p.kind === 'capsule') {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.strokeStyle = 'rgba(' + p.tint + ',' + (al * 0.75).toFixed(3) + ')'; ctx.lineWidth = p.big ? 1.8 : 1.1;
          const w = p.sz, h = p.sz * 0.42, r = h / 2;
          ctx.beginPath(); ctx.moveTo(-w / 2 + r, -h / 2); ctx.lineTo(w / 2 - r, -h / 2); ctx.arc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2); ctx.lineTo(-w / 2 + r, h / 2); ctx.arc(-w / 2 + r, 0, r, Math.PI / 2, -Math.PI / 2); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, -h / 2); ctx.lineTo(0, h / 2); ctx.stroke();
          ctx.restore();
        } else {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.strokeStyle = 'rgba(' + p.tint + ',' + (al * 0.8).toFixed(3) + ')'; ctx.lineWidth = p.big ? 1.8 : 1.1;
          const a2 = p.sz * 0.5, b2 = p.sz * 0.18;
          ctx.strokeRect(-b2, -a2, b2 * 2, a2 * 2); ctx.strokeRect(-a2, -b2, a2 * 2, b2 * 2);
          ctx.restore();
        }
      }
      ctx.shadowBlur = 0;
      this._ptRaf = requestAnimationFrame(loop);
    };
    this._ptRaf = requestAnimationFrame(loop);
  }
  componentWillUnmount() { if (this._raf) cancelAnimationFrame(this._raf); if (this._ptRaf) cancelAnimationFrame(this._ptRaf); if (this._phI) clearInterval(this._phI); }
  _initGlobe() {
    const cv = document.getElementById('mgGlobeCanvas');
    if (!cv || this._glb) return;
    this._glb = true;
    const ctx = cv.getContext('2d');
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    cv.width = 400 * dpr; cv.height = 400 * dpr;
    ctx.scale(dpr, dpr);
    const D = Math.PI / 180;
    const LAND = [
      [-168,66,-160,71,-140,70,-120,72,-100,74,-82,74,-60,68,-60,60,-78,52,-64,49,-55,50,-56,44,-67,44,-70,41,-74,40,-76,35,-81,31,-81,25,-90,30,-94,29,-97,26,-98,20,-105,20,-106,23,-110,23,-112,29,-117,32,-122,37,-124,42,-124,48,-130,54,-138,58,-150,59,-160,62,-168,66],
      [-45,60,-30,60,-20,66,-22,73,-30,80,-45,83,-60,81,-55,72,-52,64,-45,60],
      [-78,9,-70,12,-60,11,-52,5,-50,0,-44,-3,-35,-6,-35,-12,-39,-18,-48,-25,-54,-34,-58,-39,-65,-46,-69,-52,-75,-52,-74,-45,-72,-37,-71,-25,-70,-15,-76,-6,-81,-4,-80,2,-78,9],
      [-10,36,-9,44,-4,48,1,49,-2,52,3,52,5,58,8,63,12,66,20,70,30,71,42,67,50,62,60,60,55,52,40,48,32,45,28,46,24,41,20,40,15,40,19,46,13,46,8,44,3,43,-2,40,-10,36],
      [-17,21,-16,15,-12,8,-8,5,-2,5,5,5,9,4,9,-1,13,-6,12,-16,15,-26,20,-35,26,-34,33,-26,40,-16,41,-4,43,3,51,12,44,12,43,16,37,22,34,28,32,31,25,32,20,32,11,37,10,34,0,35,-6,36,-12,30,-16,28,-17,21],
      [26,40,35,42,40,40,48,40,50,45,57,52,60,56,68,57,78,55,90,56,100,58,110,57,120,55,128,52,135,55,142,54,145,47,138,43,132,42,128,40,125,38,122,31,121,24,110,21,108,15,104,9,100,4,103,1,97,7,93,18,88,21,82,18,77,8,73,18,68,24,62,25,57,26,52,29,48,30,43,38,35,36,28,37,26,40],
      [114,-22,122,-18,130,-12,137,-12,143,-11,147,-20,151,-25,153,-31,149,-37,141,-38,136,-35,130,-32,123,-34,116,-35,114,-28,114,-22],
      [130,31,136,35,140,38,142,42,140,43,136,37,131,33,130,31],
      [43,-13,50,-16,50,-25,45,-25,43,-18,43,-13],
      [-6,50,-2,51,-3,58,-8,57,-10,53,-6,50],
      [167,-45,172,-41,175,-37,178,-38,174,-42,170,-46,167,-45]
    ];
    const pip = (lon, lat, p) => {
      let inside = false;
      for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
        const xi = p[i], yi = p[i + 1], xj = p[j], yj = p[j + 1];
        if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
      }
      return inside;
    };
    const isLand = (lon, lat) => { for (const p of LAND) if (pip(lon, lat, p)) return true; return false; };
    // pre-bake sin/cos of lat and base lon so per-frame projection is multiply-only
    const pre = (lat, lon) => { const la = lat * D, lo = lon * D; return { slat: Math.sin(la), clat: Math.cos(la), slon: Math.sin(lo), clon: Math.cos(lo) }; };
    const land = [];
    let li = 0;
    for (let lat = -78; lat <= 78; lat += 3.6) {
      const step = 3.6 / Math.max(0.26, Math.cos(lat * D));
      for (let lon = -180; lon < 180; lon += step) if (isLand(lon, lat)) { const p = pre(lat, lon); p.warm = li % 11 === 0; p.pale = !p.warm && li % 19 === 0; land.push(p); li++; }
    }
    const grat = [];
    [-60, -30, 0, 30, 60].forEach(lat => { const pts = []; for (let lon = -180; lon <= 180; lon += 4) pts.push(pre(lat, lon)); grat.push({ pts, major: lat === 0 }); });
    [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].forEach(lon => { const pts = []; for (let lat = -84; lat <= 84; lat += 4) pts.push(pre(lat, lon)); grat.push({ pts, major: false }); });
    const pins = [[51, 0], [40, -74], [-22, -46], [30, 31], [28, 77], [35, 139], [-26, 133]].map(p => pre(p[0], p[1]));
    const arcs = [[[51, 0], [40, -74]], [[40, -74], [-22, -46]], [[51, 0], [30, 31]], [[30, 31], [28, 77]], [[28, 77], [35, 139]], [[51, 0], [-26, 133]]].map(([a, b]) => { const pts = []; for (let s = 0; s <= 46; s++) { const f = s / 46; pts.push(pre(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f)); } return pts; });
    const tilt = 16 * D;
    const GX = 200, GY = 200;
    const ga = ctx.createRadialGradient(GX, GY, 150, GX, GY, 190);
    ga.addColorStop(0, 'rgba(64,236,182,0)'); ga.addColorStop(0.45, 'rgba(74,240,188,0.26)'); ga.addColorStop(0.7, 'rgba(120,246,210,0.12)'); ga.addColorStop(1, 'rgba(64,236,182,0)');
    const gBody = ctx.createRadialGradient(GX - 46, GY - 54, 16, GX, GY, 172);
    gBody.addColorStop(0, '#1c4836'); gBody.addColorStop(0.45, '#103021'); gBody.addColorStop(0.8, '#081d14'); gBody.addColorStop(1, '#040f0a');
    const vg = ctx.createRadialGradient(GX, GY, 90, GX, GY, 158);
    vg.addColorStop(0, 'rgba(4,15,10,0)'); vg.addColorStop(0.58, 'rgba(4,15,10,0)'); vg.addColorStop(0.86, 'rgba(4,13,9,0.45)'); vg.addColorStop(1, 'rgba(3,10,7,0.92)');
    const sp = ctx.createRadialGradient(150, 132, 2, 150, 132, 96);
    sp.addColorStop(0, 'rgba(200,255,234,0.24)'); sp.addColorStop(1, 'rgba(200,255,234,0)');
    this._glbData = { ctx, land, grat, pins, arcs, R: 152, CX: 200, CY: 200, ct: Math.cos(tilt), st: Math.sin(tilt), D, ga, gBody, vg, sp };
    this._spin = { lon: -0.35, speed: 0.14, target: 0.14 };
    const wrap = document.getElementById('mgGlobeWrap');
    if (wrap) {
      wrap.addEventListener('pointerenter', () => { this._spin.target = 0.46; });
      wrap.addEventListener('pointerleave', () => { this._spin.target = 0.14; });
    }
    this._last = performance.now();
    this._drawGlobe(this._last);
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const _touch = window.matchMedia && window.matchMedia('(hover:none)').matches;
    const capMs = _touch ? ((window.devicePixelRatio || 1) > 2.5 ? 44 : 32) : 0;
    let lastF = -1e9;
    const loop = (t) => { if (t - lastF >= capMs) { lastF = t; this._drawGlobe(t); } this._raf = requestAnimationFrame(loop); };
    this._raf = requestAnimationFrame(loop);
    // pause the render loop while the globe is offscreen (battery/CPU)
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((es) => {
        es.forEach(en => {
          if (en.isIntersecting) {
            if (!this._raf) { this._last = performance.now(); this._raf = requestAnimationFrame(loop); }
          } else if (this._raf) { cancelAnimationFrame(this._raf); this._raf = 0; }
        });
      }, { rootMargin: '90px' });
      io.observe(cv);
    }
  }
  _initMiniGlobe() {
    if (this._miniG) return; this._miniG = true;
    const cv = document.getElementById('mgLogoGlobe');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    cv.width = 152; cv.height = 152;
    const S = 152, C = 76, R = 70;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pill = (x, y, w, h) => {
      const rr = Math.min(w, h) / 2;
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + w, y, x + w, y + h, rr);
      ctx.arcTo(x + w, y + h, x, y + h, rr);
      ctx.arcTo(x, y + h, x, y, rr);
      ctx.arcTo(x, y, x + w, y, rr);
      ctx.closePath();
    };
    let lon = 0.6, last = performance.now();
    const draw = (t) => {
      const d = this._glbData;
      if (!d) { last = t; return; }
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      lon += 0.22 * dt;
      const sinL = Math.sin(lon), cosL = Math.cos(lon);
      ctx.clearRect(0, 0, S, S);
      const g = ctx.createRadialGradient(C - 18, C - 22, 6, C, C, R);
      g.addColorStop(0, '#1c4836'); g.addColorStop(0.5, '#0f2e20'); g.addColorStop(1, '#050f0a');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(C, C, R, 0, 7); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(C, C, R, 0, 7); ctx.clip();
      const scale = R / d.R;
      for (let li = 0; li < d.land.length; li += 2) {
        const p = d.land[li];
        const sinLo = p.slon * cosL - p.clon * sinL, cosLo = p.clon * cosL + p.slon * sinL;
        const x = p.clat * sinLo, y = p.slat, z2 = y * d.st + (p.clat * cosLo) * d.ct;
        if (z2 <= 0.12) continue;
        const y2 = y * d.ct - (p.clat * cosLo) * d.st;
        ctx.globalAlpha = 0.25 + z2 * 0.6;
        ctx.fillStyle = p.warm ? '#ff5d7d' : (p.pale ? '#eafff5' : '#5fe7aa');
        ctx.beginPath(); ctx.arc(C + x * R, C - y2 * R, 1 + z2 * 1.8, 0, 7); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.restore();
      ctx.beginPath(); ctx.arc(C, C, R - 1, 0, 7);
      ctx.strokeStyle = 'rgba(191,243,227,0.3)'; ctx.lineWidth = 2; ctx.stroke();
      const aL = 68, aT = 23;
      ctx.save();
      pill(C - aL / 2, C - aT / 2, aL, aT); ctx.clip();
      ctx.fillStyle = '#f2f6f7'; ctx.fillRect(C - aL / 2 - 1, C - aT / 2 - 1, aL / 2 + 1.5, aT + 2);
      ctx.fillStyle = '#ff2d52'; ctx.fillRect(C + 0.5, C - aT / 2 - 1, aL / 2 + 1, aT + 2);
      ctx.restore();
      ctx.save();
      pill(C - aT / 2, C - aL / 2, aT, aL); ctx.clip();
      ctx.fillStyle = '#ffffff'; ctx.fillRect(C - aT / 2 - 1, C - aL / 2 - 1, aT + 2, aL / 2 + 1.5);
      ctx.fillStyle = '#0cc57f'; ctx.fillRect(C - aT / 2 - 1, C + 0.5, aT + 2, aL / 2 + 1);
      ctx.restore();
      pill(C - aT / 2, C - aL / 2, aT, aL);
      ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 1.6; ctx.stroke();
    };
    if (reduce) {
      const once = (t) => { if (this._glbData) { draw(performance.now()); } else setTimeout(() => once(), 350); };
      once();
      return;
    }
    const kick = () => { if (this._glbData) draw(performance.now()); else setTimeout(kick, 250); };
    kick();
    const loop = (t) => { draw(t); this._miniRaf = requestAnimationFrame(loop); };
    this._miniRaf = requestAnimationFrame(loop);
  }
  _projP(p, s, c) {
    const d = this._glbData;
    const sinLo = p.slon * c - p.clon * s, cosLo = p.clon * c + p.slon * s;
    const x = p.clat * sinLo, y = p.slat, z = p.clat * cosLo;
    const y2 = y * d.ct - z * d.st, z2 = y * d.st + z * d.ct;
    return [d.CX + x * d.R, d.CY - y2 * d.R, z2];
  }
  _drawArc(ctx, arcPts, sinL, cosL, t, i) {
    const N = 46, pts = [];
    for (let k = 0; k <= N; k++) pts.push(this._projP(arcPts[k], sinL, cosL));
    ctx.beginPath(); let on = false;
    for (const [x, y, z] of pts) { if (z > 0.05) { if (on) ctx.lineTo(x, y); else ctx.moveTo(x, y); on = true; } else on = false; }
    ctx.strokeStyle = 'rgba(90,231,170,0.16)'; ctx.lineWidth = 1; ctx.stroke();
    const head = ((t / 1000 * 0.32) + i * 0.28) % 1, hi = Math.floor(head * N);
    for (let k = Math.max(1, hi - 7); k <= hi; k++) {
      const c = pts[k], p = pts[k - 1]; if (!c || !p || c[2] <= 0.05 || p[2] <= 0.05) continue;
      const a2 = 1 - (hi - k) / 7;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(c[0], c[1]);
      ctx.strokeStyle = 'rgba(190,255,228,' + (a2 * 0.85 * c[2]).toFixed(3) + ')'; ctx.lineWidth = 1.9; ctx.stroke();
    }
  }
  _drawGlobe(t) {
    const d = this._glbData; if (!d) return; const ctx = d.ctx, CX = 200, CY = 200;
    const dt = Math.min(0.05, (t - this._last) / 1000); this._last = t;
    this._spin.speed += (this._spin.target - this._spin.speed) * Math.min(1, dt * 3);
    this._spin.lon += this._spin.speed * dt;
    const lon0 = this._spin.lon, sinL = Math.sin(lon0), cosL = Math.cos(lon0);
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = d.ga; ctx.beginPath(); ctx.arc(CX, CY, 190, 0, 7); ctx.fill();
    ctx.fillStyle = d.gBody; ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, 157, 0, 7); ctx.clip();
    ctx.lineCap = 'round';
    for (const gl of d.grat) {
      ctx.beginPath(); let on = false;
      for (const p of gl.pts) { const [x, y, z] = this._projP(p, sinL, cosL); if (z > 0.02) { if (on) ctx.lineTo(x, y); else ctx.moveTo(x, y); on = true; } else on = false; }
      ctx.strokeStyle = 'rgba(205,247,234,' + (gl.major ? 0.5 : 0.2) + ')'; ctx.lineWidth = gl.major ? 1.2 : 0.8; ctx.stroke();
    }
    const buckets = this._dotBuckets || (this._dotBuckets = { g: [], w: [], r: [] });
    const NB = 6;
    for (const k in buckets) { const a = buckets[k]; for (let i = 0; i < NB; i++) a[i] = null; }
    for (const p of d.land) {
      const [x, y, z] = this._projP(p, sinL, cosL); if (z <= 0.05) continue;
      const bi = Math.min(NB - 1, (z * NB) | 0);
      const key = p.warm ? 'r' : (p.pale ? 'w' : 'g');
      const path = buckets[key][bi] || (buckets[key][bi] = new Path2D());
      const rad = (0.7 + z * 1.7) * (p.warm ? 1.25 : 1);
      path.moveTo(x + rad, y); path.arc(x, y, rad, 0, 7);
    }
    const COLS = { g: '#5fe7aa', w: '#eafff5', r: '#ff5d7d' };
    for (const k in buckets) {
      ctx.fillStyle = COLS[k];
      for (let i = 0; i < NB; i++) {
        const path = buckets[k][i]; if (!path) continue;
        const zMid = (i + 0.5) / NB;
        ctx.globalAlpha = Math.min(1, (0.22 + zMid * 0.62) * (k === 'g' ? 1 : 1.15));
        ctx.fill(path);
      }
    }
    ctx.globalAlpha = 1;
    d.arcs.forEach((a, i) => this._drawArc(ctx, a, sinL, cosL, t, i));
    d.pins.forEach((p, i) => {
      const [x, y, z] = this._projP(p, sinL, cosL); if (z <= 0.12) return;
      const ph = (((t / 1000) + i * 0.6) % 2.4) / 2.4; const red = i % 3 === 1;
      ctx.globalAlpha = (1 - ph) * 0.8 * z; ctx.beginPath(); ctx.arc(x, y, 2 + ph * 10, 0, 7); ctx.strokeStyle = red ? '#ff7f9c' : '#c3f9de'; ctx.lineWidth = 1.3; ctx.stroke();
      ctx.globalAlpha = Math.min(1, z + 0.25); ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fillStyle = red ? '#ffd6de' : '#eafff5'; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, 1, 0, 7); ctx.fillStyle = red ? '#ff5d7d' : '#ffffff'; ctx.fill();
    });
    ctx.globalAlpha = 1; ctx.restore();
    ctx.fillStyle = d.vg; ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.fill();
    ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.clip();
    ctx.fillStyle = d.sp; ctx.beginPath(); ctx.ellipse(150, 132, 96, 78, 0, 0, 7); ctx.fill(); ctx.restore();
    ctx.beginPath(); ctx.arc(CX, CY, 158, 0, 7); ctx.strokeStyle = 'rgba(191,243,227,0.34)'; ctx.lineWidth = 1.4; ctx.stroke();
    ctx.save();
    for (let k = 0; k < 3; k++) {
      const ang = (t / 1000) * 0.5 + k * (Math.PI * 2 / 3);
      const s = Math.sin(ang); if (s <= 0) continue;
      const x = CX + Math.cos(ang) * 184, y = 214 + s * 50;
      const sparkFill = ['#aef7d6', '#ff8aa3', '#ffffff'][k], sparkGlow = ['#34e8a0', '#ff4f74', '#ffd0da'][k];
      ctx.globalAlpha = Math.min(1, s + 0.15); ctx.shadowColor = sparkGlow; ctx.shadowBlur = 11;
      ctx.beginPath(); ctx.arc(x, y, 2.7, 0, 7); ctx.fillStyle = sparkFill; ctx.fill();
    }
    ctx.restore();
  }
  _initMotion() {
    if (this._md) return; this._md = true;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      const co = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { this._animateCount(e.target); co.unobserve(e.target); } });
      }, { threshold: 0.6 });
      document.querySelectorAll('[data-count]').forEach(n => co.observe(n));
    }
    // back-to-top button
    const topBtn = document.getElementById('mgTop');
    if (topBtn) {
      const onScroll = () => { topBtn.classList.toggle('mgShow', window.scrollY > 700); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      const go = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      topBtn.addEventListener('click', go);
      topBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    }
    // nav scrollspy
    const navLinks = [...document.querySelectorAll('header nav a')];
    const linkFor = (id) => navLinks.find(a => (a.getAttribute('href') || '') === '#' + id);
    const spy = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { const l = linkFor(e.target.id); if (l) { navLinks.forEach(a => a.classList.remove('mgActive')); l.classList.add('mgActive'); } } });
    }, { threshold: 0.3, rootMargin: '-30% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(s => spy.observe(s));
    if (reduce) return;
    // 3D parallax tilt of the globe cluster following the cursor
    const hero = document.getElementById('top');
    const wrap = document.getElementById('mgGlobeWrap');
    if (hero && wrap && window.matchMedia('(pointer:fine)').matches) {
      let raf = 0;
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          wrap.style.transform = 'perspective(1100px) rotateY(' + (px * 11).toFixed(2) + 'deg) rotateX(' + (-py * 9).toFixed(2) + 'deg) translateZ(0)';
        });
      });
      hero.addEventListener('pointerleave', () => { wrap.style.transform = ''; });
    }
    const fine = window.matchMedia('(pointer:fine)').matches;
    // spotlight + 3D tilt on info cards
    document.querySelectorAll('[style*="border-radius: 18px"]').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        if (fine) card.style.transform = 'perspective(900px) rotateY(' + ((px - 0.5) * 6).toFixed(2) + 'deg) rotateX(' + ((0.5 - py) * 6).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
    // magnetic primary buttons
    if (fine) document.querySelectorAll('a[style*="border-radius: 14px"]').forEach(btn => {
      btn.style.willChange = 'transform';
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const mx = (e.clientX - r.left - r.width / 2) / r.width, my = (e.clientY - r.top - r.height / 2) / r.height;
        btn.style.transform = 'translate(' + (mx * 8).toFixed(1) + 'px,' + (my * 6).toFixed(1) + 'px)';
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }
  _blip() {
    if (navigator.vibrate) { try { navigator.vibrate(7); } catch (e) {} }
    try {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      if (!this._ac) this._ac = new AC();
      if (this._ac.state === 'suspended') this._ac.resume();
      const now = this._ac.currentTime;
      if (this._lastBlip && now - this._lastBlip < 0.12) return; this._lastBlip = now;
      const o = this._ac.createOscillator(), g = this._ac.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(880, now); o.frequency.exponentialRampToValueAtTime(1320, now + 0.06);
      g.gain.setValueAtTime(0.0001, now); g.gain.exponentialRampToValueAtTime(0.025, now + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      o.connect(g); g.connect(this._ac.destination); o.start(now); o.stop(now + 0.18);
    } catch (e) {}
  }
  _animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const dur = 1500, start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = v;
      if (p < 1) requestAnimationFrame(step); else el.textContent = target;
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  }
  _measure() {
    const t = document.getElementById('mgRingText');
    if (!t || !t.getComputedTextLength) return;
    let L = 0; try { L = t.getComputedTextLength(); } catch (e) { return; }
    if (!L) return;
    const tw = L / this._tiles;
    if (this.state.tileW && Math.abs(this.state.tileW - tw) < 0.4) return;
    this.setState({ tileW: tw });
  }
  buildRing() {
    const h = React.createElement;
    const tw = this.state.tileW || 116;
    const text = 'MediGlobe \u2022 '.repeat(this._tiles);
    return h('g', { key: 'ringroot' }, [
      h('path', { key: 'op', id: 'mgOrbitPath', d: 'M200,164 A184,50 0 0,0 200,264 A184,50 0 0,0 200,164', fill: 'none' }),
      h('mask', { key: 'rm', id: 'mgRingMask' }, [
        h('rect', { key: 'a', width: 400, height: 400, fill: '#fff' }),
        h('circle', { key: 'b', cx: 200, cy: 200, r: 158, fill: '#000' }),
        h('path', { key: 'c', d: 'M42.6,214 A158,158 0 0,0 357.4,214 Z', fill: '#fff' })
      ]),
      h('g', { key: 'rg', mask: 'url(#mgRingMask)' }, [
        h('ellipse', { key: 'e', cx: 200, cy: 214, rx: 184, ry: 50, fill: 'none', stroke: '#bdf3e4', strokeOpacity: 0.12, strokeWidth: 1 }),
        h('text', {
          key: 't', id: 'mgRingText', fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600,
          letterSpacing: 2, fill: '#e6fbf1', filter: 'url(#mgGlow)', dominantBaseline: 'middle'
        }, h('textPath', { href: '#mgOrbitPath', startOffset: -2 * tw }, [
          text,
          h('animate', { key: 'an', attributeName: 'startOffset', from: -2 * tw, to: -tw, dur: '7s', repeatCount: 'indefinite', calcMode: 'linear' })
        ]))
      ])
    ]);
  }
  renderVals() {
    if (!this._earth) this._earth = this.buildEarth();
    return {
      accent: this.props.accent ?? '#34e8a0',
      headline: this.props.headline ?? 'Знакомое лекарство — в любой аптеке мира',
      tagline: this.props.tagline ?? 'Введи название или вещество — узнай его местный аналог: бренды, дозировки, цены. Офлайн, 3250 препаратов, 13 стран, 10 языков.',
      ring: this.buildRing()
    };
  }
}


  // --- standalone bootstrap (no React/DCLogic at runtime) ---
  App.prototype.setState = function (o) { if (o) Object.assign(this.state || (this.state = {}), o); };
  var app = new App();
  var start = function () { try { app.componentDidMount(); } catch (e) { console.error('mg init error', e); } };
  if (document.readyState !== 'loading') start();
  else document.addEventListener('DOMContentLoaded', start);
})();
