import fs from 'fs'
import path from 'path'

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    github: string
    linkedin: string
    twitter: string
  }
}

export interface TeamData {
  team: TeamMember[]
}

let cachedTeamData: TeamData | null = null

export function getTeamData(): TeamData {
  if (cachedTeamData) {
    return cachedTeamData
  }

  try {
    const teamJsonPath = path.join(process.cwd(), 'docs', 'team-members', 'team.json')
    const teamJsonContent = fs.readFileSync(teamJsonPath, 'utf8')
    const rawData = JSON.parse(teamJsonContent)
    
    // Fix image paths to ensure they point to the correct location
    cachedTeamData = {
      team: rawData.team.map((member: TeamMember) => ({
        ...member,
        image: member.image.startsWith('/') 
          ? `/team-members${member.image}` 
          : `/team-members/${member.image}`
      }))
    }
    
    return cachedTeamData!
  } catch (error) {
    console.warn('Failed to load team data from docs/team-members/team.json:', error)
    
    // Fallback to empty team data if file doesn't exist
    cachedTeamData = { team: [] }
    return cachedTeamData
  }
}

export function getAllTeamMembers(): TeamMember[] {
  return getTeamData().team
}

export function getTeamMemberByName(name: string): TeamMember | undefined {
  return getAllTeamMembers().find(member => 
    member.name.toLowerCase() === name.toLowerCase()
  )
}