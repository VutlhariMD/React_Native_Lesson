import AsyncStorage from '@react-native-async-storage/async-storage';

// Keys used across the app, kept in one place to avoid typos
export const KEYS = {
  users: 'users',
  session: 'session',
  notes: 'notes',
} as const;

// Read a JSON value. If it is missing or broken, return the fallback instead of crashing.
export async function readJSON<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

// Save any value as JSON
export async function writeJSON<T>(key: string, value: T): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function removeKey(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}