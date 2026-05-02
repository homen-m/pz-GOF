/**
 * Патерн: Facade
 * Проблема: Аналіз даних вимагає послідовного виклику різних бібліотек: очищення (на кшталт pandas), математичної обробки та візуалізації.
 * Анти-приклад: Клієнтський код вручну керує всіма підсистемами, перетворюючись на моноліт.
 */

// Складні підсистеми
class DataLoader { loadCSV(file: string) { console.log(`Завантаження датасету з ${file}`); } }
class DataCleaner { dropNulls() { console.log("Видалення порожніх значень (NaN)"); } }
class MachineLearningModel { train() { console.log("Навчання ML моделі на підготовлених даних"); } }
class ChartVisualizer { plot() { console.log("Відмальовка графіка результатів"); } }

// Фасад
class DataPipelineFacade {
    constructor(
        private loader = new DataLoader(),
        private cleaner = new DataCleaner(),
        private ml = new MachineLearningModel(),
        private visualizer = new ChartVisualizer()
    ) {}

    public runAnalysis(filename: string): void {
        console.log("--- Запуск автоматичного пайплайну аналізу даних ---");
        this.loader.loadCSV(filename);
        this.cleaner.dropNulls();
        this.ml.train();
        this.visualizer.plot();
        console.log("--------------------------------------------------");
    }
}

export function testFacadeData() {
    console.log("--- Facade (Data Science Pipeline) ---");
    const pipeline = new DataPipelineFacade();
    pipeline.runAnalysis("cybersecurity_logs.csv");
    console.log("");
}