// http://api.football-data.org/v2/matches/285431

const exampleMatch = async () => ({
  head2head: {
    numberOfMatches: 1,
    totalGoals: 5,
    homeTeam: {
      id: 8601,
      name: 'Netherlands',
      wins: 1,
      draws: 0,
      losses: 0,
    },
    awayTeam: {
      id: 790,
      name: 'Ukraine',
      wins: 0,
      draws: 0,
      losses: 1,
    },
  },
  match: {
    id: 285431,
    competition: {
      id: 2018,
      name: 'European Championship',
      area: {
        name: 'Europe',
        code: 'EUR',
        ensignUrl: null,
      },
    },
    season: {
      id: 507,
      startDate: '2021-06-11',
      endDate: '2021-07-11',
      currentMatchday: 2,
      winner: null,
    },
    utcDate: '2021-06-13T19:00:00Z',
    status: 'FINISHED',
    venue: 'Johan Cruijff Arena',
    matchday: 1,
    stage: 'GROUP_STAGE',
    group: 'Group C',
    lastUpdated: '2021-06-15T08:20:24Z',
    odds: {
      msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
    },
    score: {
      winner: 'HOME_TEAM',
      duration: 'REGULAR',
      fullTime: {
        homeTeam: 3,
        awayTeam: 2,
      },
      halfTime: {
        homeTeam: 0,
        awayTeam: 0,
      },
      extraTime: {
        homeTeam: null,
        awayTeam: null,
      },
      penalties: {
        homeTeam: null,
        awayTeam: null,
      },
    },
    homeTeam: {
      id: 8601,
      name: 'Netherlands',
    },
    awayTeam: {
      id: 790,
      name: 'Ukraine',
    },
    referees: [
      {
        id: 43876,
        name: 'Mark Borsch',
        role: 'ASSISTANT_REFEREE_N1',
        nationality: 'Germany',
      },
      {
        id: 43877,
        name: 'Stefan Lupp',
        role: 'ASSISTANT_REFEREE_N2',
        nationality: 'Germany',
      },
      {
        id: 43857,
        name: 'Bartosz Frankowski',
        role: 'FOURTH_OFFICIAL',
        nationality: 'Poland',
      },
      {
        id: 43875,
        name: 'Felix Brych',
        role: 'REFEREE',
        nationality: 'Germany',
      },
      {
        id: 15821,
        name: 'Marco Fritz',
        role: 'VIDEO_ASSISANT_REFEREE_N1',
        nationality: 'Germany',
      },
      {
        id: 57526,
        name: 'Christian Dingert',
        role: 'VIDEO_ASSISANT_REFEREE_N2',
        nationality: 'Germany',
      },
    ],
  },
});

export default exampleMatch;
