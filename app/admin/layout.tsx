import AdminNav from "../components/admin/AdminNav";

export const metadata={
    title: 'k-bazar admin' ,
    description: 'k-bazar admin dashboard',
}

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return ( <div>
        <AdminNav />
        {children}
    </div> );
}
 
export default AdminLayout;