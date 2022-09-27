import { useSafeAreaInsets } from 'react-native-safe-area-context'

// `export { useSafeAreaInsets as useSafeArea }` breaks autoimport, so do this instead
export const useSafeArea = useSafeAreaInsets
