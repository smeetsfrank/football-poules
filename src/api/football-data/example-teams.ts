// http://api.football-data.org/v2/competitions/2018/teams
const exampleTeams = async () => ({
  count: 24,
  filters: {},
  competition: {
    id: 2018,
    area: {
      id: 2077,
      name: 'Europe',
    },
    name: 'European Championship',
    code: 'EC',
    plan: 'TIER_ONE',
    lastUpdated: '2020-09-10T13:51:03Z',
  },
  season: {
    id: 507,
    startDate: '2021-06-11',
    endDate: '2021-07-11',
    currentMatchday: 2,
    winner: null,
  },
  teams: [
    {
      id: 759,
      area: {
        id: 2088,
        name: 'Germany',
      },
      name: 'Germany',
      shortName: 'Germany',
      tla: 'GER',
      crestUrl: 'https://crests.football-data.org/759.svg',
      address:
        'Otto-Fleck-Schneise 6 / Postfach 710265 Frankfurt am Main 60492',
      phone: '+49 (69) 67880',
      website: 'http://www.dfb.de',
      email: 'info@dfb.de',
      founded: 1900,
      clubColors: 'White / Black',
      venue: 'RheinEnergieSTADION',
      lastUpdated: '2021-05-26T09:46:39Z',
    },
    {
      id: 760,
      area: {
        id: 2224,
        name: 'Spain',
      },
      name: 'Spain',
      shortName: 'Spain',
      tla: 'ESP',
      crestUrl: 'https://crests.football-data.org/760.svg',
      address: 'Ramón y Cajal, s/n Las Rozas 28230',
      phone: '+34 (91) 4959800',
      website: 'http://www.rfef.es',
      email: 'rfef@rfef.es',
      founded: 1909,
      clubColors: 'Red / Blue / Yellow',
      venue: 'Estadio Alfredo Di Stéfano',
      lastUpdated: '2021-05-26T09:46:48Z',
    },
    {
      id: 765,
      area: {
        id: 2187,
        name: 'Portugal',
      },
      name: 'Portugal',
      shortName: 'Portugal',
      tla: 'POR',
      crestUrl: 'https://crests.football-data.org/765.svg',
      address: 'Rua Alexandre Herculano, 58 Lisboa 1250-012',
      phone: '+351 (213) 252700',
      website: 'http://www.fpf.pt',
      email: 'info@fpf.pt',
      founded: 1914,
      clubColors: 'Red / Green',
      venue: 'Estádio José Alvalade',
      lastUpdated: '2021-05-26T09:46:58Z',
    },
    {
      id: 768,
      area: {
        id: 2214,
        name: 'Slovakia',
      },
      name: 'Slovakia',
      shortName: 'Slovakia',
      tla: 'SVK',
      crestUrl: 'https://crests.football-data.org/768.svg',
      address: 'Trnavská 100 Bratislava 82101',
      phone: '+421 (2) 48206000',
      website: 'http://www.futbalsfz.sk',
      email: 'office@futbalsfz.sk',
      founded: 1938,
      clubColors: 'Blue / White',
      venue: 'City Arena Trnava',
      lastUpdated: '2021-05-26T19:20:07Z',
    },
    {
      id: 770,
      area: {
        id: 2072,
        name: 'England',
      },
      name: 'England',
      shortName: 'England',
      tla: 'ENG',
      crestUrl: 'https://crests.football-data.org/770.svg',
      address: 'Wembley Stadium, PO Box 1966 London SW1P 9EQ',
      phone: '+44 (844) 9808200',
      website: 'http://www.thefa.com',
      email: 'info@thefa.com',
      founded: 1863,
      clubColors: 'White / Red / Navy Blue',
      venue: 'Wembley Stadium',
      lastUpdated: '2021-05-26T09:47:50Z',
    },
    {
      id: 773,
      area: {
        id: 2081,
        name: 'France',
      },
      name: 'France',
      shortName: 'France',
      tla: 'FRA',
      crestUrl: 'https://crests.football-data.org/773.svg',
      address: '87 Boulevard de Grenelle Paris 75738',
      phone: '+33 (1) 44317300',
      website: 'http://www.fff.fr',
      email: 'webmaster@fff.fr',
      founded: 1919,
      clubColors: 'Blue / White / Red',
      venue: 'Stade de France',
      lastUpdated: '2021-05-26T09:47:59Z',
    },
    {
      id: 782,
      area: {
        id: 2065,
        name: 'Denmark',
      },
      name: 'Denmark',
      shortName: 'Denmark',
      tla: 'DEN',
      crestUrl: 'https://crests.football-data.org/782.svg',
      address: 'House of Football, DBU Allé 1 Brøndby 2605',
      phone: '+45 (43) 262222',
      website: 'http://www.dbu.dk',
      email: 'dbu@dbu.dk',
      founded: 1889,
      clubColors: 'Red / White',
      venue: 'Telia Parken',
      lastUpdated: '2021-05-26T10:45:14Z',
    },
    {
      id: 784,
      area: {
        id: 2114,
        name: 'Italy',
      },
      name: 'Italy',
      shortName: 'Italy',
      tla: 'ITA',
      crestUrl: 'https://crests.football-data.org/784.svg',
      address: 'Via Gregorio Allegri, 14 / CP 2450 Roma 00198',
      phone: '+39 (06) 84911',
      website: 'http://www.figc.it',
      email: 'international@figc.it',
      founded: 1898,
      clubColors: 'Blue / White',
      venue: 'Stadio Artemio Franchi',
      lastUpdated: '2021-05-26T10:29:34Z',
    },
    {
      id: 788,
      area: {
        id: 2234,
        name: 'Switzerland',
      },
      name: 'Switzerland',
      shortName: 'Switzerland',
      tla: 'SUI',
      crestUrl: 'https://crests.football-data.org/788.svg',
      address: 'Worbstrasse 48 Bern 3000',
      phone: '+41 (31) 9508111',
      website: 'http://www.football.ch',
      email: 'sfv.asf@football.ch',
      founded: 1895,
      clubColors: 'Red / White',
      venue: 'St. Jakob-Park',
      lastUpdated: '2021-05-26T10:29:27Z',
    },
    {
      id: 790,
      area: {
        id: 2253,
        name: 'Ukraine',
      },
      name: 'Ukraine',
      shortName: 'Ukraine',
      tla: 'UKR',
      crestUrl: 'https://crests.football-data.org/790.svg',
      address: 'Provulok Laboratorniy 7-A / PO Box 55 Kyïv 01133',
      phone: '+380 (44) 5210521',
      website: 'http://www.ffu.org.ua',
      email: 'info@ffu.org.ua',
      founded: 1991,
      clubColors: 'Yellow / Blue',
      venue: "NSK Olimpijs'kyj",
      lastUpdated: '2021-06-02T14:19:45Z',
    },
    {
      id: 792,
      area: {
        id: 2233,
        name: 'Sweden',
      },
      name: 'Sweden',
      shortName: 'Sweden',
      tla: 'SWE',
      crestUrl: 'https://crests.football-data.org/792.svg',
      address: 'Evenemangsgatan 31 / Box 1216 Solna 17123',
      phone: '+46 (8) 7350900',
      website: 'http://www.svenskfotboll.se',
      email: 'svff@svenskfotboll.se',
      founded: 1904,
      clubColors: 'Yellow / Blue',
      venue: 'Friends Arena',
      lastUpdated: '2021-05-26T10:29:20Z',
    },
    {
      id: 794,
      area: {
        id: 2186,
        name: 'Poland',
      },
      name: 'Poland',
      shortName: 'Poland',
      tla: 'POL',
      crestUrl: 'https://crests.football-data.org/794.svg',
      address: 'Bitwy Warszawskiej 1920 r., 7 Warszawa 02366',
      phone: '+48 (22) 5512300',
      website: 'http://www.pzpn.pl',
      email: 'pzpn@pzpn.pl',
      founded: 1919,
      clubColors: 'White / Red',
      venue: 'Stadion Energa Gdańsk',
      lastUpdated: '2021-05-26T09:49:02Z',
    },
    {
      id: 798,
      area: {
        id: 2062,
        name: 'Czech Republic',
      },
      name: 'Czech Republic',
      shortName: 'Czech Republic',
      tla: 'CZE',
      crestUrl: 'https://crests.football-data.org/798.svg',
      address: 'Diskařská 2431/4 Praha 16017',
      phone: '+420 (23) 3029111',
      website: 'http://www.fotbal.cz',
      email: 'facr@fotbal.cz',
      founded: 1901,
      clubColors: 'Red / White / Blue',
      venue: 'Sinobo Stadium',
      lastUpdated: '2021-05-26T10:28:33Z',
    },
    {
      id: 799,
      area: {
        id: 2058,
        name: 'Croatia',
      },
      name: 'Croatia',
      shortName: 'Croatia',
      tla: 'CRO',
      crestUrl: 'https://crests.football-data.org/799.svg',
      address: 'Ulica grada Vukovara, 269 A Zagreb 10000',
      phone: '+385 (1) 2361555',
      website: 'http://www.hns-cff.hr',
      email: 'info@hns-cff.hr',
      founded: 1912,
      clubColors: 'Red / White / Blue',
      venue: 'Stadion Maksimir',
      lastUpdated: '2021-05-26T10:28:24Z',
    },
    {
      id: 803,
      area: {
        id: 2247,
        name: 'Turkey',
      },
      name: 'Turkey',
      shortName: 'Turkey',
      tla: 'TUR',
      crestUrl: 'https://crests.football-data.org/803.svg',
      address: 'Istinye Mahallesi, Darüşşafaka Caddesi, 45 İstanbul 34330',
      phone: '+90 (212) 3622222',
      website: 'http://www.tff.org',
      email: 'intdept@tff.org',
      founded: 1923,
      clubColors: 'Red / White',
      venue: 'Ali Sami Yen Stadyumu',
      lastUpdated: '2021-05-26T10:28:10Z',
    },
    {
      id: 805,
      area: {
        id: 2023,
        name: 'Belgium',
      },
      name: 'Belgium',
      shortName: 'Belgium',
      tla: 'BEL',
      crestUrl: 'https://crests.football-data.org/805.svg',
      address: '145, avenue Houba de Strooper Brussels 1020',
      phone: '+32 (2) 4771211',
      website: 'https://www.rbfa.be',
      email: 'urbsfa.kbvb@footbel.com',
      founded: 1895,
      clubColors: 'Red / Black / Yellow',
      venue: 'King Power at Den Dreef Stadion',
      lastUpdated: '2021-05-26T10:28:44Z',
    },
    {
      id: 808,
      area: {
        id: 2195,
        name: 'Russia',
      },
      name: 'Russia',
      shortName: 'Russia',
      tla: 'RUS',
      crestUrl: 'https://crests.football-data.org/808.svg',
      address: 'Ulitsa Narodnaya, 7 Moskva 115172',
      phone: '+7 (495) 9261300',
      website: 'http://www.rfs.ru',
      email: 'info@rfs.ru',
      founded: 1912,
      clubColors: 'Red / White / Blue',
      venue: 'VTB Arena',
      lastUpdated: '2021-05-29T10:09:02Z',
    },
    {
      id: 816,
      area: {
        id: 2016,
        name: 'Austria',
      },
      name: 'Austria',
      shortName: 'Austria',
      tla: 'AUT',
      crestUrl: 'https://crests.football-data.org/816.svg',
      address: 'Ernst-Happel-Stadion, Sektor A/F, Meiereistraße 7 Wien 1020',
      phone: '+43 (1) 727180',
      website: 'http://www.oefb.at',
      email: 'office@oefb.at',
      founded: 1904,
      clubColors: 'Red / White / Black',
      venue: 'Ernst-Happel-Stadion',
      lastUpdated: '2021-05-28T19:09:15Z',
    },
    {
      id: 827,
      area: {
        id: 2106,
        name: 'Hungary',
      },
      name: 'Hungary',
      shortName: 'Hungary',
      tla: 'HUN',
      crestUrl: 'https://crests.football-data.org/827.svg',
      address: 'Kánai út 2/d Budapest 1112',
      phone: '+36 (15) 779500',
      website: 'http://www.mlsz.hu',
      email: 'mlsz@mlsz.hu',
      founded: 1901,
      clubColors: 'Red / White / Green',
      venue: 'Puskás Aréna',
      lastUpdated: '2021-05-28T19:08:20Z',
    },
    {
      id: 833,
      area: {
        id: 2264,
        name: 'Wales',
      },
      name: 'Wales',
      shortName: 'Wales',
      tla: 'WAL',
      crestUrl: 'https://crests.football-data.org/833.svg',
      address: '11/12 Neptune Court, Vanguard Way Cardiff CF24 5PJ',
      phone: '+44 (2920) 435830',
      website: 'http://www.faw.org.uk',
      email: 'info@faw.org.uk',
      founded: 1876,
      clubColors: 'Red / White',
      venue: 'Cardiff City Stadium',
      lastUpdated: '2021-05-28T19:08:03Z',
    },
    {
      id: 1976,
      area: {
        id: 2080,
        name: 'Finland',
      },
      name: 'Finland',
      shortName: 'Finland',
      tla: 'FIN',
      crestUrl: 'https://crests.football-data.org/1976.svg',
      address: 'Urheilukatu, 5 / PO Box 191 Helsinki 00251',
      phone: '+358 (9) 742151',
      website: 'http://www.palloliitto.fi',
      email: 'sami.terava@palloliitto.fi',
      founded: 1907,
      clubColors: 'Blue / White',
      venue: 'Helsingin olympiastadion',
      lastUpdated: '2021-05-28T19:07:47Z',
    },
    {
      id: 1977,
      area: {
        id: 2083,
        name: 'FYR Macedonia',
      },
      name: 'North Macedonia',
      shortName: 'Macedonia',
      tla: 'MKD',
      crestUrl: 'https://crests.football-data.org/1977.svg',
      address: 'bul. ASNOM bb Skopje 1000',
      phone: '+389 (23) 129291',
      website: 'http://ffm.mk',
      email: 'ffm@ffm.com.mk',
      founded: 1948,
      clubColors: 'Red / Yellow',
      venue: 'Nationala Arena Toše Proeski',
      lastUpdated: '2021-05-28T19:01:58Z',
    },
    {
      id: 8601,
      area: {
        id: 2163,
        name: 'Netherlands',
      },
      name: 'Netherlands',
      shortName: 'Netherlands',
      tla: 'NED',
      crestUrl: 'https://crests.football-data.org/8601.svg',
      address: 'Woudenbergseweg 56-58 / Postbus 515 Zeist 3700 AM',
      phone: '+31 (343) 499201',
      website: 'http://www.knvb.nl',
      email: 'concern@knvb.nl',
      founded: 1889,
      clubColors: 'Orange / White / Blue',
      venue: 'Johan Cruyff ArenA',
      lastUpdated: '2021-05-28T18:49:20Z',
    },
    {
      id: 8873,
      area: {
        id: 2204,
        name: 'Scotland',
      },
      name: 'Scotland',
      shortName: 'Scotland',
      tla: 'SCO',
      crestUrl: 'https://crests.football-data.org/814.svg',
      address: 'Hampden Park Glasgow G42 9AY',
      phone: '+44 (1416) 166000',
      website: 'http://www.scottishfa.co.uk',
      email: 'info@scottishfa.co.uk',
      founded: 1873,
      clubColors: 'Navy Blue / White',
      venue: 'Hampden Park',
      lastUpdated: '2021-05-28T18:49:42Z',
    },
  ],
});

export default exampleTeams;