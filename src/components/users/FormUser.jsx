import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserQuery } from '../../store/apis'

const FormUser = () => {
  const params = useParams()
  // console.log(params)
  const {data, isError, isLoading} = useGetUserQuery(params.id)
  // console.log(data)
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    if(data) setUser(data)
  }, [data])

  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <h1>Error...</h1>
  
  return(
    <div className="container mt-3">
      <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">Nombres</label>
        <input 
          type="text" 
          className="form-control"
          name="firstName"
          />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Apellidos</label>
        <input 
          type="text" 
          className="form-control"
          name="lastName" />
      </div>
      <button type="submit" className="btn btn-primary">Agregar usuario</button>
    </form>
    </div>
  )
}

export default FormUser