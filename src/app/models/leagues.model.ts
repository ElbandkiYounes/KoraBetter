export interface LeaguesData {
    data: League[]
    plan: Plan
    pagination: Pagination
  }
  
  export interface League {
    id: number
    logo?: string
    name: string
    seasons: Season[]
    country: Country
  }
  
  export interface Season {
    season: number
  }
  
  export interface Country {
    code: string
    name: string
    logo: string
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
  