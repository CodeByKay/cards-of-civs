// While game is not over (both town center still has health), continue iterating at a pace of a designated  time (fast 0.5s, normal 1s, slow 2s)

// For the resources, generate based on the number of villager multiplied by their gathering rate including any production upgrades.

// For the action queue, take the next in line and process. Could be creating villager, making buildings, ageing civilization up, creating military, building walls.

// If any actions are being processed and takes time to complete, decrease the queue timer for that specific action. If it is complete, update the board to show the building, upgrade, or units. If the associated building is destroyed, completely remove the action. Production upgrade from resource building, unit upgrade from military building.

// For the military queue, take the next in line and action. Could be attacking enemy military or if there is none, could be attacking enemy buildings. If previously attacking enemy building but new enemy military was produced, redirect to attacking the units. Do the damage calculations based on the damage table. If a production building is destroyed, do damage to villagers, and update the villager count. If all production buildings are destroyed, attack the town center.

type Speed = "slow" | "normal" | "fast";

const SPEED_INTERVALS: Record<Speed, number> = {
  slow: 2000,
  normal: 1000,
  fast: 500,
};

interface Action {
  type: string;
  duration: number;
  timeRemaining: number;
  payload: any;
  buildingId?: string;
}

interface GameState {
  townCenters: [TownCenter, TownCenter];
  villagers: Villager[];
  resourceBuildings: ResourceBuilding[];
  militaryUnits: MilitaryUnit[];
  actionsQueue: Action[];
  militaryQueue: MilitaryUnit[];
  resources: number;
  speed: Speed;
  isGameOver: boolean;
}

const gameState: GameState = {
  townCenters: [
    { id: "tc1", health: 1000, type: "townCenter" },
    { id: "tc2", health: 1000, type: "townCenter" },
  ],
  villagers: [],
  resourceBuildings: [],
  militaryUnits: [],
  actionsQueue: [],
  militaryQueue: [],
  resources: 0,
  speed: "normal",
  isGameOver: false,
};

// Main game loop
function startGameLoop() {
  const interval = SPEED_INTERVALS[gameState.speed];

  const loop = setInterval(() => {
    if (gameState.townCenters.some(tc => tc.health <= 0)) {
      gameState.isGameOver = true;
      clearInterval(loop);
      console.log("Game Over");
      return;
    }

    processResources();
    processActions();
    processMilitary();
  }, interval);
}

// Resource generation
function processResources() {
  let totalRate = 0;
  for (const villager of gameState.villagers) {
    const bonus = gameState.resourceBuildings.reduce(
      (acc, rb) => acc + rb.productionBonus,
      0
    );
    totalRate += villager.gatheringRate + bonus;
  }
  gameState.resources += totalRate;
  console.log(`Generated resources: +${totalRate}, Total: ${gameState.resources}`);
}

// Action queue logic
function processActions() {
  const newQueue: Action[] = [];

  for (const action of gameState.actionsQueue) {
    const buildingDestroyed = action.buildingId &&
      !gameState.resourceBuildings.find(rb => rb.id === action.buildingId);

    if (buildingDestroyed) {
      continue; // skip and remove action
    }

    action.timeRemaining -= SPEED_INTERVALS[gameState.speed];

    if (action.timeRemaining <= 0) {
      completeAction(action);
    } else {
      newQueue.push(action);
    }
  }

  gameState.actionsQueue = newQueue;
}

function completeAction(action: Action) {
  switch (action.type) {
    case "createVillager":
      gameState.villagers.push({
        id: `villager_${Date.now()}`,
        health: 100,
        gatheringRate: 5,
        type: "villager"
      });
      break;
    case "build":
      // Add to buildings
      break;
    case "upgrade":
      // Apply upgrade effect
      break;
    case "createMilitary":
      gameState.militaryUnits.push({
        id: `unit_${Date.now()}`,
        health: 100,
        damage: 10,
        type: "military"
      });
      break;
    default:
      break;
  }
}

// Military behavior
function processMilitary() {
  for (const unit of gameState.militaryQueue) {
    const enemyUnits = gameState.militaryUnits.filter(u => u.type !== unit.type);

    if (enemyUnits.length > 0) {
      unit.target = enemyUnits[0];
      attack(unit, unit.target);
    } else {
      const enemyBuildings = gameState.townCenters.filter(tc => tc.type !== unit.type);
      unit.target = enemyBuildings[0];
      attack(unit, unit.target);
    }
  }
}

function attack(attacker: MilitaryUnit, target: Entity) {
  target.health -= attacker.damage;
  console.log(`${attacker.id} attacked ${target.id}, target health: ${target.health}`);

  if (target.health <= 0) {
    handleDestruction(target);
  }
}

function handleDestruction(target: Entity) {
  console.log(`${target.id} has been destroyed.`);

  if (target.type === "resourceBuilding") {
    // Remove villagers or apply consequences
    gameState.villagers.splice(0, 1); // example logic
  } else if (target.type === "townCenter") {
    gameState.isGameOver = true;
  }

  // Remove from game state
  gameState.resourceBuildings = gameState.resourceBuildings.filter(b => b.id !== target.id);
  gameState.townCenters = gameState.townCenters.filter(tc => tc.id !== target.id);
}

startGameLoop();
