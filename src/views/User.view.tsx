import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function UserView() {
  const params = useParams<{userId: string}>()
  useEffect(() => {

  },[])
  return <div>
    <h1>Usuários - { params.userId }</h1>
  </div>
}