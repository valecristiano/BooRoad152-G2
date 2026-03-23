import { useParams } from "react-router-dom"
import members from "../data/members"

function MemberDetailPage() {

const {id}= useParams()

const member = members.find((p)=> p.id ===parseInt(id,10))

if(!member){
    return <div className= "container mt-5">
        <h2 className="text-danger">Passenger Not Found</h2>
    </div>
}

return (

<div className="container mt-5">
    <div className="card shadow p-4">
        <h1 className="mb-4">{member.first_name} {member.last_name}</h1>
        <p><strong>Codice Fiscale: {member.tax_code} </strong></p>
        <p><strong>Telefono: {member.phone}</strong></p>
        <p><strong>E-mail: {member.email}</strong></p>
       
    </div>
</div>
)
}

export default MemberDetailPage

