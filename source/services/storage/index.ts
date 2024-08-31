import { MMKV } from "react-native-mmkv"
import { Storage } from "redux-persist"

const storage = new MMKV()

export const StorageUtils: Storage = {
  /**
   * Sets the value for the specified key in the storage.
   *
   * @param {string} key - The key to set the value for.
   * @param {any} value - The value to set.
   * @return {Promise<boolean>} A promise that resolves to true if the value was successfully set.
   */
  setItem: (key, value) => {
    storage.set(key, value)
    return Promise.resolve(true)
  },
  /**
   * Retrieves the value associated with the specified key from the storage.
   *
   * @param {string} key - The key of the item to retrieve.
   * @return {Promise<string | null>} A promise that resolves to the value associated with the key, or null if the key does not exist.
   */
  getItem: (key) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  /**
   * Removes the item associated with the specified key from the storage.
   *
   * @param {string} key - The key of the item to remove.
   * @return {Promise<void>} A promise that resolves when the item is successfully removed.
   */
  removeItem: (key) => {
    storage.delete(key)
    return Promise.resolve()
  }
}
