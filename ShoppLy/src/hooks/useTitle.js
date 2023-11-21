import React, { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ShoppLy`
  }, [title])
}

export default useTitle