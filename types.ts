export type Game = {
    id: number
    title: string
    thumbnail: string
    short_description: string
    release_date: string
    publisher: string
    platform: string
    genre: string
    game_url: string
    freetogame_profile_url: string
    developer: string
}

export type GameData = {
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    id: string
    minimum_system_requirements?: {
        graphics: string
        memory: string
        os: string
        processor: string
        storage: string
    }
    platform: string
    publisher: string
    release_date: string
    screenshots?: [
        {
            id: number, image: string
        }
    ],
    short_description: string
    status: string
    thumbnail: string
    title: string
}