import { testBuilderMinecraft } from "../src/creational/builder-minecraft";
import { testSingletonDistributed } from "../src/creational/singleton-distributed";
import { testAdapterLearning } from "../src/structural/adapter-learning";
import { testFacadeData } from "../src/structural/facade-data";
import { testStateCombat } from "../src/behavioral/state-combat";
import { testStrategyRacing } from "../src/behavioral/strategy-racing";

console.log("==================================================");
console.log("Демонстрація GOF Патернів Проєктування");
console.log("Геймдев, Data Science та Розподілені Системи");
console.log("==================================================\n");

// Creational
testBuilderMinecraft();
testSingletonDistributed();

// Structural
testAdapterLearning();
testFacadeData();

// Behavioral
testStateCombat();
testStrategyRacing();

console.log("==================================================");
console.log("Демонстрацію успішно завершено.");
console.log("==================================================");