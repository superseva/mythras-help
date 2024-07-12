var specialEffectDescriptions = {
  accidentalInjury: {
    title: "Accidental Injury",
    text: "The defender deflects or twists an opponent's attack in such a way that he fumbles, injuring himself. The attacker must roll damage against himself in a random hit location using the weapon used to strike. If unarmed he tears or breaks something internal, the damage roll ignoring any armour."
  },
  arise: {
    title: "Arise",
    text: "Allows the defender to use a momentary opening to roll back up to their feet."
  },
  bash: {
    title: "Bash",
    text: "The attacker deliberately bashes the opponent off balance. How far the defender totters back or sideward depends on the weapon being used. Shields knock an opponent back one metre per for every two points of damage rolled (prior to any subtractions due to armour, parries, and so forth), whereas bludgeoning weapons knock back one metre per for every three points. Bashing works only on creatures up to twice the attacker’s SIZ. If the recipient is forced backwards into an obstacle, then they must make a Hard Athletics or Acrobatics skill roll to avoid falling or tripping over."
  },
  bleed: {
    title: "Bleed",
    text: "The attacker can attempt to cut open a major blood vessel. If the blow overcomes Armour Points and injures the target, the defender must make an opposed roll of Endurance against the original attack roll. If the defender fails, then they begin to bleed profusely. At the start of each Combat Round the recipient loses one level of Fatigue, until they collapse and possibly die. Bleeding wounds can be staunched by passing a First Aid skill roll, but the recipient can no longer perform any strenuous or violent action without re-opening the wound."
  },
  blindOpponent: {
    title: "Blind Opponent",
    text: "On a critical the defender briefly blinds his opponent by throwing sand, reflecting sunlight off his shield, or some other tactic which briefly interferes with the attacker's vision. The attacker must make an opposed roll of his Evade skill (or Weapon style if using a shield) against the defender's original parry roll. If the attacker fails he suffers the Blindness situational modifier for the next 1d3 turns."
  },
  bypassArmour: {
    title: "Bypass Armour",
    text: "On a critical the attacker finds a gap in the defender's natural or worn armour. If the defender is wearing armour above natural protection, then the attacker must decide which of the two is bypassed. This effect can be stacked to bypass both. For the purposes of this effect, physical protection gained from magic is considered as being worn armour."
  },
  chooseLocation: {
    title: "Choose Location",
    text: "When using hand-to-hand melee weapons the attacker may freely select the location where the blow lands, as long as that location is normally within reach. If using ranged weapons Choose Location is a Critical Success only, unless the target is within close range, and is either stationary or unaware of the attacker."
  },
  circumventCover: {
    title: "Circumvent Cover",
    text: "Assuming that the shooter is using some high-tech weaponry, they can fire around the target's cover. In most cases this will require something along the lines of self-guided ammunition. If used as a trick shot, for example bouncing a laser blast off a mirror or ricocheting a bullet off a wall, then the special effect should be treated as a Critical Success only with a commensurate reduction in damage."
  },
  circumventParry: {
    title: "Circumvent Parry",
    text: "On a critical, the attacker may completely bypass an otherwise successful parry."
  },
  closeRange: {
    title: "Close Range",
    text: "Permits the character to automatically change the engagement range between himself and his opponent, so that they end up at the Range favoured by the shorter weapon (see Weapon Reach - Closing and Opening Range page 106)."
  },
  compelSurrender: {
    title: "Compel Surrender",
    text: "Allows the character a chance to force the surrender of a helpless or disadvantaged opponent; for example, someone who has been disarmed, is lying prone unable to regain his footing, has suffered a serious (or worse) wound, and so on. Damage is not inflicted on the target; they are only threatened. Assuming the target is sapient and able to understand the demand, the target must make an opposed roll of Willpower against the original attack or parry roll. If the target fails, they capitulate. Games Masters may wish to reserve Compel Surrender for use against non-player characters only."
  },
  damageWeapon: {
    title: "Damage Weapon",
    text: "Permits the character to damage his opponent’s weapon as part of an attack or parry. If attacking, the character aims specifically at the defender’s parrying weapon and applies his damage roll to it, rather than the wielder. The targeted weapon uses its own Armour Points for resisting the damage. If reduced to zero Hit Points, the weapon breaks."
  },
  disarmOpponent: {
    title: "Disarm Opponent",
    text: "The character knocks, yanks, or twists the opponent’s weapon out of his hand. The opponent must make an opposed roll of his Combat Style against the character’s original roll. If the recipient of the disarm loses, his weapon is flung a distance equal to the roll of the disarmer’s Damage Modifier in meters. If there is no Damage Modifier, then the weapon drops at the disarmed person’s feet. The comparative size of the weapons affects the roll. Each step that the disarming character’s weapon is larger increases the difficulty of the opponent’s roll by one grade. Conversely, each step the disarming character's weapon is smaller makes the difficulty one grade easier. Disarming works only on creatures up to twice the attacker’s STR."
  },
  dropFoe: {
    title: "Drop Foe",
    text: "Assuming the target suffers at least a minor wound from the shot, they are forced to make an Opposed Test of their Endurance against the attacker’s hit roll. Failure indicates that the target succumbs to shock and pain, becoming incapacitated and unable to continue fighting. Recovery from incapacitation can be performed with a successful First Aid check or using some form of technological or narcotic booster if such exists in the campaign. Otherwise, the temporary incapacitation lasts for a period equal to one hour divided by the Healing Rate of the target."
  },
  duckBack: {
    title: "Duck Back",
    text: "This special effect allows the shooter to immediately duck back into cover, without needing to wait for their next Turn to use the Take Cover action. The character must be already standing or crouching adjacent to some form of cover to use Duck Back."
  },
  enhanceParry: {
    title: "Enhance Parry",
    text: "On a critical, the defender manages to deflect the entire force of an attack, no matter the Size of his weapon."
  },
  entangle: {
    title: "Entangle",
    text: "Allows a character wielding an entangling weapon, such as a whip or net, to immobilize the location struck. An entangled arm cannot use whatever it is holding; a snared leg prevents the target from moving; whilst an enmeshed head, chest, or abdomen makes all skill rolls one grade harder. On his following turn, the wielder may spend an Action Point to make an automatic Trip Opponent attempt. An entangled victim can attempt to free himself on his turn by either attempting an opposed roll using Brawn to yank free, or win a Special Effect and select Damage Weapon, Disarm Opponent, or Slip Free."
  },
  flurry: {
    title: "Flurry",
    text: "An unarmed creature or attacker can make an immediate follow-up attack using a different limb or body part, without needing to wait for its next turn. A human attacker might follow up a punch to the abdomen with a knee to the face, for example. The additional attack still costs an Action Point, but potentially allows several attacks in sequence before the defender can respond offensively."
  },
  forceFailure: {
    title: "Force Failure",
    text: "Used when an opponent fumbles, the character can combine Force Failure with any other Special Effect which requires an opposed roll to work. Force Failure causes the opponent to fail his resistance roll by default—thereby automatically be disarmed, tripped, etc."
  },
  grip: {
    title: "Grip",
    text: "Provided the opponent is within the attacker’s Unarmed Combat reach, he may use an empty hand (or similar limb capable of gripping such as claws, tails, or tentacles) to hold onto the opponent, preventing them from being able to change weapon range or disengage from combat. The opponent may attempt to break free on his turn, requiring an opposed roll of either Brawn or Unarmed against whichever of the two skills the gripper prefers. If the gripped victim wins, they manage to break free. Note that some attackers using Brawn may be so strong that no amount of brute force or cunning technique can overcome their grip (see Brawn page 39)."
  },
  impale: {
    title: "Impale",
    text: "The attacker can attempt to drive an impaling weapon deep into the defender. Roll weapon damage twice, with the attacker choosing which of the two results to use for the attack. If armour is penetrated and causes a wound, then the attacker has the option of leaving the weapon in the wound, or yanking it free on their next turn. Leaving the weapon in the wound inflicts a difficulty grade on the victim’s future skill attempts. The severity of the penalty depends on the size of both the creature and the weapon impaling it, as listed on the Impale Effects Table above. For simplicity’s sake, further impalements with the same sized weapon inflict no additional penalties. To withdraw an impaled weapon during melee requires use of the Ready Weapon combat action. The wielder must pass an unopposed Brawn roll (or win an opposed Brawn roll if the opponent resists). Success pulls the weapon free, causing further injury to the same location equal to half the normal damage roll for that weapon, but without any damage modifier. Failure implies that the weapon remained stuck in the wound with no further effect, although the wielder may try agian on their next turn. Specifficaly barbed weapons (such as harpoons) inflict normal damage. Armour doesn't reduce withdrawal damage. Whilst it remains impaled, the attacker cannot use his impaling weapon for parrying."
  },
  killSilently: {
    title: "Kill Silently",
    text: "Restricted to those trained in a Combat Style with the Assassination benefit. It allows the attacker to neutralize a victim in complete silence, covering their mouth or grasping them about the neck whilst simultaneously stabbing, cutting, or garrotting them. This prevents the victim from crying out or otherwise raising an alarm for the entire round. In addition, if during this time the attacks inflict a Serious or Major Wound, the victim will automatically fail its Endurance roll. Kill Silently can only be used on a surprised opponent, and only on the first attack against them."
  },
  marksman: {
    title: "Marksman",
    text: "Permits the shooter to move the Hit Location struck by his shot by one step, to an immediately adjoining body area. Physiology has an effect on what can be re-targeted, and common sense should be applied. Thus, using this special effect on a humanoid would permit an attacker who rolled a leg shot, to move it up to the abdomen instead. Conversely, shooting a griffin in the chest would permit selection of the forelegs, wings, or head."
  },
  maximiseDamage: {
    title: "Maximise Damage",
    text: "On a critical, the character may substitute one of his weapon's damage dice for its full value. For example, a Hatchet which normally does 1d6 damage would instead be treated as a 6, whereas a great club with 2d6 damage would instead inflict 1d6+6 damage. This special effect may be stacked. Although it can also be used for natural weapons, Maximise Damage does not affect the Damage Modifier of the attacker, which must be rolled normally."
  },
  openRange: {
    title: "Open Range",
    text: "Permits the character to automatically change the engagement range between himself and his opponent, so that they end up at the Range favoured by the longer weapon (see Weapon Reach - Closing and Opening Range page 106)."
  },
  overextendOpponent: {
    title: "Overextend Opponent",
    text: "The defender sidesteps or retreats at an inconvenient moment, causing the attacker to overreach himself. Opponent cannot attack on his next turn. This special effect can be stacked."
  },
  overpenetration: {
    title: "Overpenetration",
    text: "If shooting at lineally positioned opponents or into a densely packed group, this special effect allows the shot to travel completely through the first victim to strike a second behind them, assuming that it overcomes the first target’s body armour. The second victim, however, only suffers half damage due to attenuation or slowing down of the shot. Overpenetration is generally of more use with high-powered weapons that inflict large amounts of damage or those which have some sort of armour-piercing ability. Any special effects inflicted on the first target are not applied to the second."
  },
  pinDown: {
    title: "Pin Down",
    text: "Similar to Press Advantage, this special effect forces the target to make an Opposed Test of their Willpower against the attacker's hit roll. Failure means that the target hunkers down behind whatever cover is available, and cannot return fire on their next turn. Note that Pin Down works even if no actual damage is inflicted on the target (perhaps due to a successful evasion or shots striking their cover instead), as it relies on the intimidation effect of projectiles passing very close by. Although a pinned victim is unable to fire back for the requisite time, they can perform other actions provided they don’t expose themselves to fire in the process, such as crawling away to new cover, communicating with others, reloading a weapon, and so on."
  },
  pinWeapon: {
    title: "Pin Weapon",
    text: "On a critical, the character can pin one of his opponent’s weapons or shield, using his body or positioning to hold it in place. On his turn, the opponent may attempt to wrestle or manoeuvre the pinned item free. This costs an Action Point and works as per the Grip special effect. Failure means that the pinned item remains unusable. In the meantime, an opponent lacking a weapon or shield in the other hand may only avoid an attack by evading, using his Unarmed skill, or disengaging completely."
  },
  prepareCounter: {
    title: "Prepare Counter",
    text: "The defender reads the patterns of his foe and pre-plans a counter against a specific Special Effect (which should be noted down in secret). If his opponent attempts to inflict the chosen Special Effect upon him during the fight, the defender instantly substitutes the attacker’s effect with an offensive or defensive one of his own, which succeeds automatically."
  },
  pressAdvantage: {
    title: "Press Advantage",
    text: "The attacker pressures his opponent, so that his foe is forced to remain on the defensive, and cannot attack on their next turn. This allows the attacker to potentially establish an unbroken sequence of attacks whilst the defender desperately blocks. It is only effective against foes concerned with defending themselves."
  },
  rapidReload: {
    title: "Rapid Reload",
    text: "When using a ranged weapon, the attacker reduces the reload time for the next shot by one. This effect can be stacked."
  },
  remise: {
    title: "Remise",
    text: "The attacker performs a sequential follow-up attack with a weapon of size Small on his opponent’s next turn, which forces the foe to change their proactive action into a reactive one."
  },
  scarFoe: {
    title: "Scar Foe",
    text: "The opponent is given a scar that will disfigure them for the rest of their life, for example a slice across the face, or an artfully inscribed letter across the chest."
  },
  selectTarget: {
    title: "Select Target",
    text: "When an attacker fumbles, the defender may manoeuvre or deflect the blow in such a way that it hits an adjacent bystander instead. This requires that the new target is within reach of the attacker’s close combat weapon, or in the case of a ranged attack, is standing along the line of fire. The new victim is taken completely by surprise by the unexpected accident, and has no chance to avoid the attack which automatically hits. In compensation, however, they suffer no special effect."
  },
  slipFree: {
    title: "Slip Free",
    text: "On a critical, the defender can automatically escape being Entangled, Gripped, or Pinned."
  },
  standFast: {
    title: "Stand Fast",
    text: "The defender braces himself against the force of an attack, allowing them to avoid the Knockback effects of any damage received."
  },
  stunLocation: {
    title: "Stun Location",
    text: "The attacker can use a bludgeoning weapon to temporarily stun the body part struck. If the blow overcomes Armour Points and injures the target, the defender must make an opposed roll of Endurance vs. the original attack roll. If the defender fails, then the Hit Location is incapacitated for a number of turns equal to the damage inflicted. A blow to the torso causes the defender to stagger winded, only able to defend. A head shot renders the foe briefly insensible."
  },
  sunder: {
    title: "Sunder",
    text: "The attacker may use a suitable weapon to damage the armour or natural protection of an opponent. Any weapon damage, after reductions for parrying or magic, is applied against the Armour Point value of the protection. Surplus damage in excess of its Armour Points is then used to reduce the AP value of that armour(ed) location—ripping straps, bursting rings, creasing plates or tearing away the hide, scales or chitin of monster. If any damage remains after the protection has been reduced to zero AP, it carries over onto the Hit Points of the location struck."
  },
  takeWeapon: {
    title: "Take Weapon",
    text: "Allows an unarmed character to yank or twist an opponent’s weapon out of his hand. The opponent must make an opposed roll of his Combat Style against the character’s original Unarmed roll. If the target loses, his weapon is taken and from that moment on, may be used by the character instead. Take Weapon differs from Disarm Opponent in that the size of the weapon is largely irrelevant. However, the technique only works on creatures of up to twice the attacker’s STR."
  },
  tripOpponent: {
    title: "Trip Opponent",
    text: "The character attempts to overbalance or throw his opponent to the ground. The opponent must make an opposed roll of his Brawn, Evade or Acrobatics against the character’s original roll. If the target fails, he falls prone. Quadruped opponents (or creatures with even more legs) may substitute their Athletics skill for Evade, and treat the roll as one difficulty grade easier."
  },
  weaponMalfunction: {
    title: "Weapon Malfunction (Firearms)",
    text: "The attacker’s weapon malfunctions in such a way that it is rendered useless until time can be spent repairing it."
  },
  withdraw: {
    title: "Withdraw",
    text: "The defender may automatically withdraw out of reach, breaking off engagement with that particular opponent."
  }
};
