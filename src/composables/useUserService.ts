import { useFetch } from '@vueuse/core'
import { User } from '~/types/User'

type ApiResponse = Record<'results', User[]>

export function useUserService() {
  const { data } = useFetch<ApiResponse>('https://randomuser.me/api/', { refetch: true }).json()

  const user = computed(() => {
    let user = {}
    try {
      user = data.value.results[0]
    }
    catch (_error) {}
    return user
  })

  return {
    user,
  }
}
