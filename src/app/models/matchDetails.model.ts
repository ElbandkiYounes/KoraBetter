export type MatcheDetailsData = MatcheDetails[]

export interface MatcheDetails {
  venue: Venue
  referee: Referee
  forecast: Forecast
  events: Event[]
  id: number
  round: string
  date: string
  country: Country
  state: State
  awayTeam: AwayTeam
  homeTeam: HomeTeam
  statistics: Statistic[]
  league: League
}

export interface Venue {
  city: string
  name: string
  country: string
  capacity: string
}

export interface Referee {
  name: string
  nationality: string
}

export interface Forecast {
  status: string
  temperature: string
}

export interface Event {
  team: Team
  time: string
  type: string
  assist: any
  player: string
  substituted?: string
}

export interface Team {
  id: number
  logo: string
  name: string
}

export interface Country {
  code: string
  name: string
  logo: string
}

export interface State {
  clock: number
  score: Score
  description: string
}

export interface Score {
  current: string
  penalties: any
}

export interface AwayTeam {
  id: number
  logo: string
  name: string
}

export interface HomeTeam {
  id: number
  logo: string
  name: string
}

export interface Statistic {
  team: Team2
  statistics: Statistic2[]
}

export interface Team2 {
  id: number
  logo: string
  name: string
}

export interface Statistic2 {
  displayName: string
  value: number
}

export interface League {
  id: number
  logo: string
  name: string
  season: number
}
