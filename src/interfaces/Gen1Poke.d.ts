// Generated by https://quicktype.io

export interface PokeID {
    abilities:                Ability[] | undefined;
    base_experience:          number | undefined;
    forms:                    Species[] | undefined;
    game_indices:             GameIndex[] | undefined;
    height:                   number | undefined;
    held_items:               any[] | undefined;
    id:                       number | undefined;
    is_default:               boolean | undefined;
    location_area_encounters: string | undefined;
    moves:                    Move[] | undefined;
    name:                     string | undefined;
    order:                    number | undefined;
    past_types:               any[] | undefined;
    species:                  Species | undefined;
    sprites:                  Sprites | undefined;
    stats:                    Stat[] | undefined;
    types:                    Type[] | undefined;
    weight:                   number | undefined;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name?: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    Species;
}

export interface Move {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Home };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Sprites {
    back_default:       string ;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string ;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export interface RedBlue {
    back_default:      string;
    back_gray:         string;
    back_transparent:  string;
    front_default:     string;
    front_gray:        string;
    front_transparent: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold:    Gold;
    silver:  Gold;
}

export interface Crystal {
    back_default:            string;
    back_shiny:              string;
    back_shiny_transparent:  string;
    back_transparent:        string;
    front_default:           string;
    front_shiny:             string;
    front_shiny_transparent: string;
    front_transparent:       string;
}

export interface Gold {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald:             Emerald;
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
}

export interface Emerald {
    front_default: string;
    front_shiny:   string;
}

export interface Home {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Stat {
    base_stat: number | undefined;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number | undefined;
    type?: Species | undefined;
}
