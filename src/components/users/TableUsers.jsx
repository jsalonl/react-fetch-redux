import { useState, useEffect } from "react"
import { useGetUsersQuery } from "../../store/apis"
import { Link } from "react-router-dom"

const TableUsers = () => {

  const {data={}, isLoading, isError} = useGetUsersQuery()
  // console.log(data)

  const [users, setUsers ] = useState([])

  useEffect(() => {
    if(data.users) setUsers(data.users)
  }, [data])


  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <h1>Error...</h1>


  const handleDelete = (id) => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  return(
    <>
    <Link to="/users/add" className="btn btn-primary mb-3">Nuevo usuario</Link>
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            <tr key={user.id}>
              <td className="align-middle"><img src={user.image} alt="" width="120px" /></td>
              <td className="align-middle">{user.firstName} {user.lastName}</td>
              <td className="align-middle">{user.email}</td>
              <td className="align-middle">
                <div className="d-flex justify-content-center gap-2">
                  <Link to={`/users/${user.id}`} className="btn btn-warning" >Editar</Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default TableUsers