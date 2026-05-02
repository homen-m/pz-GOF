/**
 * Патерн: Singleton
 * Проблема: У системі розподілених обчислень (Distributed Computing) має бути лише один головний вузол-координатор, який реєструє робочі станції та розподіляє завдання.
 * Анти-приклад: Створення кількох координаторів, що призведе до дублювання завдань та розсинхронізації стану мережі.
 */

class ClusterCoordinator {
    private static instance: ClusterCoordinator;
    private nodes: string[] = [];

    private constructor() {
        console.log("[Координатор] Ініціалізація головного вузла керування кластером...");
    }

    public static getInstance(): ClusterCoordinator {
        if (!ClusterCoordinator.instance) {
            ClusterCoordinator.instance = new ClusterCoordinator();
        }
        return ClusterCoordinator.instance;
    }

    public registerNode(ipAddress: string): void {
        this.nodes.push(ipAddress);
        console.log(`[Координатор] Зареєстровано новий вузол: ${ipAddress}. Всього вузлів: ${this.nodes.length}`);
    }

    public dispatchTask(taskName: string): void {
        if (this.nodes.length === 0) {
            console.log("Немає доступних вузлів для обчислень!");
            return;
        }
        const targetNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];
        console.log(`[Координатор] Завдання '${taskName}' відправлено на вузол ${targetNode}`);
    }
}

export function testSingletonDistributed() {
    console.log("--- Singleton (Distributed Computing Coordinator) ---");
    const networkModule = ClusterCoordinator.getInstance();
    const taskModule = ClusterCoordinator.getInstance();

    networkModule.registerNode("192.168.1.101");
    networkModule.registerNode("192.168.1.105");

    taskModule.dispatchTask("Обробка великого масиву даних");
    console.log("");
}