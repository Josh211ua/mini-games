// Prefix all action types with the game
// name to avoid collisions
function prefixAction(constant) {
    return "DEMO_" + constant;
}

// Action Types
// ============
export const INCREMENT = prefixAction("INCREMENT");
export const DECREMENT = prefixAction("DECREMENT");
export const RESET = prefixAction("RESET");

// Action Creators
// ===============
export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function reset() {
    return {
        type: RESET
    };
}
