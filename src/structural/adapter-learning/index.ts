/**
 * Патерн: Adapter
 * Проблема: Ваша персональна система навчання (LMS) очікує метод `getCompletedTasks()`, а стороння платформа JavaRush повертає дані через метод `fetchUserProgress()`.
 * Анти-приклад: Зміна інтерфейсу власної системи під кожну нову платформу (Coursera, Prometheus, JavaRush).
 */

// Цільовий інтерфейс
interface MyStudyDashboard {
    getCompletedTasks(): string[];
}

// Стороння система
class JavaRushAPI {
    public fetchUserProgress(userId: string): any {
        console.log(`[API] Отримання прогресу для ${userId}...`);
        return {
            level: 15,
            solvedQuests: ["Syntax", "Core", "Collections"]
        };
    }
}

// Адаптер
class JavaRushAdapter implements MyStudyDashboard {
    private api: JavaRushAPI;
    private userId: string;

    constructor(api: JavaRushAPI, userId: string) {
        this.api = api;
        this.userId = userId;
    }

    getCompletedTasks(): string[] {
        console.log("[Адаптер] Перетворення формату даних...");
        const data = this.api.fetchUserProgress(this.userId);
        return data.solvedQuests.map((q: string) => `Квест: ${q}`);
    }
}

export function testAdapterLearning() {
    console.log("--- Adapter (Learning Platforms Integration) ---");
    const javaRush = new JavaRushAPI();
    const dashboard: MyStudyDashboard = new JavaRushAdapter(javaRush, "student_2101");

    const tasks = dashboard.getCompletedTasks();
    console.log(`Виконані завдання: ${tasks.join(", ")}\n`);
}