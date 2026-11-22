// A simple unique id: current time + random letters/digits
export const generateId = (): string =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

