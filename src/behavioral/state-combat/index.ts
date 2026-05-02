/**
 * Патерн: State
 * Проблема: Поведінка персонажа (атаки, захист) кардинально змінюється залежно від обраної стійки (одинарний меч, подвійний меч, два мечі).
 * Анти-приклад: Величезні `switch (currentStance)` всередині методів `attack()` та `block()`.
 */

interface LightsaberStance {
    attack(): void;
    block(): void;
}

class SingleBladeStance implements LightsaberStance {
    attack(): void { console.log("[Одинарний меч] Збалансований удар середньої сили."); }
    block(): void { console.log("[Одинарний меч] Надійне відбиття бластерних пострілів."); }
}

class DoubleBladedStance implements LightsaberStance {
    attack(): void { console.log("[Подвійний меч] Швидка кругова атака по натовпу ворогів!"); }
    block(): void { console.log("[Подвійний меч] Обертання меча для масового захисту."); }
}

class JediCombatContext {
    private stance: LightsaberStance;

    constructor(initialStance: LightsaberStance) {
        this.stance = initialStance;
    }

    setStance(stance: LightsaberStance): void {
        console.log("-> Зміна бойової стійки...");
        this.stance = stance;
    }

    performAttack(): void { this.stance.attack(); }
    performBlock(): void { this.stance.block(); }
}

export function testStateCombat() {
    console.log("--- State (Jedi Combat Stances) ---");
    const player = new JediCombatContext(new SingleBladeStance());

    player.performAttack();
    player.performBlock();

    player.setStance(new DoubleBladedStance());
    player.performAttack();
    console.log("");
}