export interface Sidekick {
    id: number;
    name: string;
    imageUrl: string;
}

export interface HeroDTO {
    id: number;
    name: string;
    imageUrl: string;
    backgroundStory: string;
    sidekicks: Sidekick[];
}

export interface Hero {
    id?: number;
    name: string;
    lastName: string;
    age: number;
    heroName: string;
    imageUrl: string;
    backgroundStory: string;
    sidekicks: Sidekick[];
}

export interface HeroPatchDTO {
    name: string;
    imageUrl: string;
    backgroundStory: string;
}

