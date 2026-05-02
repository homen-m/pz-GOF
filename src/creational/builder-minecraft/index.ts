/**
 * Патерн: Builder
 * Проблема: Створення ігрового об'єкта (наприклад, будинку) вимагає налаштування фундаменту, стін, даху та вікон. Передача всіх блоків через один конструктор робить код нечитабельним.
 * Анти-приклад: new House("stone_block", "oak_wood", "glass_pane", "cobblestone_stairs", true, false, 3).
 */

class VoxelStructure {
    public foundation: string = "";
    public walls: string = "";
    public roof: string = "";
    public hasWindows: boolean = false;

    public showInfo(): void {
        console.log(`Структура побудована! Фундамент: ${this.foundation}, Стіни: ${this.walls}, Дах: ${this.roof}, Вікна: ${this.hasWindows ? "Є" : "Немає"}`);
    }
}

interface StructureBuilder {
    buildFoundation(): this;
    buildWalls(): this;
    buildRoof(): this;
    addWindows(): this;
    getResult(): VoxelStructure;
}

class WoodenCabinBuilder implements StructureBuilder {
    private structure: VoxelStructure = new VoxelStructure();

    buildFoundation(): this { this.structure.foundation = "Круглий камінь (Cobblestone)"; return this; }
    buildWalls(): this { this.structure.walls = "Дубові дошки (Oak Planks)"; return this; }
    buildRoof(): this { this.structure.roof = "Сходи з ялини (Spruce Stairs)"; return this; }
    addWindows(): this { this.structure.hasWindows = true; return this; }

    getResult(): VoxelStructure { return this.structure; }
}

export function testBuilderMinecraft() {
    console.log("--- Builder (Voxel Game Structures) ---");
    const builder = new WoodenCabinBuilder();
    const cabin = builder
        .buildFoundation()
        .buildWalls()
        .buildRoof()
        .addWindows()
        .getResult();

    cabin.showInfo();
    console.log("");
}