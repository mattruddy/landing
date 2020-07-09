export enum Degree {
  ASSOCIATE = "ASSOCIATE",
  BACHELOR = "BACHELOR",
  MASTER = "MASTER",
  DOCTORAL = "DOCTORAL",
}

export enum OccupationStatus {
  HIRED = "HIRED",
  LOOKING = "LOOKING",
  OPEN = "OPEN",
  COMPANY = "COMPANY",
}

export enum Experience {
  SCHOOL = "SCHOOL",
  JR = "JR",
  MID = "MID",
  SENIOR = "SENIOR",
}

export const ExperienceProps: Record<string, string> = {
  SCHOOL: "In school",
  JR: "1 - 3 years",
  MID: "3 - 5 years",
  SENIOR: "6+ years",
}

export const OccupationStatusEnumProps: Record<string, string> = {
  HIRED: "Hired, not looking",
  LOOKING: "Looking for opportunities",
  OPEN: "Open to opportunities",
  COMPANY: "Company",
}

export interface DevLog {
  logId: number
  log: string
  loggedAt: Date
  appName: string
  appId: number
  icon: string
  canDelete: boolean
}

export interface TotalAppData {
  totalInstalls: number
  totalPageViews: number
}

export interface DispatchObject {
  [key: string]: any
  type: string
}

export interface Education {
  id: number
  school: string
  major: string
  gradDate: Date
  degree: Degree
  minor?: string
}

export interface Job {
  id: number
  company: string
  title: string
  start: Date
  description?: string
  end?: Date
}

export interface Image {
  imageId: number
  url: string
}

export interface NewRating {
  liked: boolean
  rating: Rating
}

export interface StoreNotification {
  subject: string
  body: string
  createdAt: Date
  id: number
}

export interface AppRatings {
  ratings: Rating[]
  hasRated: boolean
}

export interface Rating {
  from: string
  createdAt: Date
  linkable: boolean
}

export interface PWA {
  appId: number
  name: string
  description: string
  link: string
  icon: string
  category: string
  status: string
  screenshots: Image[]
  reason: string
  appRatings: AppRatings
  ratingsCount: number
  tags: string[]
  pageViews: number
  installs: number
  username: string
  fullName: string
}

export interface UserProfile {
  username: string
  email: string
  pwas: PWA[]
  starredApps: PWA[]
  profile: Profile
  role: string
  jobs: Job[]
  educations: Education[]
}

export interface HomePWAs {
  topApps: PWA[]
  featuredApps: PWA[]
  discoverApps: PWA[]
}

export interface Search {
  name: string
  appId: number
}

export interface Push {
  key: string
  auth: string
  endpoint: string
}

export interface Profile {
  gitHub: string
  avatar: string
  about: string
  showEmail: boolean
  country: string
  region: string
  fullName: string
  header: string
  occupationStatus: OccupationStatus
  experience: Experience
  techs: string[]
  profileId: number
}

export interface PublicProfile {
  about: string
  apps: PWA[]
  avatar: string
  email: string
  gitHub: string
  username: string
  country: string
  region: string
  fullName: string
  header: string
  profileId: number
  educations: Education[]
  jobs: Job[]
  occupationStatus: OccupationStatus
  experience: Experience
  techs: string[]
}

type PromiseResolveValue<T> = T extends Promise<infer R> ? R : T
type EffectType<T extends (...args: any) => any> = ReturnType<ReturnType<T>>
type EffectReturnValue<T extends (...args: any) => any> = PromiseResolveValue<
  EffectType<T>
>
export type ActionType<T extends (...args: any) => any> = ReturnType<
  T
> extends DispatchObject
  ? ReturnType<T>
  : EffectReturnValue<T>
