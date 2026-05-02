/**
 * Патерн: Strategy
 * Проблема: Автомобіль повинен по-різному реагувати на повороти залежно від обраного профілю: Дрифт або Зчеплення (Grip).
 * Анти-приклад: Додавання методів `turnDrift()` та `turnGrip()` у базовий клас `Car`, що роздуває його код.
 */

interface HandlingStrategy {
    cornering(speed: number): void;
}

class DriftHandling implements HandlingStrategy {
    cornering(speed: number): void {
        console.log(`[Drift] Вхід у поворот на швидкості ${speed} км/год. Зрив задньої осі, ковзання кероване.`);
    }
}

class GripHandling implements HandlingStrategy {
    cornering(speed: number): void {
        console.log(`[Grip] Вхід у поворот на швидкості ${speed} км/год. Максимальне зчеплення коліс з трасою, ідеальна траєкторія.`);
    }
}

class RaceCar {
    private handling: HandlingStrategy;

    constructor(handling: HandlingStrategy) {
        this.handling = handling;
    }

    setTuning(handling: HandlingStrategy): void {
        this.handling = handling;
        console.log("-> Застосовано новий профіль тюнінгу.");
    }

    takeCorner(speed: number): void {
        this.handling.cornering(speed);
    }
}

export function testStrategyRacing() {
    console.log("--- Strategy (Racing Car Setup) ---");
    const nfsCar = new RaceCar(new GripHandling());
    nfsCar.takeCorner(150);

    nfsCar.setTuning(new DriftHandling());
    nfsCar.takeCorner(120);
    console.log("");
}