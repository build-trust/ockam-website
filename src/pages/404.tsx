import { useEffect } from 'react';
import { useRouter } from "next/router"

const Custom404 = (): null => {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return null
}

export default Custom404
