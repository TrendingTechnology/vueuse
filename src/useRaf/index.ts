import { ref, computed } from '../api'
import { useNow } from '../useNow'

export function useRaf () {
  const now = useNow()
  const startAt = ref(now.value)

  const elapsed = computed(() => {
    return now.value - startAt.value
  })

  return elapsed
}
