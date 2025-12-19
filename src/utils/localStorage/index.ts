import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Keys used across the app for persistence
 * Keep them centralized to avoid typos and collisions
 */
export const StorageKeys = {
  AUTH_STATE: 'AUTH_STATE',
  AUTH_TOKEN: 'AUTH_TOKEN',
} as const;

/**
 * -----------------------------
 * AsyncStorage helpers
 * -----------------------------
 * Used for NON‑sensitive data:
 * - auth stage
 * - user profile (without secrets)
 * - feature flags
 */

export async function setItem<T>(key: string, value: T): Promise<void> {
  try {
    const serialized = JSON.stringify(value);
    await AsyncStorage.setItem(key, serialized);
  } catch (error) {
    console.warn(`[Storage] Failed to set item: ${key}`, error);
  }
}

export async function getItem<T>(key: string): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.warn(`[Storage] Failed to get item: ${key}`, error);
    return null;
  }
}

export async function removeItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn(`[Storage] Failed to remove item: ${key}`, error);
  }
}

export async function clearAll(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.warn('[Storage] Failed to clear AsyncStorage', error);
  }
}

/**
 * -----------------------------
 * SecureStore helpers
 * -----------------------------
 * Used for SENSITIVE data:
 * - access tokens
 * - refresh tokens
 * - OTP secrets
 */

// export async function setSecureItem(key: string, value: string): Promise<void> {
//   try {
//     await SecureStore.setItemAsync(key, value, {
//       keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
//     });
//   } catch (error) {
//     console.warn(`[SecureStore] Failed to set item: ${key}`, error);
//   }
// }

// export async function getSecureItem(key: string): Promise<string | null> {
//   try {
//     return await SecureStore.getItemAsync(key);
//   } catch (error) {
//     console.warn(`[SecureStore] Failed to get item: ${key}`, error);
//     return null;
//   }
// }

// export async function removeSecureItem(key: string): Promise<void> {
//   try {
//     await SecureStore.deleteItemAsync(key);
//   } catch (error) {
//     console.warn(`[SecureStore] Failed to remove item: ${key}`, error);
//   }
// }

/**
 * -----------------------------
 * Auth‑specific convenience helpers
 * -----------------------------
 */

export async function persistAuthState(state: unknown): Promise<void> {
  return setItem(StorageKeys.AUTH_STATE, state);
}

export async function restoreAuthState<T>(): Promise<T | null> {
  return getItem<T>(StorageKeys.AUTH_STATE);
}

export async function clearAuthState(): Promise<void> {
  await removeItem(StorageKeys.AUTH_STATE);
  //   await removeSecureItem(StorageKeys.AUTH_TOKEN);
}
