export interface MatchesData {
  data: Matche[]
  plan: Plan
  pagination: Pagination
}
  
export interface Matche {
  id: number
  round: string
  date: string
  country: Country
  state: State
  awayTeam: AwayTeam
  homeTeam: HomeTeam
  league: League
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

export interface League {
  id: number
  logo: string
  name: string
  season: number
}

export interface Plan {
  tier: string
  message: string
}

export interface Pagination {
  totalCount: number
  offset: number
  limit: number
}

