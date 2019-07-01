export default {
    "slug": "adult-black-dragon",
    "name": "Adult Black Dragon",
    "size": "Huge",
    "type": "dragon",
    "subtype": "",
    "group": "Black Dragon",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "armor_desc": "natural armor",
    "hit_points": 195,
    "hit_dice": "17d12 + 85",
    "speed": {
        "walk": 40,
        "fly": 80,
        "swim": 40
    },
    "strength": 23,
    "dexterity": 14,
    "constitution": 21,
    "intelligence": 14,
    "wisdom": 13,
    "charisma": 17,
    "strength_save": null,
    "dexterity_save": 7,
    "constitution_save": 10,
    "intelligence_save": null,
    "wisdom_save": 6,
    "charisma_save": 8,
    "perception": 11,
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "acid",
    "condition_immunities": "",
    "senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
    "languages": "Common, Draconic",
    "challenge_rating": "14",
    "actions": [
        {
            "name": "Multiattack",
            "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
            "name": "Bite",
            "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
            "attack_bonus": 11,
            "damage_dice": "2d10 + 1d8",
            "damage_bonus": 6
        },
        {
            "name": "Claw",
            "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
            "attack_bonus": 11,
            "damage_dice": "2d6",
            "damage_bonus": 6
        },
        {
            "name": "Tail",
            "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
            "attack_bonus": 11,
            "damage_dice": "2d8",
            "damage_bonus": 6
        },
        {
            "name": "Frightful Presence",
            "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
            "name": "Acid Breath (Recharge 5-6)",
            "desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
            "attack_bonus": 0,
            "damage_dice": "12d8"
        }
    ],
    "reactions": "",
    "legendary_actions": [
        {
            "name": "Detect",
            "desc": "The dragon makes a Wisdom (Perception) check."
        },
        {
            "name": "Tail Attack",
            "desc": "The dragon makes a tail attack."
        },
        {
            "name": "Wing Attack (Costs 2 Actions)",
            "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
    ],
    "special_abilities": [
        {
            "name": "Amphibious",
            "desc": "The dragon can breathe air and water."
        },
        {
            "name": "Legendary Resistance (3/Day)",
            "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
    ],
    "document_slug": "systems-reference-document",
    "initiative":"25"
}